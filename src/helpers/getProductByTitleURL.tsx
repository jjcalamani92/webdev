export const getProductByTitleURL = ( products:any, titleURL:any ) => {
    
    return products.find( (product: { titleURL: any; }) => product.titleURL === titleURL );
}