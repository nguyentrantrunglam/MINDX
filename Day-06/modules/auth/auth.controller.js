const UserModel = require('./user');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")


const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const existedUser = await UserModel.findOne({ username })

        if (existedUser) {
            throw new Error('Username duplicate')
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = await UserModel.create({
            username,
            password: hashPassword
        });
        res.send({ success: 1, data: newUser });

    } catch (error) {
        res.status(400).send({ success: 0, message: error.message });

    }


};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        // const salt  = await bcrypt.genSalt(10);
        // const hashPassword = await bcrypt.hash(password,salt);

        const existedUser = await UserModel.findOne({
            username
        });

        if (!existedUser) {
            throw new Error("User name or password not true !!! ");
        };

        const matchedPassword = await bcrypt.compare(password, existedUser.password);

        if (!matchedPassword) {
            throw new Error("User name or password not true !!! ");
        }
        const {userId} = existedUser._id;
        const token = jwt.sign({
            userId,
        },"web57",{
            expiresIn: 60 * 60 * 24 * 7,
        }
        )

        res.send({ success: 1,data: {_id: userId, token}});
    } catch (error) {
        res.status(400).send({ success: 0, message: error.message });
    }
};

module.exports = {
    register,
    login,
}