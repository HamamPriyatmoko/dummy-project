import fs from 'fs';
import path from 'path';

const getProductsHelper = (path, cb) => {
  const p = path;
  console.log(p);
  fs.readFile(p, (err, data) => {
    if (err) {
      return cb([]);
    } else {
      cb(JSON.parse(data));
    }
  });
};

export default class Product {
  static path = path.join(path.dirname(import.meta.filename), '..', 'data', 'products.json');
  constructor(title) {
    this.title = title;
  }

  save() {
    // Cara memanggil static method/property ada 2 cara
    // pertama: const p = Product.path;
    // kedua: const p = this.path; Jika static propertinya private tidak bisa pake this
    getProductsHelper(Product.path, (products) => {
      products.push(this);
      fs.writeFile(Product.path, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsHelper(Product.path, cb);
    // fs.readFile(p, (err, data) => {
    //   console.log(err)
    //   products = JSON.parse(data);
    // });
    // fs.readFileSync;
    // This disini merujuk pada object global didalam file products.js
  }
}
