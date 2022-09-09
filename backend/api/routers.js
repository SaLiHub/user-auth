import express from "express"

import UsersController from "./users.controller.js";

const router = express.Router();

router.route("/sign-up").post(UsersController.apiPostUser);

// router.route("/check").get((req, res,) => res.send('check'));
//
//
// router.route("/:id").delete((req, res) => {
//     const id = req.params.id
//     Task.deleteOne({_id: id}).then(() => {
//         res.send(`Task with id:${id} was deleted!`)
//     });
//
// })
//
// router.route("/:id").patch(async (req, res) => {
//     const id = req.params.id;
//     await Task.updateOne({_id: id}, {isChecked: true})
//     const updatedTask = await Task.findOne({_id: id})
//     res.send(updatedTask);
// })
//
//
// router.route("/add").post((req, res,) => {
//     const {isChecked, inputValue} = req.body;
//
//     const newTask = new Task({isChecked, inputValue});
//     newTask.save()
//         .then(() => res.json(newTask))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

export default router;

