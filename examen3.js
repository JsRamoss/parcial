// Seleccionar elementos del DOM
const bookList = document.querySelector('.book-list');
const books = document.querySelectorAll('.book');

// Agregar un evento de clic a cada libro
books.forEach(book => {
  book.addEventListener('click', () => {
    alert(`Has seleccionado el libro "${book.querySelector('h3').textContent}"`);
  });
});