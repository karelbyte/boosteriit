import { Html } from '@react-email/html';
import { Text } from '@react-email/text';
import { Img } from '@react-email/img';
import { Hr } from '@react-email/hr';
import { IIndustryTemplate } from '../../../data/industriesTemplate';
import { IModule } from '../../../data/modules';
import { IAdditional } from '../../../data/addtionals';
import { IIntegration } from '../../../data/integrations';
import { APP_URL } from "../../../config";

interface IEmailTemplateProps {
  name: string;
  email: string;
  date: string;
  time: string;
  phone?: string;
  selectedIndustriesTemplate: IIndustryTemplate[];
  selectedModules: IModule[];
  selectedAddtionals: IAdditional[];
  selectedIntegrations: IIntegration[];
  type: string;
}

export default function EmailTemplate(props: IEmailTemplateProps) {
  const { name, email, date, time, type, phone } = props;
  return (
    <Html lang="en" dir="ltr">
      <Img src={`${APP_URL}/assets/boosteriit.png`} alt="Boosteriit" />
      <Hr />
      <Text>
        <strong>COTIZACION</strong>
      </Text>
      <Text style={heading}>
        Fecha: {new Date().toLocaleDateString()}
      </Text>
      <Hr />
      <Text>
        CLIENTE: <strong>{name}</strong>
      </Text>
      <Text>
        CORREO: <strong>{email}</strong>
      </Text>
      {type === 'request' ? (
        <div>
          <Text>Prefiere que lo contacten</Text>
          <Text>
            TELEFONO:<strong>{phone}</strong>{' '}
          </Text>
        </div>
      ) : (
        <div>
          <Text>Horario que solicito el cliente:</Text>
          <Text>
            FECHA: <strong>{ new Date(date).toLocaleDateString()}</strong>
          </Text>
          <Text>
            HORA: <strong> {time}</strong>
          </Text>
          <Text style={heading}>
            Formato de 24 horas
          </Text>
        </div>
      )}
      <Text>Se adjunta pdf con los servicios solicitados</Text>
    </Html>
  );
}


const heading = {
  fontSize: '12px',
  color: 'gray',
};
