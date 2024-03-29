const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="category-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
        </div>
        <div className="brand-icons">
          <img src="/images/flipkart.png" alt="flipkart_image" />
          <img src="/images/amazon.png" alt="amazon_image" />
        </div>
      </div>
      <div className="hero-icons">
        <img src="/images/shoe_image.png" alt="hero_image" />
      </div>
    </main>
  );
};

export default HeroSection;
