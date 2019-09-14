import styled from 'styled-components';

export const Button = styled.button`
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    padding: 0.25em 1em;
    border: 2px solid ${props => props.theme.colors.primary};
    border-radius: 2px;
    cursor: pointer;
    outline: none;
`;

export default Button;
