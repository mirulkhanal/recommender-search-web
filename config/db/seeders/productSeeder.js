const { faker } = require('@faker-js/faker');
const Product = require('../../../models/Product');
const db = require('../../../config/db');

db();

const seeder = async (count = 1) => {
  // create a new product for each count
  const products = [];
  for (let i = 1; i <= count; i++) {
    const product = {
      title: faker.commerce.productName(),
      price: faker.commerce.price(),
      description: faker.lorem.paragraph(),
      thumbnail: faker.image.imageUrl(),
      images: [
        faker.image.imageUrl(),
        faker.image.imageUrl(),
        faker.image.imageUrl(),
        faker.image.imageUrl(),
      ],
      brand: faker.company.companyName(),
      category: faker.commerce.department(),
      stock: faker.random.numeric(1, 100),
      rating: faker.random.numeric(1, 5),
    };
    products.push(product);
  }
  // save the products to the database
  try {
    await Product.insertMany(products);
  } catch (error) {
    console.log(error);
  }

  // nicely log the products to the console
  console.log(`Created ${products.length} products`);
  process.exit();
};

module.exports = seeder;
