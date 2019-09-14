import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Box } from 'rebass';

import { Arrow as Base } from 'reline';

const Arrow = ({ theme, onClick, ...props }) => {
    return (
        <Box mx={6} css={{ cursor: 'pointer' }}>
            <Base
                color={theme.colors.text}
                strokeWidth={3}
                size={50}
                onClick={onClick}
                {...props}
            />
        </Box>
    );
};

Arrow.propTypes = {
    theme: PropTypes.object.isRequired,
    onClick: PropTypes.func
}

export default withTheme(Arrow);
