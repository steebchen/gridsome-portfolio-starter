module.exports = {
	theme: {
		extend: {
			spacing: {
				'80': '20rem',
				'108': '27rem',
			},
			borderWidth: {
				'14': '14px',
			},
		},
		container: {
			padding: '1rem',
		},
		colors: {
			primary: {
				default: '#2f855a',
				700: '#2f855a',
				800: '#276749',
			},

			background: {
				primary: 'var(--bg-background-primary)',
				secondary: 'var(--bg-background-secondary)',
				tertiary: 'var(--bg-background-tertiary)',

				form: 'var(--bg-background-form)',
			},

			copy: {
				primary: 'var(--text-copy-primary)',
				secondary: 'var(--text-copy-hover)',
			},

			'border-color': {
				primary: 'var(--border-border-color-primary)',
			},

			transparent: 'transparent',

			black: '#000',
			white: '#fff',

			gray: {
				100: '#f7fafc',
				200: '#edf2f7',
				300: '#e2e8f0',
				400: '#cbd5e0',
				500: '#a0aec0',
				600: '#718096',
				700: '#4a5568',
				800: '#2d3748',
				900: '#1a202c',
			},
		},
		fontFamily: {
			sans: [
				'Nunito Sans',
				'Roboto',
				'-apple-system',
				'BlinkMacSystemFont',
				'"Segoe UI"',
				'"Helvetica Neue"',
				'Arial',
				'"Noto Sans"',
				'sans-serif',
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
				'"Noto Color Emoji"',
			],
			serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
			mono: [
				'Menlo',
				'Monaco',
				'Consolas',
				'"Liberation Mono"',
				'"Courier New"',
				'monospace',
			],
		},
	},
	variants: {
		// Some useful comment
	},
	plugins: [
		// Some useful comment
	],
}
