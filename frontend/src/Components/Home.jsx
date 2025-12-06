import React from 'react'
import Nav from '../Elements/Nav'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <Nav />
      <div className="container-fluid mb-5">
        <div className="row" >
          <div className="col-sm-12 col-md-12 col-lg-12 p-0">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner"style={{height:'450px'}}>
                <div class="carousel-item active">
                  <img src="cafeteria5.jpg" class="d-block w-100" alt="Fast Food Dishes" />
                </div>
                <div class="carousel-item">
                  <img src="cafeteria3.webp" class="d-block w-100" alt="Main Course Dishes" />
                </div>
                <div class="carousel-item">
                  <img src="cefeteria5.webp" class="d-block w-100" alt="Main Course Dishes" />
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        {/* End Carousel  */}
       <div className="row align-items-center mb-5">
        <div className="col-12 col-md-6 text-center text-md-start">
          <h1 style={{ fontFamily: "cursive", fontSize: "50px" }}>
            Smart Canteen 🍴
          </h1>
          <p style={{ fontSize: "25px", lineHeight: "1.6" }}>
            Welcome to <b>Smart Canteen</b> – your modern digital food hub!  
            Order meals online, track your orders, and enjoy a fast, 
            convenient, and hygienic canteen experience.  
          </p>
  
        </div>
        <div className="col-12 col-md-6 text-center">
          <img
            src="/k1.jpg" // replace with your image
            alt="Smart Canteen"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* About Kitchen */}
      <div className="row align-items-center mb-5">
        <div className="col-12 col-md-6 text-center">
          <img
            src="/k4.jpg" // replace with your image
            alt="Kitchen"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-12 col-md-6">
          <h2  style={{ fontFamily: "cursive", fontSize: "50px" }}>Our Kitchen 👨‍🍳</h2>
          <p style={{fontSize: "25px" , lineHeight: "1.6"}}>
            Our kitchen is well-equipped with modern cooking facilities and 
            hygienic standards. We ensure every dish is prepared with love, 
            care, and cleanliness so that you enjoy fresh and tasty meals.  
          </p>
        </div>
      </div>

      {/* About Food */}
      <div className="row align-items-center mb-5">
        <div className="col-12 col-md-6">
          <h2 style={{ fontFamily: "cursive",fontSize:'50px' }}>Food Quality 🍔</h2>
          <p style={{fontSize: "25px" , lineHeight: "1.6"}}>
            At Smart Canteen, food quality is our priority.  
            We use fresh ingredients, maintain hygiene, and 
            offer a wide range of delicious items – from snacks 
            to full meals – at affordable prices.  
          </p>
        </div>
        <div className="col-12 col-md-6 text-center">
          <img
            src="/s2.jpg" // replace with your image
            alt="Food"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* Ratings Section */}
      <div className="row text-center ">
        <h2 style={{ fontFamily: "cursive" }}>What Students Say ⭐</h2>
        <div className="col-12 col-md-4 mt-4 ">
          <div className="card shadow p-4 ">
            <img src="student1.jpg" className='rounded-circle mb-2' height={"350px"} alt="Student Image" />
            <p>"Best canteen ever! Quick service and tasty food."</p>
            <h5>⭐⭐⭐⭐⭐</h5>
            <small>- Muhbhusra Rehman</small>
            <small>MCA</small>
          </div>
        </div>
        <div className="col-12 col-md-4 mt-4">
          <div className="card shadow p-4 ">
            <img src="Shivang.jpg" className='rounded-circle mb-2' height={"350px"} alt="Student Image" />
            <p>"Hygienic, affordable and student-friendly menu."</p>
            <h5>⭐⭐⭐⭐</h5>
            <small>- Shivang Sharma</small>
            <small>MCA</small>

          </div>
        </div>
        <div className="col-12 col-md-4 mt-4">
          <div className="card shadow p-4">
            <img src="Khushi.jpg" className='rounded-circle mb-2'  height={"350px"} alt="Student Image" />
            <p>"Loved the digital ordering system. No more waiting!"</p>
            <h5>⭐⭐⭐⭐⭐</h5>
            <small>- Khushi Rathore</small>
            <small>MCA</small>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="row text-center mt-5">
        <h2 style={{ fontFamily: "cursive" }}>Order Now 🚀</h2>
        <p>
          Skip the line and enjoy delicious food at your fingertips.
        </p>
        <div>
          <Link className="btn btn-primary m-2" to={'/login'}>View Menu</Link>
          <Link className="btn btn-outline-success m-2" to={'/contact'}>Contact Us</Link>
        </div>
      </div>

      </div>
    </>
  )
}

export default Home