import * as functions from 'firebase-functions';
import Mailgun from 'mailgun-js';
import cors from 'cors';
import bodyParser from 'body-parser';

const domain = 'sandbox1dccc713b67847b5a672236b1bad362f.mailgun.org';
const list = 'verdens-bedste-klimaplan';

const mailgun = Mailgun({
  apiKey: functions.config().mailgun.apikey, // https://firebase.google.com/docs/functions/config-env
  domain,
});

const corsMiddleware = cors({
  origin: 'verdensbedsteklimaplan.dk',
});

export const addRecipient = functions.https.onRequest((request, response) => {
  return corsMiddleware(request, response, () => {
    return bodyParser.urlencoded({ extended: false })(request, response, () => {
      const address = request.body.email;
      const name = request.body.name;
      const organisation = request.body.organisation;
      const subscribed = !!request.body.receiveUpdates;

      const vars: { [k: string]: string } = {};

      if (organisation && organisation !== '') {
        vars.organisation = organisation;
      }
      // Add email to Mailgun list
      mailgun
        .lists(`${list}@${domain}`)
        .members()
        .create({ address, name, subscribed, vars }, (err, data) => {
          if (err) {
            response.json({ err });
          } else {
            response.json(data);
          }
        });
    });
  });
});
