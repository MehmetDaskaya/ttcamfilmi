module.exports = {
  content: [
    "./*.html", // Looks for HTML files in the root directory
    "./blog-yazilari/*.html", // Looks for HTML files in the blog folder
    "./galeri/*.html", // Looks for HTML files in the gallery folder
    "./**/*.html", // Looks for HTML files in any other subdirectories
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
