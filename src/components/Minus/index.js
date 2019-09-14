import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Box } from 'rebass';

import { Minus as Base } from 'reline';

const Minus = ({ theme, onClick }) => {
    return (
        <Box my="auto" mx={2} css={{ cursor: 'pointer' }}>
            <Base
                color={theme.colors.text}
                strokeWidth={5}
                size={20}
                onClick={onClick}
            />
        </Box>
    );
};

Minus.propTypes = {
    theme: PropTypes.object.isRequired,
    onClick: PropTypes.func
}

export default withTheme(Minus);
