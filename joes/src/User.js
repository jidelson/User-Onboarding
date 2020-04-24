import React from 'react'

function User({details}) {
    if (!details) {
        return <h3>Working to find the info!</h3>
    }
    return (
        <div>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
            <p>Married: {details.married ? 'Yes' : 'No'}</p>
            
            {
        !!details.termsOfService && !!details.termsOfService.length &&
        <div>
          Terms of Service:
          <ul>
            {
              details.termsOfService.map((like, idx) => <li key={idx}>{like}</li>)
            }
          </ul>
        </div>
      }
           
        </div>
    )
}

export default User;