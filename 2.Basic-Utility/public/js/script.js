const checkbox = document.querySelector('#toggle'),
  html = document.querySelector('html');

checkbox.onclick = () => checkbox.checked ? html.classList.add('dark') : html.classList.remove('dark');