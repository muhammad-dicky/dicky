import React from 'react'



export default function sendEmail(value:any) {
    const apiEndpoint = '/api/email';

    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(value),
    })
      .then((res) => {
        if(!res.ok){
          throw new Error('Failed to send email');
        }
        return res.json();
      })
      .then((response) => {
        if(response && response.status === 'success'){

          alert(response.message);
        }else{
          throw new Error('Unexpected response from the server')
        }
      })
      .catch((err) => {
        console.log(err)
      });
}
