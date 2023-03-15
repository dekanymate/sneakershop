import "./SneakerCard.css"

const SneakerCard = ({ sneaker }) => {

  const imgUrl = `/src/components/sneaker-list/sneaker-card/pictures/${sneaker.image}`;

  const hufFormat = (amount) => {
    return new Intl.NumberFormat('hu-HU', {
      style: 'currency',
      currency: 'HUF',
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="col-sm-4">
      <div className="card">
        <img className="card-img-top" src={imgUrl} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{sneaker.name}</h5>
          <p className="card-text">{sneaker.description}</p>
          <p className="card-text">
            <b>{hufFormat(sneaker.price)}</b>
          </p>
          <a href="#" className="btn btn-primary">Kosárba</a>
        </div>
      </div>
    </div>
  );
};

export default SneakerCard;
