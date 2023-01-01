import {React} from 'react';
import '../index.css';


const Header=()=>{
  return(
    <>
      <header className="hero p-3" id="top">
      <div className="landhero"></div>
        <div className="bghero"></div>

{/* NAVABAR START */}

        <nav className="navbar navbar-expand-lg bg-light p-3 rounded">
          <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center gap-3" href="#">NewsTale <i className="fa-regular fa-newspaper fs-2"></i></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav text-danger">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#trend">Trending</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#foot">About us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#foot">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
{/* NAVABAR END ===>*/}

{/* HERO CONTENT START ===>*/}
        <div className="row d-flex align-items-center justify-content-center p-lg-5 p-2" style={{height:'80vh'}}>
          <div className="col-lg-7 col-md-12 herotxt text-center text-lg-start">
            <h1 className="display-1 text-light"><strong>Facts</strong></h1>
            <h1 className="display-1 text-light"><strong>Real</strong></h1>
            <h1 className="display-1 text-light"><strong>True.</strong></h1>
            <p className="lead text-light">
              Not Your Average News platform
              NewsTale delivers you the truth. For people by people.
            </p>
            <div className="d-lg-block d-none">
              <a href="#trend" className="btn align-items-center mx-auto mx-lg-0 p-3 fw-bold" style={{background:'#FFB231',color:'white',letterSpacing:'1px'}}>
                Start Now
                <i className="fa-solid fa-arrow-right ps-2"></i>
              </a>
            </div>  
          </div>
          <div className="col-lg-5 col-12">
          <h4 className="fs-4 text-lg-start text-light text-lg-dark pb-3  text-center fw-bold">SignUp for you <span className="bg-dark p-2 text-warning">NewsLetter!</span></h4>
            <form className="bg-none rounded d-flex" autoComplete="on">
            <hr/>
              <input className="form-control border border-3 rounded-0 rounded-start p-3" type="email" placeholder="Your Email Address" aria-label="email"/>
              <button type="button" className="btn px-lg-4 rounded-end border rounded-0 rounded-end fw-bold" style={{background:'#FC5055',color:'white',letterSpacing:'3px'}}>Submit</button>
            </form>
          </div>
        </div>

{/* HERO CONTENT END ====>*/}

      </header>



  </>
  );
}

export default Header;
