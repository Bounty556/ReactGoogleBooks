const router = require('express').Router();
const bookController = require('../controllers').bookController;

router.route('/books').get(bookController.getBooks).post(bookController.addBook);

router.delete('/books/:id', bookController.deleteBook);

router.get('/google/:search', (req, res) => {
  const searchURL = 'https://www.googleapis.com/books/v1/volumes?q=';
  const searchTerm = encodeURIComponent(req.params.search);
  const key = process.env.GOOGLE_API_KEY || 'AIzaSyCamhEkY_Gc1iXx6kcDyOA4wuEnl0aEw7g';

  axios
    .get(searchURL + searchTerm + 'key=' + key)
    .then(results => res.json(results.data))
    .catch(err => res.status(422).json(err));
});

module.exports = router;
