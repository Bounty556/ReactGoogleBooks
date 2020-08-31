import axios from 'axios';

export default {
  getBooks: () => {
    return axios.get('/api/books');
  },

  addBook: (book) => {
    return axios.post('/api/books', book);
  },

  deleteBook: (id) => {
    return axios.delete('/api/books/' + id);
  }
};