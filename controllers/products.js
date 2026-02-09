import Product from '../models/products.js';

// Data akan selalu disimpan dalam array diglobal jika aplikasi tidak mati, tetapi jika app mati maka datanya
// akan hilang
// const products = [];

const getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(import.meta.dirname, '../', 'views', 'add-product.html'));
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

const postAddProduct = (req, res, next) => {
  console.log(req.body);
  const product = new Product(req.body.title);
  product.save();
  //   products.push({ title: req.body.title });
  res.redirect('/');
};

const getProducts = (req, res, next) => {
  // Dari pada begini biar bisa menggunakan method didalam object mending pake method static aja
  // agar bisa dijalankan tanpa harus membuat objectnya terlebih dahulu
  //   const product = new Product('Dummy');
  //   console.log(product);

  Product.fetchAll((products) => {
    console.log(products.length);
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });

  // console.log(products);
  // console.log(import.meta);
  // console.log(__dirname);
  // console.log(path.join(__dirname, 'views'));
  // console.log(__filename);
  // res.sendFile(path.join(import.meta.dirname, '..', 'views', 'shop.html'));
  // const products = products;
};

export default { getAddProduct, postAddProduct, getProducts };
