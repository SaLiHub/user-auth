import User from "./user.model.js";
import bcrypt from "bcrypt";

export default class UsersController {
    static async apiPostUser(req, res) {
        const data = req.body;
        const {password} = data;
        try {
            // Hash password
            data.password = await bcrypt.hash(password, 5);

            // console.log(await User.findOne({username}).exec());
            const newUser = new User(data);
            newUser.save()
                .then(() => res.redirect('http://localhost:3000/api/v1/sign-in'))
                .catch(err => res.status(400).json('Error: ' + err));
        } catch (err) {
            res.send(err)
        }
    }
}