// import { APP_URL } from '../../../../config/config.app';
import emailTemplate from './EmailTemplate';
import { handleEmailFire } from '../../../lib/mailer';
import { render } from '@react-email/render';
import PdfTemplate from './PdfTemplate';
import { renderToFile } from '@joshuajaco/react-pdf-renderer-bundled';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const res = await request.json();
  const { name, email, date } = res;
  const fileName = `cliente_${name}_${date}.pdf`;
  const unix = new Date().getTime();
  const fullFilePath = `./public/pdfs/${name}_${date}_${unix}.pdf`;

  const emailHtml = render(emailTemplate(res));

  await renderToFile(<PdfTemplate {...res} />, fullFilePath);

  await handleEmailFire({
    to: email,
    subject: 'Autocotización cliente ' + name,
    html: emailHtml,
    attachments: [
      {
        filename: fileName,
        path: fullFilePath,
        contentType: 'application/pdf',
      },
    ],
  });

  return NextResponse.json({
    message: 'Mail send success!',
  });
}
export const dynamic = 'force-dynamic';
