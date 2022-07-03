const prefix = `/`;

async function renderIndex(req, res) {
  res.render('pages/index', {
    title: 'Latihan 1 - Install Tailwind',
    layout: 'layout/main-layout',
  })
}

module.exports = { renderIndex };
