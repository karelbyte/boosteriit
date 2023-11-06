const formatByCurrencyMXN = (price: number) => {
  return new Intl.NumberFormat().format(price);
};

export  {
  formatByCurrencyMXN
}
