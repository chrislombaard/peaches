import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Box } from 'rebass';

import { Plus as Base } from 'reline';

const Plus = ({ theme, onClick }) => {
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

Plus.propTypes = {
    theme: PropTypes.object.isRequired,
    onClick: PropTypes.func
}

export default withTheme(Plus);
