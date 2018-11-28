using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShoppingCart.API.Data;

namespace ShoppingCart.API.Controllers
{
    // http://localhost:500/api/products
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly DataContext _context;

        public ProductsController(DataContext context)
        {
            _context = context;
        }
        // GET api/products
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            var products = await _context.Products.ToListAsync();

            return Ok(products);
        }

        // GET api/products/5
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProducts(int id)
        {
            var products = await _context.Products.FirstOrDefaultAsync(x => x.id == id);

            return Ok(products);
        }

        // POST api/products
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/products/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/products/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
