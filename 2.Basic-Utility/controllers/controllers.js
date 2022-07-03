const prefix = `/`;

async function renderIndex(req, res) {
  res.render('pages/index', {
    title: 'Latihan 2 - Basic Utility Part 1',
    layout: 'layout/main-layout',
    prefix,
  })
}

module.exports = { renderIndex };
