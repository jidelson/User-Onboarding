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
    <h2>The User Form</h2>
    <div className = 'errors'>
         {errors.name}
        {errors.email}
        {errors.civil}
        {errors.password}
    </div>

    <label>Name:&nbsp;
        <input
        value = {values.name}
        onChange = {onInputChange}
        name='name'
        type='text'
        /></label>

    <label>Email:&nbsp;
               <input 
                value = {values.email}
                onChange = {onInputChange}
               name='email'
               type='text' 
               /></label>

            <label> Password:&nbsp;
               <input 
                value = {values.password}
                onChange = {onInputChange}
               name='password'
               type='password' 
            //    placeholder="password"
               /></label>

           {/* ****DROPDOWN***** */}
            <label>Civil Status:&nbsp;
      <select
          value ={values.civil}
          onChange = {onInputChange}
          name='civil'
        >
            <option defaultValue=''>Please choose</option>
          <option value='married'>married</option>
          <option value='single'>not married</option>
        </select></label>

{/* ****CHECKBOX***** */}
<label>
    <input
    name='termsOfService'
    type="checkbox"
    checked={values.termsOfService}
    onChange={onCheckBoxChange}
    />
    Terms Of Service</label>


    <div>
    <button onClick={onSubmit} disabled={disabled} >Submit</button>
    </div>

</form>
)

};

export default Form;