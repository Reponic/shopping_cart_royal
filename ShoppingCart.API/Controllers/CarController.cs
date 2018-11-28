using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShoppingCart.API.Data;
using ShoppingCart.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingCart.API.Controllers
{
    // http://localhost:500/api/car
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {

        private readonly DataContext _context;

        public CarController(DataContext context)
        {
            _context = context;
        }
        // GET api/products
        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetProductsOnCar()
        {
            var products = await _context.Car.ToListAsync();

            return Ok(products);
        }

        // GET api/car/5
        [AllowAnonymous]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductsOnCar(int id)
        {
            var products = await _context.Car.FirstOrDefaultAsync(x => x.Id == id);

            return Ok(products);
        }

        // POST api/car
        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> AddToCart([FromBody] Car productFromCar)
        {
            await _context.Car.AddAsync(productFromCar);
            await _context.SaveChangesAsync();

            var products = await _context.Car.ToListAsync();

            return  Ok(products);
        }

        // PUT api/products/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/products/5
        [AllowAnonymous]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var todo = await _context.Car.FindAsync(id);
            if (todo == null)
            {
                return NotFound();
            }

            _context.Car.Remove(todo);
            _context.SaveChanges();

            var products = await _context.Car.ToListAsync();

            return Ok(products);
        }
    }
}