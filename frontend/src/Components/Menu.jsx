import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  const items = [
    { id: 1, name: "Sandwich", price: 50, quantity: 20, img: "/a1.avif" },
    { id: 2, name: "Coffee", price: 30, quantity: 32, img: "/a2.avif" },
    { id: 3, name: "Light Orange Juice", price: 60, quantity: 26, img: "/a3.avif" },
    { id: 4, name: "Tea", price: 20, quantity: 18, img: "/a5.avif" },
    { id: 5, name: "Chocolate Chip Cookies", price: 10, quantity: 24, img: "/a6.avif" },
    { id: 6, name: "Jeera Masala Soda", price: 25, quantity: 18, img: "/a7.avif" },
    { id: 7, name: "Fresh Veggie Pizza", price: 100, quantity: 18, img: "/a8.avif" },
    { id: 8, name: "Burger", price: 45, quantity: 12, img: "/a4.jpeg" },
    { id: 9, name: "Fries", price: 60, quantity: 17, img: "/a9.avif" },
    { id: 10, name: "Ice Cream", price: 40, quantity: 25, img: "/a10.avif" },
    { id: 11, name: "Chilly Potato", price: 50, quantity: 35, img: "/a11.avif" },
    { id: 12, name: "White Sauce Pasta", price: 60, quantity: 33, img: "/a12.avif" },
    { id: 13, name: "Masala Dosa", price: 100, quantity: 17, img: "/a13.avif" },
    { id: 14, name: "Veg Noodles", price: 120, quantity: 18, img: "/a14.avif" },
    { id: 15, name: "Poori Aloo", price: 60, quantity: 25, img: "/a15.avif" },
    { id: 16, name: "Aloo Pyaaz Paratha", price: 60, quantity: 29, img: "/a16.avif" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);
  const [cart, setCart] = useState([]);

  // Load cart from localStorage when component mounts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Sync cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const decreaseFromCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (!existingItem) return;

    if (existingItem.quantity > 1) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    } else {
      // remove if quantity = 0
      setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    }
  };

  const handleSearch = () => {
    const results = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(results);
  };

  const getQuantity = (id) => {
    const item = cart.find((cartItem) => cartItem.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <>
      <div className="container-fluid menu">
        <div className="container py-4 ">
          {/* header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="text-white fw-bold display-4" style={{ fontFamily: "cursive" }}>
              <i>CAFETERIA</i>
            </h2>
            <div className="text-white">
              <Link className="btn btn-outline-light me-2" to="/">
                Home
              </Link>
              <Link className="btn btn-outline-light me-2" to={"/myorder"}>
                My Order
              </Link>
              <Link className="btn btn-danger" to="/login">
                Logout
              </Link>
            </div>
          </div>

           <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel"> 
            <div className="carousel-indicators"> 
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" ></button> 
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
               <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button> 
               </div> 
               <div className="carousel-inner mb-5 rounded-5"> 
                <div className="carousel-item active">
                   <img src="s1.jpg" style={{height:'500px'}} className="d-block w-100" alt="..." /> </div>
                    <div className="carousel-item"> <img src="s2.jpg" style={{height:'500px'}} className="d-block w-100" alt="..." /> </div> 
                    <div className="carousel-item"> <img src="s3.jpg" style={{height:'500px'}} className="d-block w-100" alt="..." /> </div> 
                    </div>
                     <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"> <span className="carousel-control-prev-icon" aria-hidden="true"></span> <span className="visually-hidden">Previous</span> </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next"> <span className="carousel-control-next-icon" aria-hidden="true"></span> <span className="visually-hidden">Next</span> </button> 
                      </div>

          {/* search */}
          <h4 className="mb-3 text-white">
            <i>Today's items</i>
          </h4>
          <div className="row mb-3">
            <div className="col-sm-10">
              <div className="input-group mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-sm-2">
              <button
                className="bg-primary border-0 rounded-3 w-75 h-75 fs-5 pb-1 text-white"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>

          {/* items grid */}
          <div className="row ">
            {filteredItems.map((item) => {
              const qty = getQuantity(item.id);
              return (
                <div key={item.id} className="col-md-3 mb-4">
                  <div className="card h-100 bg-white">
                    <img
                      src={item.img}
                      className="card-img-top"
                      alt={item.name}
                      height="160px"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">Price: ₹{item.price}</p>
                      <p className="card-text">Available: {item.quantity}</p>

                      <div className="mt-auto d-flex justify-content-between align-items-center">
                        <Link className="btn btn-outline-secondary btn-sm" to={"/viewdetails"}>
                          View details
                        </Link>

                        {qty === 0 ? (
                          <button
                            className="btn btn-primary btn-sm"
                            onClick={() => addToCart(item)}
                          >
                            Add to Cart
                          </button>
                        ) : (
                          <div className="d-flex align-items-center">
                            <button
                              className="btn btn-outline-danger btn-sm"
                              onClick={() => decreaseFromCart(item)}
                            >
                              -
                            </button>
                            <span className="mx-2">{qty}</span>
                            <button
                              className="btn btn-outline-success btn-sm"
                              onClick={() => addToCart(item)}
                            >
                              +
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* footer */}
          <footer className="text-center text-white mt-4">
            <small>
              © 2025 Canteen Management System. All rights reserved. <br />
              Developed with <span style={{ color: "red" }}>♥</span> by{" "}
              <a
                href="https://www.instagram.com/shivang6761/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shivang Sharma
              </a>
              .
            </small>
          </footer>
        </div>
      </div>

      {/* floating Go to Cart button */}
      <button
        onClick={() => navigate("/addcard")}
        className="btn btn-warning rounded-circle shadow-lg"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        🛒
      </button>
    </>
  );
}

export default Menu;





       