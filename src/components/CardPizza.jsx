import { Link } from "react-router-dom"

const CardPizza = ({ id, name, price, ingredients, img, onAdd }) => {
  return (
    <div className="card h-100">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body d-flex flex-column">
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

        <div className="d-flex justify-content-between mt-auto gap-2">
          <Link to={`/pizza/${id}`} className="btn btn-outline-dark flex-fill">
            Ver más 👀
          </Link>
          <button className="btn btn-dark flex-fill" onClick={onAdd}>
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza
