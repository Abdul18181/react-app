import "./hero.css"
function Hero(){
    return(         
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

    )
;}
function MyHero (){
    return(

        <Hero/>
    )
}
export default MyHero;