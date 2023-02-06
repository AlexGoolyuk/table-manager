using api.Data.Models;

namespace api.Data
{
    public static  class Data
    {
        public static List<Book> Books => allBooks;
        static List<Book> allBooks = new List<Book>
        {
            new Book { Id = 1, Title = "asd", Description = "qweqw", Author = "zxcz", Rate = 10, DateStart = new DateTime(2019, 01,20), DateRead = null },
            new Book { Id = 2, Title = "asd", Description = "qweqw", Author = "zxcz", Rate = 10, DateStart = new DateTime(2019, 01,20), DateRead = null },
            new Book { Id = 3, Title = "asd", Description = "qweqw", Author = "zxcz", Rate = 10, DateStart = new DateTime(2019, 01,20), DateRead = null },
            new Book { Id = 4, Title = "asd", Description = "qweqw", Author = "zxcz", Rate = 10, DateStart = new DateTime(2019, 01,20), DateRead = null },
            new Book { Id = 5, Title = "asd", Description = "qweqw", Author = "zxcz", Rate = 10, DateStart = new DateTime(2019, 01,20), DateRead = null },
            new Book { Id = 6, Title = "asd", Description = "qweqw", Author = "zxcz", Rate = 10, DateStart = new DateTime(2019, 01,20), DateRead = null },
            new Book { Id = 7, Title = "asd", Description = "qweqw", Author = "zxcz", Rate = 10, DateStart = new DateTime(2019, 01,20), DateRead = null },
            new Book { Id = 8, Title = "asd", Description = "qweqw", Author = "zxcz", Rate = 10, DateStart = new DateTime(2019, 01,20), DateRead = null },
            new Book { Id = 9, Title = "asd", Description = "qweqw", Author = "zxcz", Rate = 10, DateStart = new DateTime(2019, 01,20), DateRead = null },
            new Book { Id = 10, Title = "asd", Description = "qweqw", Author = "zxcz", Rate = 10, DateStart = new DateTime(2019, 01,20), DateRead = null },
        };
    }
}
