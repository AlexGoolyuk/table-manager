
using api.Data.Models;

namespace api.Data.Services
{
    public class BookService : IBookService
    {
        public void AddBook(Book book)
        {
            Data.Books.Add(book);
        }

        public void DeleteBook(int id)
        {
            var book = Data.Books.FirstOrDefault(x => x.Id == id);
            if (book != null)
            {
                Data.Books.Remove(book);
            }
        }

        public List<Book> GetAllBooks()
        {
            return Data.Books.ToList();
        }

        public Book? GetBookById(int id)
        {
            return Data.Books.FirstOrDefault(x => x.Id == id);
        }

        public void UpdateBook(int id, Book book)
        {
            var oldBook = Data.Books.First(x => x.Id == id);
            if(oldBook != null)
            {
                oldBook.Title= book.Title;
                oldBook.Description= book.Description;
                oldBook.Author= book.Author;
                oldBook.Rate= book.Rate;
                oldBook.DateStart= book.DateStart;
                oldBook.DateRead= book.DateRead;
            }
        }
    }
}
