import { HeadingPrimary } from "../../layouts/heading/HeadingLayouts";
import { ProductComponent } from "./ProductComponent";

interface Props {
  title: String;
  categoryTitle: String;
  category: String;
}

export const ProductsPages = ({ title, category, categoryTitle }: Props) => {
  return (
    <>
      <HeadingPrimary titleP={title} />
      <ProductComponent category={category}  categoryTitle={categoryTitle}/>
    </>
  );
};
