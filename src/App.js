import React from 'react';
import './App.css'; 

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li><a href="#men">MEN</a></li>
          <li><a href="#women">WOMEN</a></li>
          <li><a href="#kids">KIDS</a></li>
          <li><a href="#beauty">BEAUTY</a></li>
          <li><a href="#home">HOME & KITCHEN</a></li>
        </ul>
      </nav>
    </header>
  );
};

const HeroSection = () => {
  return (
    <section id="men" className="hero-section">
      <div className="hero-content">
        <br></br>
        <br></br>
        <h1>Fashion Hub</h1>
        <br></br>
        <h2>Your destination</h2>
        <br></br>
        <br></br>
      </div>
    </section>
  );
};

const FeaturedProducts = () => {
  return (
    <section id="products" className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        <div className="product-item">
          <img src="https://img.freepik.com/free-photo/happy-couple-stylish-hoodies-winter-outdoor-shoot_53876-105545.jpg?t=st=1712833733~exp=1712837333~hmac=4447cad97ec8591d48a121ef83a56c24620f9fdbf411e13ae9bd732bd53f1b1f&w=740" alt="Product 1" />
        </div>
        <div className="product-item">
          <img src="https://img.freepik.com/free-photo/back-view-man-carrying-tote-bag_53876-96623.jpg?t=st=1712833785~exp=1712837385~hmac=b566d0a804911c67f7ce3cceec996f37fd947f7355a0d0505a0a86c44a27ace9&w=740" alt="Product 2" />
        </div>
        <div className="product-item">
          <img src="https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg?t=st=1712833808~exp=1712837408~hmac=2b2c99e332b6dc292e00fc846a48c01a04a2f5dca6dee3759c6f15ee2196a54d&w=740" alt="Product 2" />
        </div>
        <div className="product-item">
          <img src="https://img.freepik.com/free-photo/beautiful-woman-white-hoodie-winter-fashion_53876-119757.jpg?t=st=1712833848~exp=1712837448~hmac=79f22ae6517be0d980e36def79de264a2286632a7dab7659295bc2ff68eb3c26&w=740" alt="Product 2" />
        </div>
        <div className="product-item">
          <img src="https://img.freepik.com/premium-photo/cozy-yellow-sweater-blue-jeans-scarf-hat-with-hangers-white-background-women-s-stylish-autumn-winter-outfit-trendy-clothes-collage-flat-lay-top-view_479776-4494.jpg?w=740" alt="Product 2" />
        </div>
        <div className="product-item">
          <img src="https://agentestudio.com/uploads/ckeditor/pictures/1575/content_fashion_website_design_2.jpg" alt="Product 2" />
        </div>
        <div className="product-item">
          <img src="https://agentestudio.com/uploads/ckeditor/pictures/1575/content_fashion_website_design_2.jpg" alt="Product 2" />
        </div>
        <div className="product-item">
          <img src="https://agentestudio.com/uploads/ckeditor/pictures/1575/content_fashion_website_design_2.jpg" alt="Product 2" />
        </div>
      </div>
      <br></br>
      <button className="shop-now-btn">Shop Now</button>
    </section>
  );
};

const Products = () => {
  return (
    <section id="products" className="featured-products">
      <h2>Featured Products</h2>
      <div className="product">
        <div className="product-item">
          <img src="https://img.freepik.com/free-photo/fall-studio-shot-two-models-with-blond-wavy-hairstyle-wool-straw-hat-wearing-striped-poncho_273443-3793.jpg?t=st=1712832985~exp=1712836585~hmac=4973517dab9a498887fca744cad41b4e3370b32b3d6cdaf177a6569d091062da&w=1380" alt="Product 1" />
          <h3>Women</h3>
        </div>
        <div className="product-item">
          <img src="https://img.freepik.com/free-photo/young-handsome-happy-smiling-man-listening-music-earphones-isolated-white-studio-background-holding-smartphone-wearing-denim-shirt-hat-sunglasses_285396-1523.jpg?t=st=1712833049~exp=1712836649~hmac=ab9638aa7d5326d996c730268b81ebf124792cdb0e0e287ed54cc6bbc9cdb205&w=1380" alt="Product 2" />
          <h3>Men</h3>
        </div>
      </div>
    </section>
  );
};
const Products2 = () => {
  return (
    <section id="products" className="featured-products">
      <h2>Featured Products</h2>
      <div className="product2">
        <div className="product-item">
          <img src="https://img.freepik.com/premium-photo/pair-running-shoes-isolated-white-background_941265-8906.jpg?w=740" alt="Product 1" />
          <h3>SHOES</h3>
        </div>
        <div className="product-item">
          <img src="https://img.freepik.com/premium-psd/isometric-bed-3d-render-isolated_28315-15764.jpg?w=740" alt="Product 2" />
          <h3>HOME</h3>
        </div>
        <div className="product-item">
          <img src="https://img.freepik.com/premium-psd/bath-set-gift-mockup_23-2150755255.jpg?w=996" alt="Product 1" />
          <h3>BEAUTY</h3>
        </div>
        <div className="product-item">
          <img src="https://img.freepik.com/free-psd/white-decorative-furniture-with-beautiful-plants-pillowcases-mockup_176382-1961.jpg?t=st=1712833225~exp=1712836825~hmac=c64fbaf2a8ed2d1b4685892466897ea8bf3df1f25c4602c1f59562e644a1b3f0&w=740" alt="Product 1" />
          <h3>DECOR</h3>
        </div>
      </div>
    </section>
  );
};


const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="contact-info">
        <p>Email: contact@fashionhub.com</p>
        <p>Phone: +1 123-456-7890</p>
      </div>
      <p>&copy; 2024 Fashion Hub. All rights reserved.</p>
    </footer>
  );
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <Products />
      <Products2 />
      <Footer />
    </div>
  );
};

export default App;
