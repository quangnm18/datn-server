const express = require("express");
const router = express.Router();

const bookController = require("../controller/BookController");

router.put("/update/:id", bookController.updateBook);
router.post("/add", bookController.addBook);
router.delete("/delete/:id", bookController.deleteBook);

router.get("/detail/:id", bookController.getBookId);
router.get("/", bookController.getAll);

module.exports = router;
