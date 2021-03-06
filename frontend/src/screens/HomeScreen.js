const HomeScreen = {
    render: () =>
        `
    <section class= "home">
        <div class="showcase">
            <h2>Shopping with us</h2>
            <img id="homePicture" src="./images/product-9.jpg">
                       <div class="info">
                <h3>Best Shopping Experince </h3>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
            </div>
        </div>
    </section>
    <div class="features-container">
    <section class="features">
      <h2>Features</h2>
      <div class="cards">
        <div class="card">
          <img src="./images/product-10.jpg" alt="" />
          <h4>Black Shoes</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
        <div class="card">
        <img src="./images/product-12.jpg" alt="" />
        <h4>Man Joggers</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </div>
        <div class="card">
        <img src="./images/product-11.jpg" alt="" />
        <h4>White Shoes</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
     
      </div>
    </section>
    <img class="wave" src="./images/wave.png" alt="" />
  </div><section class="soon">
  <h2>Coming Soon</h2>
  <img src="./images/product-12.jpg" alt="" />
  <img class="circle" src="./images/circle.png" alt="" />
</section>
<footer>
  <h1>Leica 2020</h1>
  <ul>
    <li>
      <a href="#"><img src="./images/yt-logo.png" alt="" /></a>
    </li>
    <li>
      <a href="#"><img src="./images/twitter-logo.png" alt="" /></a>
    </li>
    <li>
      <a href="#"><img src="./images/instagram-logo.png" alt="" /></a>
    </li>
  </ul>
</footer>

    `,

};


export default HomeScreen;