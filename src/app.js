import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDGYRyS4yshoKXfO5UmoC5renGWaVA25Zc",
            authDomain: "auth-23c34.firebaseapp.com",
            databaseURL: "https://auth-23c34.firebaseio.com",
            projectId: "auth-23c34",
            storageBucket: "auth-23c34.appspot.com",
            messagingSenderId: "990519944724"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;