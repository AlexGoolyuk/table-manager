using api.Data.Models;
using api.Data.Services;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    public class BooksController : Controller
    {
        private IBookService _bookService;

        public BooksController(IBookService bookService)
        {
            this._bookService = bookService;
        }

        //Create/add a new
        [HttpPost("AddBook")]
        public async Task<IActionResult> AddBook([FromBody]Book book)
        {
            this._bookService.AddBook(book);
            return await Task.FromResult(Ok());
        }

        //Read all
        [HttpGet("[action]")]
        public IActionResult GetBooks()
        {
            try
            {

            var allBooks = this._bookService.GetAllBooks();
            return Ok(allBooks);
            }
            catch (Exception e )
            {
                Console.WriteLine(e.Message);
                return BadRequest(e.Message);
            }
        }

        //Update
        [HttpPut("UpdateBook/{id}")]
        public async Task<IActionResult> UpdateBook(int id, [FromBody]Book book)
        {
            this._bookService.UpdateBook(id, book);
            return await Task.FromResult(Ok());
        }

        //Delete
        [HttpDelete("DeleteBook/{id}")]
        public async Task<IActionResult> DeleteBook(int id)
        {
            this._bookService.DeleteBook(id);
            return await Task.FromResult(Ok());
        }

        //GetbyId
        [HttpGet("GetBook/{id}")]
        public IActionResult GetById(int id)
        {
            var book = this._bookService.GetBookById(id);
            return Ok(book);
        }
    }
}
