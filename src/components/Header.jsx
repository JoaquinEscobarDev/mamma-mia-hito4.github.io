const Header = () => {
  return (
    <header
      className="text-white text-center d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
      }}
    >
      <h1 className="fw-bold">¡Pizzería Mamma Mia!</h1>
      <p className="mb-0">¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </header>
  )
}

export default Header