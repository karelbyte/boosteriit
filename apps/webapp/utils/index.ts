import { IModule } from "../data/modules";
import { additionals, IAdditional } from "../data/addtionals";
import { IIndustryTemplate } from "../data/industriesTemplate";

const formatByCurrencyMXN = (price: number) => {
  return new Intl.NumberFormat().format(price);
};

export interface IColorSolutions {
  web: string;
  mobile: string;
  desktop: string;
  [key: string]: string;
}

const classSolutions: IColorSolutions = {
  web: 'bg-boo-web',
  mobile:
    'bg-boo-mobile',
  desktop:
    'bg-boo-desktop',
};

type TCurrent = IModule | IIndustryTemplate | IAdditional;

const exprRegEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const isValidEmail = (email: string): boolean => {
  return exprRegEmail.test(email);
}

const getDateNowFormat = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const getSubtotalPrice = (currents: TCurrent[]) => {
  return currents.reduce((carry: number, current: TCurrent) => {
    return carry + current.price;
  }, 0);
};

const getSubtotalPriceFormat = (current: TCurrent[]) => {
  return formatByCurrencyMXN(getSubtotalPrice(current));
};

const getIva = (current: TCurrent[]) => {
  return getSubtotalPrice(current) * 0.16;
};

const getIvaFormat = (current: TCurrent[]) => {
  return formatByCurrencyMXN(getIva(current));
};

const getTotalPriceWhitIVA = (current: TCurrent[]) => {
  const subtotal = getSubtotalPrice(current);
  const iva = getIva(current);
  return formatByCurrencyMXN(subtotal + iva);
};

const getTotalDays = (current: TCurrent[]) => {
  return current.reduce((carry: number, current: TCurrent) => {
    return carry + current.days;
  }, 0);
};

const getAdditional = (solution: string, industry: string) => {
  return additionals
    .filter((additional: IAdditional) => additional.industry === industry)
    .filter((additional: IAdditional) => additional.solution === solution);
};
export  {
  getSubtotalPrice,
  getSubtotalPriceFormat,
  getIvaFormat,
  getTotalPriceWhitIVA,
  getAdditional,
  classSolutions,
  getTotalDays,
  getDateNowFormat,
  isValidEmail,
  formatByCurrencyMXN
}
