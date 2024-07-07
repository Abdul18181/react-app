import cabin from './portfolio/cabin.png'
import cake from './portfolio/cake.png'
import circus from './portfolio/circus.png'
import game from './portfolio/game.png'
import safe from './portfolio/safe.png'
import submarine from './portfolio/submarine.png'
function MyGallery(){
    return(
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
    )
}
function Gallery (){
    return(
        <MyGallery/>
    )
}
export default Gallery;