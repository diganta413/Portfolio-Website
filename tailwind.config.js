module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx','./styles/**/*.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
	textColor: {
		"navBar" : "#ccd6f6",
		"outline" : "#64ffda"
	},
	borderColor: theme => ({
       ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),
		"outline" : "#64ffda"
      }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
