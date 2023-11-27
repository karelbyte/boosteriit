import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
} from '@joshuajaco/react-pdf-renderer-bundled';
import { IFeature, IIndustryTemplate } from '../../../data/industriesTemplate';
import { IModule, ISolutionAvailable } from '../../../data/modules';
import { IAdditional } from '../../../data/addtionals';
import { IIntegration } from '../../../data/integrations';
import { IIndustry } from '../../../data/industries';
import { formatByCurrencyMXN } from '../../../utils';

interface IPdfTemplateProps {
  name: string;
  email: string;
  date: string;
  time: string;
  phone?: string;
  selectedIndustry?: IIndustry;
  selectedIndustriesTemplate?: IIndustryTemplate[];
  selectedModules?: IModule[];
  selectedAdditionals?: IAdditional[];
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
    selectedAdditionals,
    selectedIndustriesTemplate,
    selectedIntegrations,
  } = props;

  const getAdditional = (solution: string, industry: string) => {
    if (selectedAdditionals) {
      return selectedAdditionals
        .filter((additional: IAdditional) => additional.industry === industry)
        .filter((additional: IAdditional) => additional.solution === solution);
    }
    return [];
  };

  const getClientName = () => {
    return name.toUpperCase();
  };

  let modulesWeb: IModule[] = []
  let modulesDesktop: IModule[] = []
  let modulesMobile: IModule[] = []
  if (selectedModules && selectedModules?.length > 0) {
    modulesWeb = selectedModules.filter((module: IModule) =>
      module.solutions.some(
        (solution: ISolutionAvailable) => solution.id === 'web'
      )
    );
    modulesDesktop = selectedModules.filter((module: IModule) =>
      module.solutions.some(
        (solution: ISolutionAvailable) => solution.id === 'desktop'
      )
    );
     modulesMobile = selectedModules.filter((module: IModule) =>
      module.solutions.some(
        (solution: ISolutionAvailable) => solution.id === 'mobile'
      )
    );
  }
  return (
    <Document>
      {selectedIndustriesTemplate &&
        selectedIndustriesTemplate.length == 0 &&
        selectedModules &&
        selectedModules.length == 0 && (
          <Page size="A4" style={styles.page}>
            <View style={styles.banner} fixed>
              <Image src="./public/assets/boosteriit.png" />
            </View>
            <View style={styles.section}>
              <View style={styles.hr}></View>
              <Text style={styles.h2}>Cliente: {getClientName()}</Text>
              <Text style={styles.h2}>email: {email}</Text>
              <View>
                {type === 'request' ? (
                  <View>
                    <Text style={styles.h2}>Prefiere que lo llamen:</Text>
                    <Text style={styles.h2}>Telefono: {phone}</Text>
                  </View>
                ) : (
                  <View>
                    <Text style={styles.h2}>Horario del Cliente:</Text>
                    <Text style={styles.h2}>Fecha: {date}</Text>
                    <Text style={styles.h2}>Hora: {time}</Text>
                  </View>
                )}
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.h1}>NO COTIZO</Text>
            </View>
          </Page>
        )}
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
              <Text style={styles.h2}>Cliente: {name}</Text>
              <Text style={styles.h2}>email: {email}</Text>
              <View>
                {type === 'request' ? (
                  <View>
                    <Text style={styles.h2}>Prefiere que lo llamen:</Text>
                    <Text style={styles.h2}>Telefono: {phone}</Text>
                  </View>
                ) : (
                  <View>
                    <Text style={styles.h2}>Horario del Cliente:</Text>
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
              <View style={styles.section1}>
                <Text style={styles.h3}>Funcionalidades</Text>
                <View style={styles.section2}>
                  {template &&
                    template.features.map((feature: IFeature) => (
                      <Text key={feature.id} style={styles.h4}>
                        • {feature.title}
                      </Text>
                    ))}
                </View>
              </View>

              {getAdditional(template.solution, template.industry).length >
                0 && (
                <View>
                  <Text style={styles.h3}>Extras</Text>
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
      {selectedIntegrations && selectedIntegrations.length > 0 && (
        <Page size="A4" style={styles.page}>
          <View style={styles.banner} fixed>
            <Image src="./public/assets/boosteriit.png" />
          </View>
          <View style={styles.section}>
            <Text style={styles.h1}>COTIZACION</Text>
            <View style={styles.hr}></View>
            <Text style={styles.h2}>Cliente: {name}</Text>
            <Text style={styles.h2}>email: {email}</Text>
            <View>
              {type === 'request' ? (
                <View>
                  <Text style={styles.h2}>Prefiere que lo llamen:</Text>
                  <Text style={styles.h2}>Telefono: {phone}</Text>
                </View>
              ) : (
                <View>
                  <Text style={styles.h2}>Horario del Cliente:</Text>
                  <Text style={styles.h2}>Fecha: {date}</Text>
                  <Text style={styles.h2}>Hora: {time}</Text>
                </View>
              )}
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.h3}>INTEGRACIONES</Text>
          </View>
          <View style={styles.section}>
            {selectedIntegrations.map((integration: IIntegration) => (
              <Text key={integration.id} style={styles.h2}>
                {integration.title}
              </Text>
            ))}
          </View>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      )}

      {modulesWeb && modulesWeb.length > 0 && (
        <Page size="A4" style={styles.page}>
          <View style={styles.banner} fixed>
            <Image src="./public/assets/boosteriit.png" />
          </View>
          <View style={styles.section}>
            <Text style={styles.h1}>COTIZACION</Text>
            <View style={styles.hr}></View>
            <Text style={styles.h2}>Cliente: {getClientName()}</Text>
            <Text style={styles.h2}>email: {email}</Text>
            <View>
              {type === 'request' ? (
                <View>
                  <Text style={styles.h2}>Prefiere que lo llamen:</Text>
                  <Text style={styles.h2}>Telefono: {phone}</Text>
                </View>
              ) : (
                <View>
                  <Text style={styles.h2}>Horario del Cliente:</Text>
                  <Text style={styles.h2}>Fecha: {date}</Text>
                  <Text style={styles.h2}>Hora: {time}</Text>
                </View>
              )}
            </View>
          </View>
            <View>
              <Text style={styles.h1}>MODULOS: WEB</Text>
            </View>
          <View style={styles.viewSectionFlex}>
            <Text style={styles.cel2Header}>Solución</Text>
            <Text style={styles.cel1Header}>Precio</Text>
            <Text style={styles.cel1Header}>Tiempo</Text>
          </View>
          {modulesWeb &&
            modulesWeb.length > 0 &&
            modulesWeb.map((module: IModule) => (
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
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      )}
      {modulesDesktop && modulesDesktop.length > 0 && (
        <Page size="A4" style={styles.page}>
          <View style={styles.banner} fixed>
            <Image src="./public/assets/boosteriit.png" />
          </View>
          <View style={styles.section}>
            <Text style={styles.h1}>COTIZACION</Text>
            <View style={styles.hr}></View>
            <Text style={styles.h2}>Cliente: {getClientName()}</Text>
            <Text style={styles.h2}>email: {email}</Text>
            <View>
              {type === 'request' ? (
                <View>
                  <Text style={styles.h2}>Prefiere que lo llamen:</Text>
                  <Text style={styles.h2}>Telefono: {phone}</Text>
                </View>
              ) : (
                <View>
                  <Text style={styles.h2}>Horario del Cliente:</Text>
                  <Text style={styles.h2}>Fecha: {date}</Text>
                  <Text style={styles.h2}>Hora: {time}</Text>
                </View>
              )}
            </View>
          </View>
          <View>
            <Text style={styles.h1}>MODULOS: DESKTOP</Text>
          </View>
          <View style={styles.viewSectionFlex}>
            <Text style={styles.cel2Header}>Solución</Text>
            <Text style={styles.cel1Header}>Precio</Text>
            <Text style={styles.cel1Header}>Tiempo</Text>
          </View>
          {modulesDesktop &&
            modulesDesktop.length > 0 &&
            modulesDesktop.map((module: IModule) => (
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
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      )}
      { modulesMobile &&  modulesMobile.length > 0 && (
        <Page size="A4" style={styles.page}>
          <View style={styles.banner} fixed>
            <Image src="./public/assets/boosteriit.png" />
          </View>
          <View style={styles.section}>
            <Text style={styles.h1}>COTIZACION</Text>
            <View style={styles.hr}></View>
            <Text style={styles.h2}>Cliente: {getClientName()}</Text>
            <Text style={styles.h2}>email: {email}</Text>
            <View>
              {type === 'request' ? (
                <View>
                  <Text style={styles.h2}>Prefiere que lo llamen:</Text>
                  <Text style={styles.h2}>Telefono: {phone}</Text>
                </View>
              ) : (
                <View>
                  <Text style={styles.h2}>Horario del Cliente:</Text>
                  <Text style={styles.h2}>Fecha: {date}</Text>
                  <Text style={styles.h2}>Hora: {time}</Text>
                </View>
              )}
            </View>
          </View>
          <View>
            <Text style={styles.h1}>MODULOS: MOVIL</Text>
          </View>
          <View style={styles.viewSectionFlex}>
            <Text style={styles.cel2Header}>Solución</Text>
            <Text style={styles.cel1Header}>Precio</Text>
            <Text style={styles.cel1Header}>Tiempo</Text>
          </View>
          {modulesMobile &&
            modulesMobile.length > 0 &&
            modulesMobile.map((module: IModule) => (
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
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      )}
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
    fontSize: '14px',
    color: 'black',
  },
  h2: {
    marginBottom: 6,
    fontSize: '14px',
  },
  h3: {
    fontSize: '12px',
    color: 'black',
  },
  h4: {
    width: '48%',
    marginBottom: 6,
    padding: '0 5px 0 0',
    fontSize: '12px',
  },
  section: {
    marginBottom: '10px',
    borderBottom: '1px solid gray',
  },
  section1: {
    margin: '15px 0 15px 0',
  },
  section2: {
    margin: '15px 0 0 0',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
    color: 'black',
  },
});
