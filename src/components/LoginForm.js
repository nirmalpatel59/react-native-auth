import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', errorText: ''};
    onButtonPress () {
        const { email, password } = this.state;
        firebase.auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log("called");
        })
        .catch(() => {
            firebase.auth.createUserWithEmailAndPassword(email, password)
            .catch(() => {
                this.setState({ errorText: 'Authentication Failed.'})
            });
        });
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                    placeholder="user@gmail.com"
                    label='Email'
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })} 
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        placeholder='password'
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>{this.state.errorText}</Text>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}> Log In</Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'

    }
};

export default LoginForm;