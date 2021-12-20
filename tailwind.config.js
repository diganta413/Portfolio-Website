module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.tsx', './components/**/*.tsx','./styles/**/*.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
	textColor: {
		"navBar" : "#ccd6f6",
		"outline" : "#64ffda",
		"textLight" : "#8892b0"
	},
	borderColor: theme => ({
       ...theme('colors'),
        DEFAULT: theme('colors.gray.300', 'currentColor'),
		"outline" : "#64ffda"
      }),
    extend: {
		margin : {
			"30" : "20%",
			"15" : "15%"
		}
	},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
