import React from 'react'
import { firebaseApp } from '../firebase'

class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  }

  signUp() {
    console.log("this.state",this.state)
    const { email, password }= this.state
    firebaseApp.auth().createUserWithEmailAndPassword(email,password).catch(error => {
      console.log('error', error)
      this.setState({error})
    })
  }

  render() {
    return (
      <div className="form-inline" style={{margin: '5%'}}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <input className="form-control" style={{marginRight: '5px'}} type="text" placeholder="email" onChange= {event => this.setState({email: event.target.value})} />
          <input className="form-control" style={{marginRight: '5px'}} type="password" placeholder="passowrd" onChange= {event => this.setState({password: event.target.value})}/>
          <button type="button" className="btn btn-primary" onClick={() => this.signUp()}>
            Sign Up
          </button>
        </div>
        <div>{this.state.error.message}</div>
      </div>
    )
  }
}

export default SignUp