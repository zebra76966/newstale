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
        <div className="row d-flex align-items-center justify-content-center p-5" style={{height:'80vh'}}>
          <div className="col-lg-8 col-md-12 herotxt text-center text-lg-start">
            <h1 className="display-1 text-light"><strong>Facts</strong></h1>
            <h1 className="display-1 text-light"><strong>Real</strong></h1>
            <h1 className="display-1 text-light"><strong>True.</strong></h1>
            <p className="lead text-light">
              Not Your Average News platform
              NewsTale delivers you the truth. For people by people.
            </p>
            <a href="#trend" className="btn align-items-center mx-auto mx-lg-0 p-3 fw-bold" style={{background:'#FFB231',color:'white',letterSpacing:'1px'}}>
              Start Now
              <i className="fa-solid fa-arrow-right ps-2"></i>
            </a>
          </div>
          <div className="col-lg-4 d-lg-block d-none">
            <form className="bg-light p-5 rounded" autoComplete="on">
            <h5 className="fs-5 fw-bold pb-3 text-center">SignUp for our <span style={{color:"#FFB231"}}>Newsletter!</span></h5>
            <hr/>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" autoComplete="off"/>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <button type="button" className="btn w-100 p-2 fw-bold" style={{background:'#FC5055',color:'white',letterSpacing:'3px'}}>Submit</button>
            </form>
          </div>
        </div>

{/* HERO CONTENT END ====>*/}

      </header>



  </>
  );
}

export default Header;
