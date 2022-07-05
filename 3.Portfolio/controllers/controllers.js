const prefix = `/`;

async function renderIndex(req, res) {
  res.render('pages/index', {
    title: 'Latihan 3 - Portfolio',
    layout: 'layout/main-layout',
    prefix,
  })
}

module.exports = { renderIndex };
