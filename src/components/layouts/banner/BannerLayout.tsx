import { useSelector } from 'react-redux';

interface State {
    Banner: any
};

export const BannerLayout = () => {
    const { banners } = useSelector( (state: State) => state.Banner );
    return (
        <section className="banner">
            { banners.map((data:any,i:number) => (
                <div className="box" key={i}>
                    <img src={`${data.image}`} alt=""/>
                    <div className="content">
                        <span>oferta especial</span>
                        <h3>{data.content}</h3>
                        <a href="#" className="btn">agregar al carrito</a>
                    </div>
                </div>
            ))}
        </section>
    )
}