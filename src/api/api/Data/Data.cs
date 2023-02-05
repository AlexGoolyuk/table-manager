using api.Data.Models;

namespace api.Data
{
    public static  class Data
    {
        public static List<Book> Books => allBooks;
        static List<Book> allBooks = new List<Book>
        {
            new Book { Id = 1, Title = "asd", Description = "qweqw", Author = "zxcz", Rate = 10, DateStart = new DateTime(2019, 01,20), DateRead = null },
            new Book { Id = 1, Title = "asd", Description = "qweqw", Author = "zxcz", Rate = 10, DateStart = new DateTime(2019, 01,20), DateRead = null },
            new Book { Id = 1, Title = "asd", Description = "qweqw", Author = "zxcz", Rate = 10, DateStart = new DateTime(2019, 01,20), DateRead = null },
            new Book { Id = 1, Title = "asd", Description = "qweqw", Author = "zxcz", Rate = 10, DateStart = new DateTime(2019, 01,20), DateRead = null },
            new Book { Id = 1, Title = "asd", Description = "qweqw", Author = "zxcz", Rate = 10, DateStart = new DateTime(2019, 01,20), DateRead = null },
            new Book { Id = 1, Title = "asd", Description = "qweqw", Author = "zxcz", Rate = 10, DateStart = new DateTime(2019, 01,20), DateRead = null },
            new Book { Id = 1, Title = "asd", Description = "qweqw", Author = "zxcz", Rate = 10, DateStart = new DateTime(2019, 01,20), DateRead = null },
            new Book { Id = 1, Title = "asd", Description = "qweqw", Author = "zxcz", Rate = 10, DateStart = new DateTime(2019, 01,20), DateRead = null },
            new Book { Id = 1, Title = "asd", Description = "qweqw", Author = "zxcz", Rate = 10, DateStart = new DateTime(2019, 01,20), DateRead = null },
            new Book { Id = 1, Title = "asd", Description = "qweqw", Author = "zxcz", Rate = 10, DateStart = new DateTime(2019, 01,20), DateRead = null },
        };
    }
}
