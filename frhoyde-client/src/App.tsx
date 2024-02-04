import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { AppRouterComponent } from "./app/components/app-router.component";
function App() {
	return (
		<ThemeProvider
			defaultTheme="light"
			storageKey="vite-ui-theme"
		>
			<BrowserRouter>
				<AppRouterComponent />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
