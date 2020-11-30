//import liraries
import React from 'react';
import { connect } from 'react-redux';
import {
    View,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
import Modal from 'react-native-modal';
import { Colors, ApplicationStyles, Metrics, Fonts } from '../../themes';

import { loadingTypes } from '../../store/actions/actionTypes';

// create a component
const OverlapLoading = props => {
    const { isFetching } = props;
    return (
        <Modal
            isVisible={isFetching}
            useNativeDriver={true}
        >
            <View style={styles.container}>
                <ActivityIndicator size="small" color={Colors.white} />
            </View>
        </Modal>
    );
};

// define your styles
const styles = StyleSheet.create({
    ...ApplicationStyles,
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: Colors.white,
        width: '80%',
        borderRadius: Metrics.radius,
    },
    titleWrap: {
        ...ApplicationStyles.flexRowBetweenMid,
        paddingRight: Metrics.paddingContent,
    },
    title: {
        ...ApplicationStyles.semiBold,
        padding: Metrics.paddingContent,
        fontSize: Fonts.size.h4,
    },
    closeIcon: {
        width: 20,
        height: 20,
    },
    boxMess: {
        padding: Metrics.paddingContent,
        paddingTop: 0,
    },
});

const mapStateToProps = state => {
    return {
        isFetching: state.loading.isFetching,
        message: state.loading.message,
        title: state.loading.title,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        close: () => dispatch({ type: loadingTypes.CLOSE }),
    };
};

const OverlapLoadingConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
)(OverlapLoading);
export { OverlapLoadingConnect as OverlapLoading };