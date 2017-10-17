const keys = require('../../config/keys');

module.exports = (model) => {
  console.log('inside Model Email')

  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h3>New Model Registration</h3>
          <p style="padding-top: 25px; font-size: 1em;">
            <span style="font-weight: bold; padding-right: 5px;">
              Name:
            </span>
            <span style="padding-top: 10px;">
              ${model.f_name} ${model.l_name}
            </span>
          </p>
          <p style="padding-top: 25px; font-size: 1em;">
            <span style="font-weight: bold; padding-right: 5px;">
              Email:
            </span>
            <span style="padding-top: 10px;">
              ${model.emails}
            </span>
          </p>
          <p style="padding-top: 25px; font-size: 1em;">
            <span style="font-weight: bold; padding-right: 5px;">
              Phone:
            </span>
            <span style="padding-top: 10px;">
              ${model.phone}
            </span>
          </p>
          <p style="padding-top: 25px; font-size: 1em;">
            <span style="font-weight: bold; padding-right: 5px;">
              Model Type:
            </span>
            <span style="padding-top: 10px;">
              ${model.modelType}
            </span>
          </p>
          <p style="padding-top: 25px; font-size: 1em;">
            <span style="font-weight: bold; padding-right: 5px;">
              Sign Up Date:
            </span>
            <span style="padding-top: 10px;">
              ${model.date}
            </span>
          </p>
        </div>
      </body>
    </html>
  `;
};
