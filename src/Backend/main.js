const express = require("express");
const app = express();
const port = process.env.PORT || 4001;
const User = require("./UserSchema");
const bcrypt = require("bcrypt");
const cors = require('cors');
require("./Conn");
const jwt = require("jsonwebtoken");
const jwtKey = "lotteryOffice";

app.use(cors());
app.use(express.json());

app.post("/signup", async (req, res) => {
    const {
        fName,
        lName,
        email,
        phone,
        gender,
        dateOfBirth,
        address,
        password,
        cPassword
    } = req.body;

    try {
        const findUser = await User.findOne({ email });
        if (findUser) {
            return res.status(400).send({ message: "User already exists" });
        }

        if (password !== cPassword) {
            return res.status(400).send({ message: "Passwords do not match" });
        }

        const signupData = new User({
            fName,
            lName,
            email,
            phone,
            gender,
            dateOfBirth,
            address,
            password
        });

        await signupData.save();
        jwt.sign({ signupData }, jwtKey, { expiresIn: "2h" }, (err, token) => {
            if (err) {
                res.status(400).send({ message: "Something went wrong please try again later." })
            } else {
                res.status(201).send({ message: "User registered successfully", auth: token });
            }
        })
    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(400).send({ message: error.message });
        } else if (error.name === 'MongoError' && error.code === 11000) {
            res.status(400).send({ message: 'Email already exists' });
        } else {
            res.status(500).send({ message: 'Internal server error' });
        }
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const findUser = await User.findOne({ email });
        if (findUser) {
            const matchPassword = await bcrypt.compare(password, findUser.password);
            if (matchPassword) {
                jwt.sign({ findUser }, jwtKey, { expiresIn: "2h" }, (err, token) => {
                    if (err) {
                        res.status(400).send({ message: "Something went wrong please try again later" })
                    } else {
                        res.status(200).send({ message: "Login successful", auth: token });
                    }
                })
            } else {
                res.status(400).send({ message: "Password does not match" });
            }
        } else {
            res.status(404).send({ message: "User not found" });
        }
    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(400).send({ message: error.message });
        } else {
            res.status(500).send({ message: "Internal server error" });
        }
    }
});

function tokenMiddleware(req, res, next) {
    let token = req.headers["authorization"];
    if (token) {
        token = token.split(' ');
        jwt.verify(token, jwtKey, (err, valid) => {
            if (err) {
                res.status(400).send({ message: "Please provide valid token" });
            } else {
                next();
            }
        })
    } else {
        res.status(400).send({ message: "Please send token with headers" })
    }
   
}


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
