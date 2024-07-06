import cabin from './portfolio/cabin.png'
import cake from './portfolio/cake.png'
import circus from './portfolio/circus.png'
import game from './portfolio/game.png'
import safe from './portfolio/safe.png'
import submarine from './portfolio/submarine.png'
import './gallery.css'
import './header.css'
import "./hero.css"
// export default App;
function Myheader() {
  return (
  <>      
  <header id="header">
  <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="logo" href="#">START BOOTSTRAP</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#gallery">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
       
        </div>
      </div>
    </nav></header>
<section className="hero d-flex align-items-center justify-content-center">
    <div className="text-center">
      <img className="d-block mx-auto mb-4 img" src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg" alt="" width="72" height="57"/>
      <h1 className="display-5 fw-bold">START BOOTSTRAP</h1>
<div className="icon mt-3">
  <i className="bi bi-star-fill"></i>
</div>
<div className="mt-4">
<span>
  Graphic Artist - Web Designer - Illustrator
</span>
</div>
    </div>
  </section>

  <section id="gallery">
<div class="gallery">
  <div class="gallery-heading">
    <h2 class="fw-bold">PORTFOLIO</h2>
  </div>
  <div class="icon mt-3">
    <i class="bi bi-star-fill"></i>
  </div>

<div class="row mt-4">
  <div class="col-lg-4 col-md-12 mb-1 mb-lg-0">
<div class="img">
    <img
      src={cabin}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"/>
  </div>
  <div class="img">
    <img
      src={game}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"/></div>
  </div>

  <div class="col-lg-4 mb-1 mb-lg-0">
    <div class="img">
    <img
      src={cake}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"/>
  </div>
  <div class="img">
    <img
      src={safe}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"/></div>
  </div>

  <div class="col-lg-4 mb-1 mb-lg-0">
   <div class="img"> <img
      src={circus} 
           class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"/>
  </div>
  <div class="img">
    <img
      src={submarine}
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"/>

  </div>

  </div>
</div>

</div>
  </section>


  <section id="about">
    <div class="about">
      <div class="about-heading">
        <h2 class="fw-bold">ABOUT</h2>
      </div>
      <div class="icon mt-3">
        <i class="bi bi-star-fill"></i>
      </div>
      <div class="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1 px-4 py-5  text-center">
    <div class="col">

      <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>
    <div class="col">
      <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
    </div>
        </div>
        <div class="button">
          <button><i class="bi bi-download"></i>Free Download</button>
        </div>
      </div>

    
  </section>
  <section id="contact">
    <div class="contact">
      <div class="contact-heading">
        <h2 class="fw-bold">CONTACT ME</h2>
      </div>
      <div class="icon mt-3">
        <i class="bi bi-star-fill"></i>
      </div>
      <div class="form-content row row-cols-12 py-5">
        
        <div class="col">
          <form class="w-100">
            <div class="mb-5 w-100">
              <input type="text" class="form-control" placeholder="FullName"/>
             
            </div>
            <div class="mb-5 w-100">
              <input type="text" class="form-control" placeholder="Email Adress"/>
            </div>
            <div class="mb-5 w-100">
              <input type="email" class="form-control" placeholder="Phone Number"/>
            </div>
            <div class="mb-5 w-100">
              <textarea class="form-control" rows="4" placeholder="Message"></textarea>
            </div>
            <button type="submit" class="btn ">Send</button>
          </form>
        </div>
    </div>
    </div>
  </section>
  <footer class="p-5 ">
    <div class="row justify-content-start text-center g-4 foot">
      <div class="col-lg-4 col-md-6 col-sm-12">
        <h2>LOCATION</h2>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><h5>2215 John Daniel Drive</h5></li>
          <li class="nav-item mb-2"><h5>Clark, MO 65243</h5></li>
        </ul>
      </div>

      <div class="col-lg-4 col-md-6 col-sm-12">
        <h2>AROUND THE WEB</h2>
        <ul class="nav flex-row align-items-center justify-content-center lm">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted"><i class="bi bi-facebook"></i></a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted"><i class="bi bi-twitter"></i></a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted"><i class="bi bi-instagram"></i></a></li>
       
        </ul>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <h2>ABOUT FREELANCER</h2>
        <ul className="nav flex-column">
          <li className="nav-item leo">
            Freelance is a free to use, MIT licensed Bootstrap theme created 
            <a href="#" class="nav-link p-0 link">by Start Bootstrap .</a></li>
        </ul>
      </div>


    

</div>
  </footer>
  <div className="d-flex justify-content-center text-center foot2 align-items-center py-1 m-0">
    <p className="p-3">© 2021 Company, Inc. All rights reserved.</p>
  </div>  

</>


);

}

export default function MyApp() {
  return (
    <div>
      <Myheader />
    </div>
  );
}
