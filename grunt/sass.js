// Takes your SCSS files and compiles them to CSS
module.exports = {
  dist: {
    options: {
      style: 'expanded'
    },
    files: {
      '<%= paths.src %>/css/main.css': '<%= paths.src %>/css/scss/main.scss'
    }
  },
};
