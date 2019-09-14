import styled, { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import { Text as Base } from 'rebass';

const color = ({ theme: { colors }}) => {
    return {
        color: colors.text
    }
}

const Text = withTheme(styled(Base)(color));

Text.propTypes = {
    theme: PropTypes.objectOf({
        colors: PropTypes.object
    })
}

export default Text;