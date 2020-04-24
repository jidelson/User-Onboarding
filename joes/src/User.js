import React from 'react'

function User({details}) {
    if (!details) {
        return <h3>Working to find the info!</h3>
    }
    return (
        <div>
            <h2>{details.name}</h2>
            <p>{details.email}</p>
            <p>{details.password}</p>
            <p>{details.married ? '' : ''}</p>
            
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