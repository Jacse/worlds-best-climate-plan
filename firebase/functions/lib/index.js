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
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const domain = 'sandbox1dccc713b67847b5a672236b1bad362f.mailgun.org';
const list = 'verdens-bedste-klimaplan';
const mailgun = mailgun_js_1.default({
    apiKey: functions.config().mailgun.apikey,
    domain,
});
const corsMiddleware = cors_1.default({
    origin: 'https://verdensbedsteklimaplan.dk',
});
exports.addRecipient = functions.https.onRequest((request, response) => {
    return corsMiddleware(request, response, () => {
        return body_parser_1.default.urlencoded({ extended: false })(request, response, () => {
            const address = request.body.email;
            const name = request.body.name;
            const organisation = request.body.organisation;
            const subscribed = !!request.body.subscribe;
            const vars = {};
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
                }
                else {
                    response.json(data);
                }
            });
        });
    });
});
//# sourceMappingURL=index.js.map