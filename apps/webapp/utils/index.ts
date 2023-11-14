import { IModule } from "../data/modules";
import { additionals, IAdditional } from "../data/addtionals";

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

const getTotalPrice = (current: IModule[]) => {
  const total = current.reduce((carry: number, module: IModule) => {
    return carry + module.price;
  }, 0);
  return formatByCurrencyMXN(total);
};

const getTotalDays = (current: IModule[]) => {
  return current.reduce((carry: number, module: IModule) => {
    return carry + module.days;
  }, 0);
};

const getAdditional = (solution: string, industry: string) => {
  return additionals
    .filter((additional: IAdditional) => additional.industry === industry)
    .filter((additional: IAdditional) => additional.solution === solution);
};
export  {
  getAdditional,
  classSolutions,
  getTotalDays,
  getTotalPrice,
  getDateNowFormat,
  isValidEmail,
  formatByCurrencyMXN
}
