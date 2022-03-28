import { CategoryCard } from "./CategoryCard"

import { useSelector } from "react-redux";
import { getByTypeClient } from '../../../helpers/getByTypeClient';

interface Props {
  Category: any;
}



export const CategoryLayout = () => {
  const { categories } = useSelector((state: Props) => state.Category);

  return (
    <>
    <section className="category">
      {categories.map((data: any, i: number) => (
        <CategoryCard
          key={i} {...data}
        />
      ))}
    </section>
    
    </>
  )
}
