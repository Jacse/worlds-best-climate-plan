"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = __importStar(require("firebase-functions"));
const mailgun_js_1 = __importDefault(require("mailgun-js"));
const domain = 'sandbox1dccc713b67847b5a672236b1bad362f.mailgun.org';
const list = 'verdens-bedste-klimaplan';
const mailgun = mailgun_js_1.default({
    apiKey: functions.config().mailgun.apikey,
    domain,
});
exports.addRecipient = functions.https.onRequest((request, response) => {
    return new Promise(resolve => {
        const address = request.query.email;
        const name = request.query.name;
        const organisation = request.query.organisation;
        const subscribed = request.query.receiveUpdates;
        const vars = {};
        if (organisation && organisation !== '') {
            vars.organisation = organisation;
        }
        // Add email to Mailgun list
        mailgun
            .lists(`${list}@${domain}`)
            .members()
            .create({ address, name, subscribed, vars }, (err, data) => {
            response.set('Access-Control-Allow-Origin', 'verdensbedsteklimaplan.dk');
            response.json(data);
            resolve();
        });
    });
});
//# sourceMappingURL=index.js.map