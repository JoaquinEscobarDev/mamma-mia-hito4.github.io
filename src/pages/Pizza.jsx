import { useEffect, useState } from "react"

const Pizza = () => {
  const [pizza, setPizza] = useState(null)

  useEffect(() => {
    const getPizza = async () => {
      const res = await fetch("http://localhost:5000/api/pizzas/p001")
      const data = await res.json()
      setPizza(data)
    }

    getPizza()
  }, [])

  if (!pizza) {
    return <p className="text-center mt-5">Cargando pizza...</p>
  }

  return (
    <main className="container my-5">
      <div className="card">
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />

        <div className="card-body">
          <h2>{pizza.name}</h2>

          <p>{pizza.desc}</p>

          <h5>Ingredientes:</h5>

          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>🍕 {ingredient}</li>
            ))}
          </ul>

          <h4>Precio: ${pizza.price.toLocaleString("es-CL")}</h4>

          <button className="btn btn-dark">
            Añadir al carrito 🛒
          </button>
        </div>
      </div>
    </main>
  )
}

export default Pizza