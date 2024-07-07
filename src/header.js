import "./hero.css"
function Hello(){
    return(
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
    )
}
function Helloboy(){
    return(
        <Hello/>
    )
}
export default Helloboy;