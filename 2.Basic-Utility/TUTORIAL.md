## Tips dan Trick

1. Minify file css
```
npx tailwindcss -o ./public/css/final.css --minify
```
2. Extend class yang sudah ada
- buka [link-ini](https://tailwindcss.com/docs/configuration)
- custom di file tailwind.config.js
```
module.exports = {
  content: ["./views/**/*.{ejs,html}","./public/**/*.js"],
  theme: {
    extend: {
      spacing: {
        "13": "3.5rem",
      },
      fontFamily: {
        inter:['Inter']
      },
      colors: {
        primary: "#bada55",
        secondary: "#aeaeae",
      },
    },
  },
  plugins: [],
}
```
3. Custom langsung atau Arbitrary values
```
<div class="w-[32rem]">
  <!-- ... -->
</div>
```
4. Pseudo-Class grouping parent
- tambahkan class group di parent tag
- agar child nya bisa dihover
```
<div class="group">
  <h5 class="group-hover:text-white">myCard</h5>
  <p class="group-hover:text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, possimus magni aspernatur enim saepe, itaque provident, deserunt corporis distinctio magnam cumque eveniet! Animi quaerat necessitatibus, non asperiores repudiandae unde expedita!</p>
</div>
```
5. Pseudo-Class grouping sibling
- tambahkan class peer di sibling tag
- agar sibling nya bisa control dari sibling yang lain
```
<input type="email" id="email" placeholder="Masukkan Email" class="peer">
<p class="peer-invalid:visible">Email tidak valid</p>
```
6. Dark Mode tailwindcss
- Beri class dark:property di tag yang ingin diubah ke dark mode
```
<body class="dark:bg-slate-800 dark:text-slate-200">

</body>
```
- atur tailwind.config nya
```
module.exports = {
  content: ["./views/**/*.{ejs,html}", "./public/**/*.js"],
  darkMode:"class",
  theme: {
    extend: {
      spacing: {
        "13": "3.5rem",
      },
      fontFamily: {
        inter:['Inter']
      },
      colors: {
        primary: "#bada55",
        secondary: "#aeaeae",
      },
    },
  },
  plugins: [],
}
```
- tambahkan class dark di tag html jika ingin ke dark mode
```
<html lang="en" class="dark">
```
7. Animation tailwindcss
- buat animation di file tailwind.config.js
```
keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
animation: {
        spin_slow: "spin 3s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
```
- jika sudah bisa segera dipakai di html
```
<div class="animate-wiggle"></div>
```
8. class group tidak bisa digunakan di @layer component