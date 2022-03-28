import { useDispatch, useSelector } from 'react-redux';
import { setImage } from '../../../context/action/Product';

interface Props {
  product: any;
  index: Number
}

export const DetailImage = ({product, index}:Props) => {
  const dispatch = useDispatch();
  const handleImage = (i: any) => {
    dispatch(setImage(i));
  };
  return (
    <div className="image">
          <div className="image-select">
            {product.image.map((img: any, i: any) => (
              <div className="img-item" key={i}>
                <img
                  src={img}
                  alt={product.title}
                  onClick={() => handleImage(i)}
                  className={index === i ? "active" : ""}
                />
              </div>
            ))}
          </div>
          <div className="image-display">
            <img src={`${product.image[`${index}`]}`} alt={`${product.title}`} />
          </div>
        </div>
  )
}
