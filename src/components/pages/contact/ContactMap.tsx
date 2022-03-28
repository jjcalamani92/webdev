interface Props {
  map: String;
}

export const ContactMap = ({ map }:Props) => {
  return (
    <iframe className="map" src={`${map}`}  loading="lazy"></iframe>

  )
}
