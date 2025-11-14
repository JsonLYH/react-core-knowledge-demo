import { ThemeProvider } from 'styled-components'
import { ThemeProviderChildDemo } from "./ThemeProviderChildDemo";
export function ThemeProviderDemo(props) {
    return (
        <ThemeProvider theme={{ color: 'red' }}>
            <ThemeProviderChildDemo />
        </ThemeProvider>
    );
}