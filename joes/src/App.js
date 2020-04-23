import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './Form.js'
import User from './User.js'
import axios from 'axios';
import * as Yup from "yup";

const initialFormValues = [
  {
    name:'',
    email:'',
    password:'',
    civil: '',
    termsOfService: false
}
];

const initialFormErrors = {
name:'',
email:'',
password: '',
civil:'',
termsOfService:''
}



const url= 'https://reqres.in/api/users'




function App() {

const [user, setUser] = useState([]) 
const [formValues, setFormValues] = useState(initialFormValues)
const [formDisabled, setFormDisabled] = useState(true)
const [formErrors, setFormErrors] = useState(initialFormErrors)

const getUsers = () => {
  axios.get(url)
  .then(res => {
    setUser(res.data)
  })
  .catch(err => {
    debugger
  })
}

const onInputChange = evt => {
  const name = evt.target.name
  const value = evt.target.value
  
  setFormValues({
    ...formValues,
    [name]:value
  })
}

const onCheckBoxChange = evt => {
  evt.preventDefault()
}

const onSubmit = evt => {
  evt.preventDefault()

  const newUser = {
    name: formValues.name,
    email: formValues.email,
    password: formValues.password
  }
  setUser([...user, newUser])

setFormValues(initialFormValues)
}

  return (
    <div className="App">
      <header className="App-header">
      <h1>User Form</h1>
      </header>

      {
        user.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }

      <Form
      values = {formValues}
      onInputChange = {onInputChange}
      onCheckBoxChange = {onCheckBoxChange}
      onSubmit = {onSubmit}
      disabled ={formDisabled}
      errors ={formErrors}
      />
    </div>
  );
};

export default App;
