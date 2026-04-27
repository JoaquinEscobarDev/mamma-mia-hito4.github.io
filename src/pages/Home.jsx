import pizzas from "../assets/pizzas"
import Header from "../components/Header"
import CardPizza from "../components/CardPizza"

const Home = () => {
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