const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class ClientMailer extends helper.Mail {

  constructor({ subject, emails }, content) {
    super();
    console.log("hellooo inside ClientMailer")

    this.sgApi =  sendgrid(keys.sendGridKey);
    this.from_email = new helper.Email('no-reply@outstandingcenter.com');
    this.subject = 'New Model Signup';
    this.body = new helper.Content('text/html', content);
    this.emails = this.formatAddresses(emails);

    this.addContent(this.body);
    this.addClickTracking();
    this.addemails(this.emails);
  }

  formatAddresses(emails) {
    return new helper.Email(emails);
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addemails(emails) {
    const personalize = new helper.Personalization();
    personalize.addTo(emails);
    this.addPersonalization(personalize);
  }

  async send() {
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON()
    });

    const response = await this.sgApi.API(request);
    return response;
  }
}

module.exports = ClientMailer;
