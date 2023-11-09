// import { APP_URL } from '../../../../config/config.app';
import emailTemplate from './EmailTemplate';
import { handleEmailFire } from '../../../lib/mailer';
import { render } from '@react-email/render';
// import ReactPDF from '@react-pdf/renderer';
// import MyDocument from '../../../../components/aminPdf';
import {
  renderToFile,
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
} from '@joshuajaco/react-pdf-renderer-bundled';

export async function POST(request: Request) {
  const res = await request.json();
  const { name, email, date, time } = res;
  const fileName = `cliente_${name}_${date}.pdf`;
  const fullFilePath = `./public/pdfs/${fileName}`;

  const emailHtml = render(emailTemplate({ name, email, date, time }));

  const rows: number[] = [1, 2, 3, 4];

  await renderToFile(
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.banner}>
          <Image src="./public/boosteriit.svg" />
        </View>
        <View style={styles.section}>
          <Text>{name}</Text>
        </View>
        {rows &&
          rows.map((row) => (
            <View style={styles.section} key={row}>
              <Text>{email}</Text>
            </View>
          ))}
      </Page>
    </Document>,
    fullFilePath
  );

  await handleEmailFire({
    to: email,
    subject: 'Autocotizacion cliente ' + name,
    html: emailHtml,
    attachments: [
      {
        filename: fileName,
        path: fullFilePath,
        contentType: 'application/pdf',
      },
    ],
  });

  return Response.json({
    message: 'Mail send success!',
  });
}
export const dynamic = 'force-dynamic';

const styles = StyleSheet.create({
  page: {
    padding: 10,
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
  },
  banner: {
    width: '100%',
    height: 90,
  },
  section: {
    paddingBottom: 5,
  },
});
