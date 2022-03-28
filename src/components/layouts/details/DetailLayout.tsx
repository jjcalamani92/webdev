import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { getProductById } from "../../../helpers/getProductById";
import { getProductMore } from "../../../helpers/getProductMore";
import { HeadingPrimary, HeadingTertiary } from "../heading/HeadingLayouts";
import { CardMoreProduct } from "../card/CardMoreProduct";
import { getProductByCategory } from "../../../helpers/getProductByCategory";
import { DetailImage } from "./DetailImage";
import { DetailContent } from "./DetailContent";

interface State {
  Product: any;
  index: Number;
}

export const DetailLayout = () => {
  const { products, index } = useSelector((state: State) => state.Product);
  const { name } = useParams();
  console.log(name);

  // const product = getProductByTitleURL(products, name);
  const product = getProductById(products, name);

  const moreProduct = getProductByCategory(products, product.category);
  const moreProducts = getProductMore(moreProduct, product.id);
  const MoreProduct = moreProducts.slice(0, 6);
  return (
    <>
      <HeadingPrimary titleP="detalles del producto" />
      <section className="detail">
        {/* <!-- card left --> */}
        <DetailImage product={product} index={index} />
        {/* <!-- card right --> */}
        <DetailContent product={product} />
      </section>

      <HeadingTertiary title="Productos similares" />

      <section className="product-more">
        {MoreProduct.map((data: any) => (
          <CardMoreProduct key={data.id} {...data} />
        ))}
      </section>
    </>
  );
};
