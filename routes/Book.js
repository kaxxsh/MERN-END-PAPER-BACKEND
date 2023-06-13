import Express, { Router } from "express";
import { getBooks, addBook } from "../controllers/Book.js";

const router = Express.Router();

router.route('/getBooks').get(getBooks)
router.route('/addBook').post(addBook)


export default router;
