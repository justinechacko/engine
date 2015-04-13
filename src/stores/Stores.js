var Stores = {
  Address: require('./AddressStore'),
  Basket: require('./BasketStore'),
  Checkout: require('./CheckoutStore'),
  Countries: require('./CountriesStore'),
  DeliveryMethods: require('./DeliveryMethodsStore'),
  Delivery: require('./DeliveryStore'),
  Display: require('./DisplayStore'),
  Order: require('./OrderStore'),
  PaymentOptions: require('./PaymentOptionsStore'),
  Products: require('./ProductsStore')
};

module.exports = Stores;
