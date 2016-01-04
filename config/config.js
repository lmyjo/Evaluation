require('dotenv').load();

var config = {
  apiConfig: {
    serviceHost: process.env.SERVICE_HOST,
    servicePort: process.env.SERVICE_PORT,
    utilityHost: process.env.UTILITY_HOST,
    utilityPort: process.env.UTILITY_PORT,
    utilityProtocol: process.env.UTILITY_PROTOCOL,
    queueHost: process.env.QUEUE_HOST,
    queuePort: process.env.QUEUE_PORT,
    queueName: process.env.QUEUE_NAME,
    queueProtocol: process.env.QUEUE_PROTOCOL
  }
};

module.exports = {
  get: function get(key) {
    if( config.apiConfig[key] !== undefined ){
      return config.apiConfig[key];
    } else {
      throw {
        code: 500,
        error: 'Internal server error'
      };
    }
  }
}
