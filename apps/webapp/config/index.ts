const APP_URL = process.env.APP_URL;
const API_URL = process.env.API_URL;

const SMTP_PASSWORD = process.env.SMTP_PASSWORD || '';
const SMTP_FROM = process.env.SMTP_FROM || '';
const SMTP_HOST = process.env.SMTP_HOST || '';
const SMTP_PORT = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
const SMTP_USER = process.env.SMTP_USER || '';

export {
  APP_URL,
  API_URL,
  SMTP_PASSWORD,
  SMTP_FROM,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER
};
