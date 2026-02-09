import bodyParser from 'body-parser';
import express from 'express';
import adminRoutes from './routes/admin.js';
import shopRoutes from './routes/shop.js';
import path from 'path';
import expresHbs from 'express-handlebars';
import notFoundController from './controllers/error.js';

const app = express();

// Melakukan registrasi/mendaftarkan engine baru ke express yaitu handlebars
// app.engine(
//   'hbs',
//   expresHbs({ layoutsDir: 'views/layouts/', defaulLayouts: 'main-layout', extname: 'hbs' }),
// );
// view engine artinya adalah meminta ke express jika ingin menjalankan
// render konten dinamis tolong gunakan engine ini 'pug'
// app.set('view engine', 'pug');
// app.set('view engine', 'hbs');
app.set('view engine', 'ejs');
// views artinya agar express tahu dimana path file konten dinamisnya
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(import.meta.dirname, 'public'))); // To use static file
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(notFoundController.notFound);

// const server = http.createServer(app);

app.listen(3000);

// server.listen({
//   port: 3000,
// });
