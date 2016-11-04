import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDiy9nptwfqWEs_T2uWE5Yk_ShouOY4xXM",
    authDomain: "react-firebase-app-d2b2a.firebaseapp.com",
    databaseURL: "https://react-firebase-app-d2b2a.firebaseio.com",
    storageBucket: "react-firebase-app-d2b2a.appspot.com",
    messagingSenderId: "238469073908"
}

firebase.initializeApp(config);

class App extends React.Component {
	constructor () {
		super()
		this.state = {
			name: 'Manuel'
		}
	}

	componentWillMount () {
		const nameRef = firebase.database().ref().child('Object').child('name')

		nameRef.on('value', (snapshot)=> {
			this.setState({
				name: snapshot.val()
			})
		})
	}

	render () {
		return <h1>Hola {this.state.name}</h1>
	}
}

ReactDOM.render(<App />, document.getElementById('root'))