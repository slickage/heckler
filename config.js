module.exports = {
  port: process.env.PORT || 8080,
  redis: {
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: process.env.REDIS_PORT || 6379
  },
  smtp: {
    host: process.env.SMTP_HOST || 'email-smtp.us-west-2.amazonaws.com',
    port: Number(process.env.SMTP_PORT) || 465,
    user: process.env.SMTP_USER || 'smtpuser',
    pass: process.env.SMTP_PASS || 'smtppass'
  },
  ses: {
    id: process.env.SES_ID || '',
    key: process.env.SES_KEY || '',
    region: process.env.SES_REGION || 'us-west-2'
  },
  twilio: {
    accountSid: process.env.TWILIO_ACCOUNT_SID || '',
    authToken: process.env.TWILIO_AUTH_TOKEN || ''
  }
};
