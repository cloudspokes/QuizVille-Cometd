exports.PORT = parseInt(process.env.PORT) || 4567; 
exports.DEBUG = true; 

//Salesforce  
exports.LOGIN_SERVER = ENV['SFDC_INSTANCE_URL']; 
exports.CLIENT_ID =   ENV['DATABASEDOTCOM_CLIENT_ID'];
exports.CLIENT_SECRET = ENV['DATABASEDOTCOM_CLIENT_SECRET'];

exports.USERNAME = ENV['SFDC_USERNAME'];
exports.PASSWORD = ENV['SFDC_PASSWORD'];
exports.PUSH_TOPIC = '/topic/Quiz_Answers';