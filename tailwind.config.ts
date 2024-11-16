import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			'nexa-text': ['var(--font-nexa-text)']
  		},
  		screens: {
  			ultrawide: '2560px',
  			xs: '425px'
  		},
  		fontSize: {
  			'9xl': ['8rem', '1rem'],
  			'8xl': ['6rem', '6.5rem'],
  			'7xl': ['4.5rem', '5rem'],
  			'6xl': ['3.75rem', '4.25rem'],
  			'5xl': ['3rem', '3.5rem'],
  			'4xl': ['2.5rem', '3rem'],
  			'3xl': ['2rem', '2.5rem'],
  			'2xl': ['1.5rem', '2rem'],
  			xl: ['1.25rem', '1.75rem'],
  			lg: ['1.125rem', '1.5rem'],
  			base: ['1rem', '1.5rem'],
  			headline: ['1.125rem', '1.125rem'],
  			'headline-sm': ['1rem', '1rem'],
  			sm: ['0.875rem', '1.25rem'],
  			xs: ['0.75rem', '1rem']
  		},
  		transitionDuration: {
  			default: '200ms'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	},
  	variants: {
  		extend: {
  			brightness: ['hover', 'focus']
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")]
}
export default config
