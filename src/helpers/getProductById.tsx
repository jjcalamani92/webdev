export const getProductById = (products: any, id: any) => {
  return products.find((product: { id: any }) => product.id === id);
};
