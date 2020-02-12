
/**
 * @format
 */

import React from 'react'
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

const BoxView: React.FC<BoxProps> = (props) => {
    const { flex = "", round = "", position = "", elevation = "", direction = "", alignItems = "", background = "", alignSelf = "", border = "", justify = "", margin = "", padding = "" } = props;
    return (
        <View style={[styles['flex'][flex], styles['round'][round], styles['elevation'][elevation], styles['position'][position], styles[direction], styles['background'][background], styles['alignItems'][alignItems], styles['alignSelf'][alignSelf], styles['border'][border], styles['justify'][justify], styles['margin'][margin], styles['padding'][padding]]}>
            {props.children}
        </View>
    );
};

interface BoxProps {
    flex?: string;
    round?: string;
    position?: string;
    elevation?: string;
    background?: string;
    direction?: string;
    align?: string;
    alignItems?: string;
    alignContent?: string;
    alignSelf?: string;
    border?: string;
    justify?: string;
    margin?: string;
    padding?: string;
};

BoxView.defaultProps = {
    flex: "",
    round: "",
    position: "",
    elevation: "",
    background: "transparent",
    direction: "",
    margin: '',
    padding: '',
    align: '',
    alignContent: '',
    alignItems: '',
    alignSelf: '',
    justify: '',
    border: ''
};

BoxView.propTypes = {
    flex: PropTypes.string,
    round: PropTypes.string,
    position: PropTypes.string,
    elevation: PropTypes.string,
    background: PropTypes.string,
    direction: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    align: PropTypes.string,
    alignContent: PropTypes.string,
    alignSelf: PropTypes.string,
    justify: PropTypes.string,
    border: PropTypes.string
};

export default BoxView