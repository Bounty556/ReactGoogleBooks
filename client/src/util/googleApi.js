import axios from 'axios';

export default {
  searchBooks: (searchTerm) => {
    return axios.get('/google/' + searchTerm);
  }
};