function Footer(){
    return(
        <><footer class="p-5 ">
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
        </footer><div className="d-flex justify-content-center text-center foot2 align-items-center py-1 m-0">
                <p className="p-3">© 2021 Company, Inc. All rights reserved.</p>
            </div></>  
    )
}
function  MyFooter(){
    return(
        <Footer/>
    )
}
export default MyFooter;