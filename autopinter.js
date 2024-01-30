
var FwdEmail = ''

function retrieveFWDEmail(){
   const form = document.getElementById('email-form')
   form.onsubmit(() => {
    FwdEmail = document.getElementById('email')
    document.getElementById('email-holder').innerHTML = 'Forwarding Free pints to ' + FwdEmail
    createDummyEmail()
   })
}

async function createDummyEmail(){
    const MailSlurp = require('mailslurp-client').default;
    const mailslurp = new MailSlurp({
      apiKey: process.env.API_KEY ?? 'your-api-key',
    });
    const inbox = await mailslurp.createInbox();
    console.log(inbox);
}
