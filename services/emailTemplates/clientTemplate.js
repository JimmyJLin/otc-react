const keys = require('../../config/keys');

module.exports = (client) => {
  console.log('inside Client Email')
  return `
    <html>
      <body style="margin: 50px 50px;">
        <p style="padding-bottom: 15px;">
          <span style="font-weight: bold">To:</span>
          <span>${ client.f_name }</span>
        </p>
        <p>Thank you for signing up for the Microblading Model at Outstanding Training Center!</p>
        <P>We will reach out to you once we have an opening for the ${ client.modelType } Model service you selected!</P>
        <p>
          <p>Thank you,</p>
          <p style="padding-top: 25px;">Outstanding Training Center</p>
          <p>90 Bowery Suite 403 <br> New York, NY 10013</p>
          <p>Tel: 929-383-3368</p>
        </p>
      </body>
    </html>
  `
}
