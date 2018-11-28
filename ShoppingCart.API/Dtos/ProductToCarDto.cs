using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShoppingCart.API.Dtos
{
    public class ProductToCarDto
    {
        public string Name { get; set; }

        public string ImgURL { get; set; }

        public int Price { get; set; }
    }
}
