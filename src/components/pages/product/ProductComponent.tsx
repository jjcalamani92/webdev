import { useSelector } from "react-redux";

import { getProductByCategory } from "../../../helpers/getProductByCategory";
import { CardLayout } from "../../layouts/card/CardLayout";

interface Props {
  category: String;
  categoryTitle: String;
}
interface State {
  Product: any;
}
export const ProductComponent = ({ category }: Props) => {
  const { products } = useSelector((state: State) => state.Product);
  const product = getProductByCategory( products , category);
  return (
    <>
      <section className="product">
        {product.map((data: any) => (
          <CardLayout key={data.id} {...data} />
        ))}
      </section>
    </>
  );
};
