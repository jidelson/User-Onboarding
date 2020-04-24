import React from 'react';




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

    <label htmlFor='name'>Name:&nbsp;
        <input
        id='name'
        value = {values.name}
        onChange = {onInputChange}
        name='name'
        type='text'
        /></label>

    <label htmlFor='email'>Email:&nbsp;
               <input 
               id='email'
                value = {values.email}
                onChange = {onInputChange}
               name='email'
               type='text' 
               /></label>

            <label htmlFor='password'> Password:&nbsp;
               <input 
               id='password'
                value = {values.password}
                onChange = {onInputChange}
               name='password'
               type='password' 
               placeholder='password'
               /></label>

           {/* ****DROPDOWN***** */}
            <label htmlFor='civil'>Civil Status:&nbsp;
      <select
            id= 'civil'
          value ={values.civil}
          onChange = {onInputChange}
          name='civil'
        >
            <option value=''>Please choose</option>
          <option value='married'>married</option>
          <option value='single'>not married</option>
        </select></label>

{/* ****CHECKBOX***** */}
<label>
    <input
    name='termsOfService'
    type="checkbox"
    // checked={true}
    // onChange={onCheckBoxChange}
    />
    Terms Of Service</label>


    <div>
    <button onClick={onSubmit} disabled={disabled} >Submit</button>
    
    </div>

</form>
)

};

export default Form;