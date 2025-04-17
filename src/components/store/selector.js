export const calculateOrderTotal = (products, productsId) => {
  let usdTotal = 0;
  let uahTotal = 0;

  const currentOrderProducts = products.filter((product) =>
    productsId.includes(product.id)
  );

  currentOrderProducts.map((product) =>
    product.price.map((item) =>
      item.isDefault === 0 ? (usdTotal += item.value) : (uahTotal += item.value)
    )
  );

  return { currentOrderProducts, usdTotal, uahTotal };
};
