import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				azul: "#0C95E2",
				roxo: "#775fb2",
				dourado: "#e9e6b9",
				azulao: "#0b3c4a",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: "hsl(var(--card))",
				popover: "hsl(var(--popover))",
				primary: "hsl(var(--primary))",
				secondary: "hsl(var(--secondary))",
				muted: "hsl(var(--muted))",
				accent: "hsl(var(--accent))",
				destructive: "hsl(var(--destructive))",
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				...Object.fromEntries(Array.from({ length: 5 }, (_, i) => [`chart-${i + 1}`, `hsl(var(--chart-${i + 1}))`])),
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				largao: '1472px',
				largaco: '1920px'
			},
		},
	},
	plugins: [animate],
} satisfies Config;
