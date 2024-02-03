/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      'mobile': '375px',

      'tablet': '640px',

      'laptop': '768px',

      'desktop': '1280px',
    },
    
    extend: {
      backgroundImage: {
        'hero': "url(my-project\src\lib\assets\home\background-home-mobile.jpg)",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    }
  },
  plugins: []
};