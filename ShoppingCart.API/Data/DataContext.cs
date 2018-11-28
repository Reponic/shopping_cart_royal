using Microsoft.EntityFrameworkCore;
using ShoppingCart.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingCart.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {
        }

        public DbSet<Product> Products {get; set;}

        public DbSet<User> Users {get; set;}

        public DbSet<Car> Car { get; set; } 
    }
}
