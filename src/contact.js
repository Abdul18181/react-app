function Contact(){
return(
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
)
}

function MyContact(){
    return(
        <Contact/>
    )
}
export default MyContact;