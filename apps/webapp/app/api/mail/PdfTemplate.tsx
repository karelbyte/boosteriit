import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
} from '@joshuajaco/react-pdf-renderer-bundled';
import { IIndustryTemplate } from '../../../data/industriesTemplate';
import { IModule } from '../../../data/modules';
import { IAdditional } from '../../../data/addtionals';
import { IIntegration } from '../../../data/integrations';

interface IPdfTemplateProps {
  name: string;
  email: string;
  date: string;
  time: string;
  phone: string;
  selectedIndustriesTemplate: IIndustryTemplate[];
  selectedModules: IModule[];
  selectedAddtionals: IAdditional[];
  selectedIntegrations: IIntegration[];
  type: string;
}
export default function PdfTemplate(props: IPdfTemplateProps) {
  console.log(props);
  const { name, email, date, time, type, phone, selectedModules } = props;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.banner}>
          <Image src="./public/assets/boosteriit.png" />
        </View>
        <View style={styles.section}>
          <Text style={styles.h1}>COTIZACION</Text>
          <View style={styles.hr}></View>
          <Text style={styles.h2}>CLIENTE: {name}</Text>
          <Text style={styles.h2}>EMAIL: {email}</Text>
          <View>
            {type === 'request' ? (
              <View>
                <Text style={styles.h2}>Prefiere que lo llamen:</Text>
                <Text style={styles.h2}>Telefono: {phone}</Text>
              </View>
            ) : (
              <View>
                <Text style={styles.h2}>Horario del cliente:</Text>
                <Text style={styles.h2}>Fecha: {date}</Text>
                <Text style={styles.h2}>Hora: {time}</Text>
              </View>
            )}
          </View>
        </View>
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  heading: {
    fontSize: '12px',
    color: 'gray',
  },
  banner: {
    width: '20%',
    marginBottom: 10,
  },
  hr: {
    borderBottom: '1px solid gray',
    marginTop: 6,
    marginBottom: 6,
  },
  h1: {
    marginBottom: 6,
    fontSize: '18px',
  },
  h2: {
    marginBottom: 6,
    fontSize: '14px',
  },
  section: {
    marginBottom: 5,
  },
});
