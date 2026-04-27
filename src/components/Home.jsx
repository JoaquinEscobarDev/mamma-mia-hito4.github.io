import { useEffect, useState } from "react"
import Header from "./Header"
import CardPizza from "./CardPizza"

const Home = () => {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    const getPizzas = async () => {
      const res = await fetch("http://localhost:5000/api/pizzas")
      const data = await res.json()
      setPizzas(data)
    }

    getPizzas()
  }, [])

  return (
    <>
      <Header />

      <main className="container my-5">
        <div className="row g-4">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-12 col-md-6 col-lg-4">
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default Home