/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, AppContainer, TextField, Btn } from '../../components'
import { Colors, Metrics } from '../../themes';
import styles from './Login.style';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ScreenContainer extends Component {
    render() {
        return (
            <AppContainer
                title={'Login'}
                onCloseClick={() => { }}
                style={{ backgroundColor: Colors.white }}
            >
                <View style={styles.container}>

                    <TextField
                        placeholder={'Enter your phone number'}
                        style={styles.mt15}
                    />
                    <TextField
                        placeholder={'Enter your phone number'}
                        style={styles.mt15}
                    />
                    <Btn style={styles.mt20}>Login</Btn>
                    <Btn
                        style={styles.mt15}
                        icon={<Icon
                            name={'facebook'}
                            color={Colors.white}
                            style={{ marginRight: Metrics.paddingContent }}
                            size={16}
                        />}
                        backgroundColor={Colors.facebook}
                    >Login with facebook</Btn>
                    <View style={styles.flexRowBetweenMid}>
                        <TouchableOpacity activeOpacity={0.8} onPress={this.handleForgotPassword}><Text style={styles.text} center>Forgot password?</Text></TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} onPress={this.handleSignUp}><Text style={styles.text} center>Sign up</Text></TouchableOpacity>
                    </View>

                </View>
                <TouchableOpacity activeOpacity={0.8} onPress={this.handleSupport}><Text style={[styles.text, { marginBottom: Metrics.paddingContent, color: Colors.main }]} center>Do you need support?</Text></TouchableOpacity>
            </AppContainer>
        );
    }
}
