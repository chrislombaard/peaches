import React, { Fragment } from 'react';

import { createGlobalStyle } from 'styled-components';
/*eslint no-undef: "error"*/
import styled, {
    ThemeProvider as StyledThemeProvider
} from 'styled-components';
import styledNormalize from 'styled-normalize';
import theme from '../../theme';

const GlobalStyle = createGlobalStyle`
    ${styledNormalize}
    * {
        box-sizing: border-box;
            &,
            &::before,
            &::after {
                box-sizing: border-box;
            }
        }

        figure {
            margin: 0;
        }

        html {
            font-size: 100%;
            font-family: ${props => props.theme.fonts.body};
            line-height: 1.4;
            -webkit-font-smoothing: antialiased;
        }

        h1 {
            font-family: ${props => props.theme.fonts.heading}
        }

        body {
            background: ${props => props.theme.colors.background}};
        }

        a {
            text-decoration: none;
        }
`;

const Base = styled.div`
    font-family: ${props => props.theme.fonts.body};
    line-height: 1.4;
    user-select: none;
    * {
        box-sizing: border-box;
    }
`;

export const ThemeProvider = props => {
    const baseTheme = props.theme ? props.theme : theme;
    return (
        <StyledThemeProvider theme={baseTheme}>
            <Fragment>
                <Base {...props} />
                <GlobalStyle />
            </Fragment>
        </StyledThemeProvider>
    );
};

export default ThemeProvider;
