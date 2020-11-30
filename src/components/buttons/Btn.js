import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Colors, Metrics, ApplicationStyles } from '../../themes';
import { Text } from '../Text';

export const Btn = (props) => {

    const { children, onPress, style, backgroundColor, icon } = props;

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            {...props}
            style={[
                styles.container,
                { backgroundColor },
                style
            ]}
        >
            {icon}
            <Text style={{color: Colors.white}} size={'xl'}>{children}</Text>
        </TouchableOpacity>
    );
};

Btn.propTypes = {
    onPress: PropTypes.func,
};

Btn.defaultProps = {
    backgroundColor: Colors.main
}

const styles = StyleSheet.create({
    ...ApplicationStyles,
    container: {
        height: Metrics.buttonMedium,
        ...ApplicationStyles.flexCenterMid,
        borderRadius: Metrics.radiusExtra,
        flexDirection: 'row'
    }
});
