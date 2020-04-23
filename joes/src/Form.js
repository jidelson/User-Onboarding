import React from 'react';
import './App.css';


function Form(props){
    const {
        values,
        onInputChange,
        onCheckBoxChange,
        onSubmit,
        disabled,
        errors
    } = props
return(
<form className='user container'>
    <div className = 'errors'>

    </div>

    <label>
        Name:&nbsp;
        <input
        value = {values.name}
        onChange = {onInputChange}
        name='name'
        type='text'
        />
    </label>

    <label>
        Email:&nbsp;
               <input 
                value = {values.email}
                onChange = {onInputChange}
               name='email'
               type='text' 
               />
            </label>

            <label>
        Password:&nbsp;
               <input 
                value = {values.password}
                onChange = {onInputChange}
               name='password'
               type='text' 
               />
            </label>

            <label>Civil Status:&nbsp;
      <select
          value ={values.onCheckboxChange}
          onChange = {onInputChange}
          name='civil'
        >
            <option defaultValue=''>Please choose</option>
          <option value='married'>married</option>
          <option value='single'>not married</option>
        </select></label>


<label>
    <input
    name='termsOfService'
    type="checkbox"
    />
    Terms Of Service

</label>

    <div>
    <button onClick={onSubmit} disabled={disabled}>Submit</button>
    </div>

</form>
)

};

export default Form;