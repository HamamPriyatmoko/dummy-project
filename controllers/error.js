function notFound(req, res, next) {
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
  // res.status(404).sendFile(path.join(import.meta.dirname, 'views', '404.html'));
}

export default { notFound };
