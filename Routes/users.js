const express = require("express");
const router = express.Router();

const user_model = require("../MongoDB/model")

// Create User
router.post("/", async (req, res) => {
    try {
        const create_user = await new user_model({
            fullName: req.body.fullName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,   
            companyName: req.body.companyName,   
            message: req.body.message,   
        })
        const save_user = await create_user.save();
        if(res.statusCode === 200) {
            res.status(200).send({_message : 'successfully submitted'});
        }else {
         res.send({_message : 'failed submission'});
        }

    } catch(err) {
        res.status(400).send(err);
    }
})

module.exports = router;