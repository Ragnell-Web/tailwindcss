### Tutorial Install Tailwindcss

> 1. Install NPM
> ```
> npm install tailwindcss --save-dev
> ```
> 2. Masukan perintah ke package.json
> ```
> npx tailwindcss init
> ```
> 3. Konfigurasi letak tempat html dan js
> ```
> module.exports = {
> content: ["./views/**/*.{ejs,html}","./public/**/*.js"],
> theme: {
>   extend: {
>
>    },
>  },
>  plugins: [],
> }
> ```
> 4. Tambahkan component tailwind ke file css atau scss
> ```
> @tailwind base;
> @tailwind components;
> @tailwind utilities;
> ```
> 5. Build Tailwind dengan perintah
> ```
> npx tailwindcss -i ./public/css/input.css -o ./public/css/output.css --watch
> ```