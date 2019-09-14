// animation easing curves
const easeInOut = 'cubic-bezier(0.5, 0, 0.25, 1)';
const easeOut = 'cubic-bezier(0, 0, 0.25, 1)';
const easeIn = 'cubic-bezier(0.5, 0, 1, 1)';

// animation delay
const transitionDelays = {
    small: '60ms',
    medium: '160ms',
    large: '260ms',
    xLarge: '360ms'
};

const breakpoints = [32, 48, 64, 80].map(n => n + 'em');

const space = [0, 4, 8, 16, 32, 64, 128];

const baseTheme = {
    fonts: {
        body: 'system-ui, sans-serif',
        heading: '"Avenir Next", sans-serif',
        monospace: 'Menlo, monospace'
    },
    fontWeight: {
        body: 400,
        heading: 700
    },
    fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 96],
    lineHeights: {
        body: 1.5,
        heading: 1.125
    },
    letterSpacings: {
        body: 'normal',
        caps: '0.2em'
    },
    space,
    breakpoints,
    styles: {
        h1: {
            fontSize: 32,
            fontFamily: 'heading',
            fontWeight: 'heading',
            color: 'primary',
            mt: 4,
            mb: 2
        }
    },
    transitionDelays: {
        ...transitionDelays
    },

    timingFunctions: {
        easeInOut,
        easeOut,
        easeIn
    }
};

export default {
    light: {
        ...baseTheme,
        colors: {
            text: '#000',
            background: '#fff',
            primary: '#e0e'
        },
    },
    dark: {
        ...baseTheme,
        colors: {
            text: 'tomato',
            background: '#000',
            primary: '#fff'
        }
    }
};
