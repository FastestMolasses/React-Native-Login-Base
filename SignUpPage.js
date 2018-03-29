import React from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput } from 'react-native';

const mainAppColor = '#0AB9FF';

export default class SignUpPage extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
        };
    }

    signUp = () => {
        // TODO: ADD ERROR MESSAGE FOR WRONG PASSWORDS
        if (this.state.password !== this.state.confirmPassword) return;
    };

    focusPassword = () =>
    {
        this.passwordInput.focus();
    }    

    focusConfirmPassword = () =>
    {
        this.confirmPasswordInput.focus();
    }    

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.welcomeText}>Welcome,</Text>
                <Text style={styles.welcomeText2}>sign up to continue</Text>

                <TextInput
                    placeholder="Username"
                    style={styles.textInput}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={this.state.username}
                    returnKeyType="next"
                    onChangeText={username => this.setState({ username })}
                    underlineColorAndroid={mainAppColor}
                    onSubmitEditing={this.focusPassword}
                />

                <TextInput
                    placeholder="Password"
                    style={styles.textInput}
                    secureTextEntry={true}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={this.state.password}
                    returnKeyType="next"
                    onChangeText={password => this.setState({ password })}
                    underlineColorAndroid={mainAppColor}
                    ref={t => (this.passwordInput = t)}
                    onSubmitEditing={this.focusConfirmPassword}
                />

                <TextInput
                    placeholder="Confirm Password"
                    style={styles.textInput}
                    secureTextEntry={true}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={this.state.password}
                    returnKeyType="done"
                    onChangeText={password => this.setState({ password })}
                    underlineColorAndroid={mainAppColor}
                    ref={t => (this.confirmPasswordInput = t)}
                    onSubmitEditing={this.signUp}
                />

                <Text style={styles.signInText} onPress={this.signUp}>
                    Sign Up
                </Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 30,
    },
    welcomeText: {
        fontSize: 24,
        color: 'black',
    },
    welcomeText2: {
        fontSize: 24,
        color: 'grey',
        marginVertical: 5,
        marginBottom: 25,
    },
    textInput: {
        borderBottomColor: mainAppColor,
        borderBottomWidth: 2,
        marginVertical: 10,
        paddingVertical: 10,
        fontSize: 16,
        color: 'black',
    },
    signInText: {
        color: mainAppColor,
        marginVertical: 40,
        fontSize: 26,
    },
});
