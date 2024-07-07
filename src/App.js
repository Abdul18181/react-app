
import Helloboy from './header'
import MyHero  from './hero'
import Gallery from './gallery'
import MyAbout from './about'
import MyContact from './contact'
import MyFooter from './footer'
import './gallery.css'

import './header.css'
import "./hero.css"
// export default App;
function Portfolio() {
  return (
  <>      
  <Helloboy/>
<MyHero/>
<Gallery/>
<MyAbout/>
<MyContact/>
<MyFooter/>

</>


);

}

export default function MyApp() {
  return (
    <div>
      <Portfolio />
    </div>
  );
}
