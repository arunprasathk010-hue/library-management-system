import {creatMembers, Delete, getAllmember,  getOneMembers, Update} from "../Controller/Member.js"
import express from "express"


const router = express.Router()

router.route("/").post(creatMembers).get(getAllmember)

router.route("/:id").get(getOneMembers).put(Update).delete(Delete)

export default router