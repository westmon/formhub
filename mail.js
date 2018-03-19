module.exports = function(testMessage) {

    var clientSecret = {
        installed: {
            client_id: "25444937514-0cg61icc1nv4kkfpjk0bq3v7ricbqhrh.apps.googleusercontent.com",
            project_id: "atlantean-bot-189523",
            auth_uri: "https://accounts.google.com/o/oauth2/auth",
            token_uri: "https://accounts.google.com/o/oauth2/token",
            auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
            client_secret: "YKSU4ZOlwKLLcSaS1hgXWv3J",
            redirect_uris: [
                "urn:ietf:wg:oauth:2.0:oob",
                "http://localhost"
            ]
        }
      };
      
      var gmailNode = require('gmail-node');
      
      // Message 
    //   var testMessage = {
    //     to: 'linosuarezd@gmail.com',
    //     subject: 'Test Subject',
    //     message: '<h3>asdfg  Form</h3>'
    //   };
      
      // ClientSecret: 
    
      
      function initComplete() {
    
            gmailNode.sendHTML(testMessage, function (err, data) {
                console.log(err,data);
            });
        
      }
    
    
        gmailNode.init(clientSecret, './token.json', initComplete);

}




//   sendEmail();
