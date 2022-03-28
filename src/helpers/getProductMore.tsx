export const getProductMore = (products: any, id: any) => {
  return products.filter((product: { id: any }) => product.id !== id);
};
