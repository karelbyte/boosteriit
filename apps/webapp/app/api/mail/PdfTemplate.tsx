import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
} from '@joshuajaco/react-pdf-renderer-bundled';

export default function PdfTemplate(props: any) {
  const { name, email, date, time } = props;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.banner}>
          <Image src="./public/assets/boosteriit.png" />
        </View>
        <View style={styles.section}>
          <Text>{name}</Text>
        </View>
      </Page>
    </Document>
  );
}

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
