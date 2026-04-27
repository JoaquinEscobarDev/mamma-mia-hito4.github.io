const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title text-capitalize">{name}</h5>
        <p className="fw-bold mb-2">Ingredientes:</p>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index} className="text-capitalize">
              {ingredient}
            </li>
          ))}
        </ul>
        <h6 className="mt-3">Precio: ${price.toLocaleString()}</h6>
      </div>
    </div>
  );
};

export default CardPizza;