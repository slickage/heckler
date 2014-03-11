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
  }
};
