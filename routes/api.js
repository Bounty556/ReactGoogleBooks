const router = require('express').Router();
const bookController = require('../controllers').bookController;

router.route('/books')
  .get(bookController.getBooks)
  .post(bookController.addBook);

router.delete('/books/:id', bookController.deleteBook);

module.exports = router;