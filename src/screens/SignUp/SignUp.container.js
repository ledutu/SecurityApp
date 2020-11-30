/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, AppContainer, TextField, Btn } from '../../components'
import { Colors, Metrics } from '../../themes';
import styles from './SignUp.style';

export default class ScreenContainer extends Component {
    render() {
        return (
            <AppContainer
                title={'Sign Up'}
                onCloseClick={() => { }}
                style={{ backgroundColor: Colors.white }}
            >
                <View style={styles.container}>

                    <Text size={'xl'} center style={styles.mt20}>Your phone number is important to we send</Text>
                    <Text size={'xl'} center>discount for you</Text>
                    <TextField
                        placeholder={'Enter your phone number'}
                        style={styles.mt15}
                    />
                    <TextField
                        placeholder={'Enter your phone number'}
                        style={styles.mt15}
                    />
                    <Btn style={styles.mt20}>Continue</Btn>
                    <TouchableOpacity activeOpacity={0.8} onPress={this.handleLogin}><Text style={styles.text} center>Login</Text></TouchableOpacity>
                </View>
                <TouchableOpacity activeOpacity={0.8} onPress={this.handleSupport}><Text style={[styles.text, { marginBottom: Metrics.paddingContent, color: Colors.main }]} center>Do you need support?</Text></TouchableOpacity>
            </AppContainer>
        );
    }
}
