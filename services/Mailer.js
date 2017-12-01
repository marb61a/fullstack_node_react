const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail{
    constructor({ subject, recipients }, content){
        super();
        
    }
    
    formatAddresses(recipients){
        return recipients.map(({ email }) => {
            return new helper.Email(email); 
        });
    }
}