export const getByTypeClient = ( products:any, client:any  ) => {
  const validType = ['cosmetic_1', 'glasses_1', 'app'];

  if (  !validType.includes( client ) ) {
      throw new Error(`Tipo de Web "${ client }" no es correcto`);
  }

  return products.filter( (work: { client: any; }) => work.client === client );
}