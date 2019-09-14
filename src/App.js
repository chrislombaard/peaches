import React, { Component } from 'react';
import Gallery from './components/Gallery';
import { ThemeProvider } from './components/ThemeProvider';
import { Box } from 'rebass';
import baseTheme from './theme';

class App extends Component {
    state = {
        theme: 'light'
    };

    handleThemeChange = () => {
        const { theme } = this.state;
        this.setState({ theme: theme === 'light' ? 'dark' : 'light' });
    };

    render() {
        const { theme } = this.state;
        return (
            <ThemeProvider theme={baseTheme[theme]}>
                <Box mx={5} my={3}>
                    <Gallery
                        themeChange={this.handleThemeChange}
                        themeName={theme}
                    />
                </Box>
            </ThemeProvider>
        );
    }
}

export default App;
