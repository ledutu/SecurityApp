import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics } from '../../themes';

export const TextField = (props) => {
    return (
        <TextInput
            {...props}
            style={[styles.textInput, props.style]}
        />
    );
};

const styles = StyleSheet.create({
    ...ApplicationStyles,
    textInput: {
        ...ApplicationStyles.border,
        borderRadius: Metrics.radiusExtra,
        paddingHorizontal: Metrics.paddingContent+5,
    }
});
