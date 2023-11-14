var Book = require("../model/book.model");

class BookController {
  getAll(req, res) {
    Book.get_all(function (data) {
      res.send(data);
    });
  }

  getBookId(req, res) {
    Book.getById(req.params.id, function (data) {
      res.send(data);
    });
  }

  addBook(req, res) {
    Book.create(req.body, (data) => {
      res.send(data);
    });
  }

  deleteBook(req, res) {
    Book.delete(req.params.id, (data) => {
      res.send(data);
    });
  }

  updateBook(req, res) {
    Book.update(req.params.id, req.body, (data) => {
      res.send(data);
    });
  }
}

module.exports = new BookController();
