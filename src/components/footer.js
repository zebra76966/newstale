import {React} from 'react';
import '../index.css';

const Footer=()=>{
  return (
    <footer id="foot">
      <div className="row">
        <h2 className="fs-2 fw-bold text-light opacity-75 py-5 text-center">NewsTale <i className="fa-regular fa-newspaper"></i></h2>
        <hr style={{border:"3px solid rgba(255,255,255,0.5)"}}/>
        <div className="col-12 gap-3 d-flex justify-content-center p-5 mx-auto">
          <a className="btn btn-outline-warning fs-4 rounded" href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a className="btn btn-outline-warning fs-4 rounded" href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a className="btn btn-outline-warning fs-4 rounded" href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a className="btn btn-outline-warning fs-4 rounded" href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a className="btn btn-outline-warning fs-4 rounded" href="#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
