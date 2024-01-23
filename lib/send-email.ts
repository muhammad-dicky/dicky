import React from 'react'
// import { GoogleSpreadsheet } from 'google-spreadsheet';


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




// export default async function sendEmail(value) {
//   const apiEndpoint = '/api/email';

//   try {
//     // Send email
//     const emailResponse = await fetch(apiEndpoint, {
//       method: 'POST',
//       body: JSON.stringify(value),
//     });

//     if (!emailResponse.ok) {
//       throw new Error('Failed to send email');
//     }

//     // Send data to Google Sheets
//     const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
//     const privateKey = process.env.GOOGLE_PRIVATE_KEY;
//     const formattedPrivateKey = privateKey ? privateKey.replace(/\\n/g, '\n') : '';

//     await doc.useServiceAccountAuth({
//       client_email: process.env.GOOGLE_CLIENT_EMAIL,
//       private_key: formattedPrivateKey,
//     });

//     await doc.loadInfo(); // loads document properties and worksheets

//     // ... (unchanged code)
//   } catch (err) {
//     console.error(err);
//     return { emailStatus: 'error', sheetStatus: 'error' };
//   }
// }

