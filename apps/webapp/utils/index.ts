const formatByCurrencyMXN = (price: number) => {
  return new Intl.NumberFormat().format(price);
};

export interface IColorSolutions {
  web: string;
  mobile: string;
  desktop: string;
  [key: string]: string;
}

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

export  {
  getDateNowFormat,
  isValidEmail,
  formatByCurrencyMXN
}
