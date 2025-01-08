import "./globals.css";

export default function Layout({ children }) {
	return (
		<html lang="en-US">
			<body>
				{children}
			</body>
		</html>
	);
}
