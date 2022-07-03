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