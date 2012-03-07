exports.PORT = parseInt(process.env.PORT) || 4567; 
exports.DEBUG = true; 

//Salesforce  
exports.LOGIN_SERVER = process.env.SFDC_INSTANCE_URL; 
exports.CLIENT_ID = process.env.DATABASEDOTCOM_CLIENT_ID;
exports.CLIENT_SECRET = process.env.DATABASEDOTCOM_CLIENT_SECRET;

exports.USERNAME = process.env.SFDC_USERNAME;
exports.PASSWORD = process.env.SFDC_PASSWORD;
exports.PUSH_TOPIC = '/topic/Quiz_Answers';