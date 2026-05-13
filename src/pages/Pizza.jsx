import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useCart } from "../context/CartContext"

const Pizza = () => {
  const { id } = useParams()
  const { addToCart } = useCart()

  const [pizza, setPizza] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getPizza = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`)
        if (!res.ok) throw new Error("No se encontró la pizza")
        const data = await res.json()
        setPizza(data)
      } catch (err) {
        setError(err.message)
      }
    }

    getPizza()
  }, [id])

  if (error) {
    return <p className="text-center mt-5 text-danger">{error}</p>
  }

  if (!pizza) {
    return <p className="text-center mt-5">Cargando pizza...</p>
  }

  return (
    <main className="container my-5">
      <div className="card">
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />

        <div className="card-body">
          <h2 className="text-capitalize">{pizza.name}</h2>

          <p>{pizza.desc}</p>

          <h5>Ingredientes:</h5>

          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index} className="text-capitalize">🍕 {ingredient}</li>
            ))}
          </ul>

          <h4>Precio: ${pizza.price.toLocaleString("es-CL")}</h4>

          <button
            className="btn btn-dark"
            onClick={() => addToCart(pizza)}
          >
            Añadir al carrito 🛒
          </button>
        </div>
      </div>
    </main>
  )
}

export default Pizza
