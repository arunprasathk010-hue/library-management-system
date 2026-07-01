import {creatBooks, Delete, getAllBooks, getOneBooks, Update} from "../Controller/Book.js"
import express from "express"


const router = express.Router()

router.route("/").post(creatBooks).get(getAllBooks)

router.route("/:id").get(getOneBooks).put(Update).delete(Delete)

export default router