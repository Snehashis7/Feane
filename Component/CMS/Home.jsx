import React from 'react'
import "../CMS/Home.css"
import img1 from "./hut30.jpg";
import img2 from "./hut31.jpg";
import img27 from "../../Image/1.jpg"
import img28 from "../../Image/2.jpg"
import img29 from "../../Image/3.jpg"
import img30 from "../../Image/4.jpg"
import img31 from "../../Image/5.jpg"
import img32 from "../../Image/6.jpg"
import img51 from "./fries.jpg"
import img52 from "./pasta.jpg"
import img53 from "./sandwich.webp"
import img50 from "./about-img.png"


export default function Home() {
  return (
    <>
<div class="main-header">
      <div class="banner-sec">
      <div class="container">
      <div className="abc" style={{backgroundColor:"transparent"}}>
      <div class="b-text">
          <h3 style={{color:"white"}}>All the taste, not on your waist!</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim a quos laborum, assumenda voluptate
            excepturi
            esse quia velit repudiandae labore rerum quas quibusdam
          </p>
        </div>

        <div class="banner-link">
          <a href="#" class="cmn-btnn">Order Now</a>
        </div>
      </div>
      </div>
      </div>

      </div>
      <section className='banner-portion'>
      <div class="our-menu">
        <div class="container">
            <div class="menu-header">
                <h2>Our Menu</h2>
                <div class="nav-bar">
                    <ul>
                        <li>All</li>
                        <li>Burger</li>
                        <li>Manchurian</li>
                        <li>Momo</li>
                        <li>Pizza</li>
                        <li>Pasta</li>
                        <li>Fries</li>
                    </ul>
                </div>
            </div>
            </div>
            </div>


    <div className='container' first_content>
      <div className='row'>
        <div className='col-md-4'>
        <div class="card" style={{width: "18rem"}}>
  <img src={img27} class="firstcard_image" alt="..."/>
  <div class="card-body">
    
   <p class="card-text">Delicious Burger</p>
    
  </div>
 
</div>

        </div>
        <div className='col-md-4'>
        <div class="card" style={{width: "18rem"}}>
  <img src={img28} class="firstcard_image" alt="..."/>
  <div class="card-body">
    
    <p class="card-text">Delicious Pizza</p>
    
  </div>
</div>

        </div>
        <div className='col-md-4'>
        <div class="card" style={{width: "18rem"}}>
  <img src={img29} class="firstcard_image" alt="..."/>
  <div class="card-body">
    
    <p class="card-text">Delicious Manchurian</p>
    
   
  </div>
</div>

        </div>
        <div className='col-md-4'>
        <div class="card" style={{width: "18rem"}}>
  <img src={img30} class="firstcard_image" alt="..."/>
  <div class="card-body">
    
    <p class="card-text">Delicious Chowmin</p>
   
  </div>
</div>

        </div>
        <div className='col-md-4'>
        <div class="card" style={{width: "18rem"}}>
  <img src={img31} class="firstcard_image" alt="..."/>
  <div class="card-body">
    
    <p class="card-text">Delicious Pie</p>
   
  </div>
</div>

        </div>
        <div className='col-md-4'>
        <div class="card" style={{width: "18rem"}}>
  <img src={img32} class="firstcard_image" alt="..."/>
  <div class="card-body">
    
    <p class="card-text">Delicious Momo</p>
   
  </div>
</div>

        </div>
        <div className='col-md-4'>
        <div class="card" style={{width: "18rem"}}>
  <img src={img51} class="firstcard_image" alt="..."/>
  <div class="card-body">
    
    <p class="card-text">Delicious Fries</p>
   
  </div>
</div>

        </div>
        <div className='col-md-4'>
        <div class="card" style={{width: "18rem"}}>
  <img src={img52} class="firstcard_image" alt="..."/>
  <div class="card-body">
    
    <p class="card-text">Delicious Pasta</p>
   
  </div>
</div>

        </div>
        <div className='col-md-4'>
        <div class="card" style={{width: "18rem"}}>
  <img src={img53} class="firstcard_image" alt="..."/>
  <div class="card-body">
    
    <p class="card-text">Delicious Sandwich</p>
   
  </div>
</div>

        </div>
        
        <a class="abcd" href="">View More</a>

      </div>

      

    </div>
   </section>
  <section class="about_section layout_padding">
  <div className="third">
    <div className="row">
      <div class="col-md-6">
        <div className="img-box">
          <img src={img50} alt="" style={{width:"80%"}} />
        </div>
      </div>
      <div class="col-md-6">
       <div className="details-box">
       <div className="heading container">
          <h2>We Are Feane</h2>
        </div>
        <p>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All
          </p>
          <a href="">Read More</a>
       </div>
      </div>
    </div>
   </div>
  </section>
  
  

    </>
  )
}
