import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './Form.js'
import User from './User.js'
import axios from 'axios';
import * as yup from "yup";

//THIS IS THE URL FOR OUT GET AND POST REQUESTS
const url= 'https://reqres.in/api/users'

//SHAPE THAT DRIVES STATE OF FORM
const initialFormValues = [
  {
    name:'',
    email:'',
    password:'',
    civil: '',
    termsOfService: false
}
];

//SHAPE OF VALIDATION ERRORS OBJECT
const initialFormErrors = {
name:'',
email:'',
password: '',
civil:'',
}

//BUILD A SCHEMA FOR VALIDATION 
const formSchema = yup.object().shape({
  name: yup
  .string()
  .min(2, 'Name must have at least 2 characters')
  .required('Name is required!'),

  email: yup
  .string()
  .email('A valid email is required!')
  .required('Email is required'),

  civil: yup
  .string()
  .matches(/(married|single)/, 'Either single or married')
  .required('civil status is required'),
  
  password: yup
  .string()
  .min(6, 'Password must have at least 6 characters')
  .required('Password is required'),
  
  termsOfService: yup
  .boolean()
  .oneOf ([true], "You must accept Terms Of Service")
})







//********YOUR ACTUAL APPLICATION******** */
function App() {

const [user, setUser] = useState([]) 
const [formValues, setFormValues] = useState(initialFormValues)

//STATE KEEPS TRACK OF IF SUBMIT BUTTON IS DISABLED OR NOT
const [formDisabled, setFormDisabled] = useState(true)
//STATE NEEDS TO KEEP TRACK OF VALIDATION ERRORS
const [formErrors, setFormErrors] = useState(initialFormErrors)

// FETCH YOUR USERS FROM API AND SET THEM IN STATE
const getUsers = () => {
  axios.get(url)
  .then(res => {
    setUser([...user, res.data])
  })
  .catch(err => {
  })
}

//AFTER FIRST "DOM SURGERY" WE NEED TO GET OUR USERS FROM API
useEffect(() =>{
getUsers()
}, [])

// WE NEED A FUNCTION TO ADD A NEW USER TO API
// AND SET AN UPDATED LIST OF USERS IN STATE
const postUser = user => {
  axios.get(url, user)
  .then(res => {
    setUser([...user, res.data])
  })
  .catch(err => {
  })
}

// IF FORM IS CHANGED WE NEED TO RUN VALIDATION
// AND USE CHANGES TO ENABLE/DISABLE SUBMIT BUTTON
useEffect(() => {
  formSchema.isValid(formValues)
    .then(valid => { 
      setFormDisabled(!valid)
    })
}, [setFormValues])

const onSubmit = evt => {
  evt.preventDefault()


    const newUser = {
    name: formValues.name,
    email: formValues.email,
    civil: formValues.civil === 'single' ? false : true,
    password: formValues.password,
    termsOfService: Object.keys(formValues.termsOfService)
    .filter(termsOfService => formValues.termsOfService[termsOfService] ===true)
    }


    // setUser([...user, newUser])
    postUser(newUser)
    setFormValues(initialFormValues)
}

const onInputChange = evt => {
  const name = evt.target.name
  const value = evt.target.value
  
  yup
  .reach(formSchema, name)
  .validate(value)
  .then (valid => {
    setFormErrors({
      ...formErrors,
      [name]: '',
    })
  })
  .catch(err => {
    setFormErrors({
      ...formErrors,
      [name]: err.errors[0]
    })
  })
  
  setFormValues({
    ...formValues,
    [name]:value
  })
}

const onCheckBoxChange = evt => {
  evt.preventDefault()
}

  return (
    <div className="App">
      <header className="App-header">
      <h1>User Form</h1>
      </header>

     

      <Form
      values = {formValues}
      onInputChange = {onInputChange}
      onCheckBoxChange = {onCheckBoxChange}
      onSubmit = {onSubmit}
      disabled ={formDisabled}
      errors ={formErrors}
      />
   
    {/* {
        user.map(user => {
          return (  
            <User key={user.id} details={user} />
          )
        })
      } */}
    </div>
  );
};

export default App;
