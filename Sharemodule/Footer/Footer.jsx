import React from 'react'
import "../Footer/Footer.css";
import img1 from "../Footer/ft logo1.png"
import img2 from "../Footer/ft logo3.png"
import img3 from "../Footer/ft logo2.png"

export default function Footer() {
  return (
    <>
    
    <div class="footer">
        <div class="container">

<div class="ft_all_cards-wpr">

  <div class="ft_card_1">
  <h2>Order Now</h2>
    <ul>
      <li><a href="#">Deals</a></li>
      <li><a href="#">Pizza</a></li>
     
      <li><a href="#">Drinks</a></li>
      <li><a href="#">Desserts</a></li>
    </ul>
    <div class="ft_img">
     

      <ul>
        <li><a href="#" class="logo1"><img src={img1}/></a></li>
        <li><a href="#" class="logo2"><img src={img2}/></a></li>
        <li><a href="#" class="logo3"><img src={img3}/></a></li>
      </ul>
    </div>
  </div>

  <div class="ft_card_2">
    <h2>About</h2>
    <ul>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Contactless delivery</a></li>
      <li><a href="#">Nutrition</a></li>
      <li><a href="#">Career</a></li>
    </ul>
  </div>

  <div class="ft_card_3">
    <h2>Our Policies</h2>
    <ul>
      <li><a href="#">Privacy</a></li>
      <li><a href="#">Terms & Conditions</a></li>
      <li><a href="#">Responsible disclosure</a></li>
      <li><a href="#"> FAQs & Help</a></li>
    </ul>

  </div>

  <div class="ft_card_4">
    <h2>Visit Our Restaurant</h2>
    <ul>
      <li><a href="#">Locate a store</a></li>
      <li><a href="#">Global Blog</a></li>
      
    </ul>


    <div class="ft_c4_link">
      <form>
        <div class="ft_c4_form">
          <input type="email" placeholder="Enter your email address.."/>
          <input type="submit" value="Subscibe Now"/>
        </div>
      </form>
    </div>

  </div>

</div>

<div class="ft_text">
  <h5>Copyright © 2023 Snehashis Parui</h5>
</div>

</div>
</div>
    </>
  )
}

    