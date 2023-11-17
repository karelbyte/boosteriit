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
import { additionals, IAdditional } from '../../../data/addtionals';
import { IIntegration } from '../../../data/integrations';
import { IIndustry } from '../../../data/industries';
import { formatByCurrencyMXN, getAdditional } from '../../../utils';

interface IPdfTemplateProps {
  name: string;
  email: string;
  date: string;
  time: string;
  phone?: string;
  selectedIndustry?: IIndustry;
  selectedIndustriesTemplate?: IIndustryTemplate[];
  selectedModules?: IModule[];
  selectedAddtionals?: IAdditional[];
  selectedIntegrations?: IIntegration[];
  type: string;
}
export default function PdfTemplate(props: IPdfTemplateProps) {
  const {
    name,
    email,
    date,
    time,
    type,
    phone,
    selectedIndustry,
    selectedModules,
    selectedAddtionals,
    selectedIndustriesTemplate,
  } = props;

  const getAdditional = (solution: string, industry: string) => {
    if (selectedAddtionals) {
      return selectedAddtionals
        .filter((additional: IAdditional) => additional.industry === industry)
        .filter((additional: IAdditional) => additional.solution === solution);
    }
    return [];
  };

  return (
    <Document>
      {selectedIndustriesTemplate &&
        selectedIndustriesTemplate.length > 0 &&
        selectedIndustriesTemplate.map((template: IIndustryTemplate) => (
          <Page key={template.id} size="A4" style={styles.page}>
            <View style={styles.banner} fixed>
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
            <View>
              <Text style={styles.h1}>
                INDUSTRIA: {selectedIndustry?.title}
              </Text>
            </View>
            <View key={template.id}>
              <View style={styles.viewSectionFlex}>
                <Text style={styles.cel2Header}>Solución</Text>
                <Text style={styles.cel1Header}>Precio</Text>
                <Text style={styles.cel1Header}>Tiempo</Text>
              </View>
              <View style={styles.viewSectionFlex}>
                <Text style={styles.cel3}>{template.title}</Text>
                <Text style={styles.cel1}>
                  ${formatByCurrencyMXN(template.price)}
                </Text>
                <Text style={styles.cel1}>{template.days} dias</Text>
              </View>

              {getAdditional(template.solution, template.industry).length >
                0 && (
                <View>
                  <Text style={styles.h2}>Extras</Text>
                  <View style={styles.viewSectionFlex}>
                    <Text style={styles.cel2Header}>Descripcion</Text>
                    <Text style={styles.cel1Header}>Precio</Text>
                    <Text style={styles.cel1Header}>Tiempo</Text>
                  </View>
                  {getAdditional(template.solution, template.industry).map(
                    (item: IAdditional) => (
                      <View key={item.id} style={styles.viewSectionFlex}>
                        <Text style={styles.cel2}>{item.title}</Text>
                        <Text style={styles.cel1}>
                          ${formatByCurrencyMXN(item.price)}
                        </Text>
                        <Text style={styles.cel1}>{item.days} dias</Text>
                      </View>
                    )
                  )}
                </View>
              )}
            </View>

            <Text
              style={styles.pageNumber}
              render={({ pageNumber, totalPages }) =>
                `${pageNumber} / ${totalPages}`
              }
              fixed
            />
          </Page>
        ))}
      <Page size="A4" style={styles.page}>
        <View style={styles.banner} fixed>
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
        {selectedModules && selectedModules.length > 0 && (
          <View>
            <Text style={styles.h1}>MODULOS</Text>
          </View>
        )}
        <View style={styles.viewSectionFlex}>
          <Text style={styles.cel2Header}>Solución</Text>
          <Text style={styles.cel1Header}>Precio</Text>
          <Text style={styles.cel1Header}>Tiempo</Text>
        </View>
        {selectedModules &&
          selectedModules.length > 0 &&
          selectedModules.map((module: IModule) => (
            <View key={module.id} style={styles.section}>
              <View style={styles.viewSectionFlex}>
                <Text style={styles.cel2}>{module.title}</Text>
                <Text style={styles.cel1}>
                  ${formatByCurrencyMXN(module.price)}
                </Text>
                <Text style={styles.cel1}>{module.days} dias</Text>
              </View>
            </View>
          ))}
      </Page>
    </Document>
  );
}

const styles = StyleSheet.create({
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
  page: {
    color: '#5d606d',
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
    color: 'black'
  },
  h2: {
    marginBottom: 6,
    fontSize: '14px',
  },
  section: {
    marginBottom: '10px',
    borderBottom: '1px solid gray',
  },
  viewSectionFlex: {
    display: 'flex',
    flexDirection: 'row',
  },
  cel1Header: {
    width: '25%',
    fontSize: '14px',
    backgroundColor: '#f0f2f5',
    padding: '5px 0 5px 0 ',
  },
  cel2Header: {
    width: '50%',
    fontSize: '14px',
    backgroundColor: '#f0f2f5',
    padding: '5px 5px 5px 5px',
  },
  cel1: {
    width: '25%',
    fontSize: '12px',
    padding: '5px 5px 5px 5px',
  },
  cel2: {
    width: '50%',
    fontSize: '12px',
    padding: '5px 5px 5px 5px',
  },
  cel3: {
    width: '50%',
    fontSize: '12px',
    padding: '5px 5px 5px 5px',
    color: 'black'
  },
});
