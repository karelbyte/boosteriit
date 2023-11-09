import nodemailer from 'nodemailer';
import {
  SMTP_FROM,
  SMTP_HOST,
  SMTP_PASSWORD,
  SMTP_PORT,
  SMTP_USER
} from '../config';

type  IAttachment = {
  filename: string;
  path: any;
  contentType: string;
}

type IPayload = {
  to: string;
  subject: string;
  html: string;
  attachments?: IAttachment[],
};

const smtpSettings = {
  host: SMTP_HOST,
  port: SMTP_PORT,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASSWORD
  }
};

export const handleEmailFire = async (data: IPayload) => {
  console.log(smtpSettings)
  const transporter = nodemailer.createTransport({
    ...smtpSettings
  });

  return await transporter.sendMail({
    from: SMTP_FROM,
    ...data
  });
};
