import React from 'react'



export default function sendEmail(value:any) {
    const apiEndpoint = '/api/email';

    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(value),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
      })
      .catch((err) => {
        alert(err);
      });
}
