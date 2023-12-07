// import { APP_URL } from '../../../../config/config.app';
import emailTemplate from './EmailTemplate';
import { handleEmailFire } from '../../../lib/mailer';
import { render } from '@react-email/render';
import PdfTemplate from './PdfTemplate';
import { renderToFile } from '@joshuajaco/react-pdf-renderer-bundled';
import { NextResponse } from 'next/server';
import fs from 'fs';
export async function POST(request: Request) {
  const res = await request.json();
  const { name, email, date } = res;

  if (!fs.existsSync('./public/pdfs')) {
    fs.mkdirSync('./public/pdfs');
  }
  const nameSanitize = name.replace(/[#@.;\s]/g, '');
  const fileName = `cliente_${nameSanitize}_${date}.pdf`;
  const unix = new Date().getTime();
  const fullFilePath = `./public/pdfs/${nameSanitize}_${date}_${unix}.pdf`;

  const emailHtml = render(emailTemplate(res));

  await renderToFile(<PdfTemplate {...res} />, fullFilePath);

  await handleEmailFire({
    to: email,
    subject: 'Autocotización cliente ' + nameSanitize,
    html: emailHtml,
    attachments: [
      {
        filename: fileName,
        path: fullFilePath,
        contentType: 'application/pdf',
      },
    ],
  });
  console.log('Correo enviado con exito!');
  return NextResponse.json({
    message: 'Mail send success!',
  });
}
export const dynamic = 'force-dynamic';
