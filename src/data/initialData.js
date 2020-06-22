// Схема данных книги. По-сути набор ключей,
// по которым в приложении можно обращаться к разным параметрам книги
exports.bookSchema = {
  id: '',
  bookTitle: '',
  bookAuthor: '',
  bookReleaseYear: '',
  bookCover: ''
};

// Список книг изображаемых изначально
// Имитация данных, полученных от сервера или API
exports.initialBookList = [
  {
    id: '35457986',
    bookTitle: 'C# in Depth',
    bookAuthor: 'Jon Skeet',
    bookReleaseYear: '2013',
    bookCover:
      'https://images-na.ssl-images-amazon.com/images/I/41prHleW6NL._SX397_BO1,204,203,200_.jpg'
  },
  {
    id: '76682037',
    bookTitle: 'Effective Java',
    bookAuthor: 'Joshua Bloch',
    bookReleaseYear: '2008',
    bookCover:
      'https://images-na.ssl-images-amazon.com/images/I/512uU-1z0qL._SX396_BO1,204,203,200_.jpg'
  },
  {
    id: '49503351',
    bookTitle: 'JavaScript: The Good Parts',
    bookAuthor: 'Jon Skeet',
    bookReleaseYear: '2008',
    bookCover:
      'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg'
  }
];
