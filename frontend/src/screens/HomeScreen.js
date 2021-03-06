import Footer from "../components/Footer";

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
  </div>
  <section class="soon">
  <h2>Coming Soon</h2>
  <img  id="footerImage" src="./images/exclusive.png" alt="" />
  <img class="circle" src="./images/circle.png" alt="" />
  </section>
    `,

};


export default HomeScreen;