import "./globals.css";

import font from "next/font/local";

const inter = font({
	display: "swap",
	src: "./inter.woff2",
	variable: "--font-inter",
});

export default function Layout({ children }) {
	return (
		<html lang="en-US" className={inter.variable}>
			<body>
				{children}
			</body>
		</html>
	);
}
