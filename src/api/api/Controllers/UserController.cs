using api.Data.Models;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    public class UserController : Controller
    {

        public UserController()
        {
        }

        //Create/add a new
        [HttpPost("Add")]
        public async Task<IActionResult> AddBook([FromBody] Book book)
        {
            return await Task.FromResult(Ok());
        }

        //Read all
        [HttpGet("[action]")]
        public async Task<IActionResult> GetBooks()
        {
            return await Task.FromResult(Ok());
        }

        //Update
        [HttpPut("Update/{id}")]
        public async Task<IActionResult> UpdateBook(int id, [FromBody] Book book)
        {
            return await Task.FromResult(Ok());
        }

        //Delete
        [HttpDelete("Delete/{id}")]
        public async Task<IActionResult> DeleteBook(int id)
        {
            return await Task.FromResult(Ok());
        }

        //GetbyId
        [HttpGet("Get/{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            return await Task.FromResult(Ok());
        }
    }
}
