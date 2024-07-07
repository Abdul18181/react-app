function About (){
    return(
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
    )
}
function MyAbout(){
    return(
        <About/>
    )
}
export default MyAbout;