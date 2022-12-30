import React from 'react';
import Card from './newscard'
import Header from './header'
import Footer from './footer'
const Main=()=>{

  return(
    <>

    <Header/>
    <div id="trend" className="bg-light rounded" style={{background: "linear-gradient(0deg, rgba(0,6,20,1) 0%, rgba(0,0,0,1) 100%)"}}>
      <div className="container">
        <div className="row">
        <h3 className="display-4 fw-bold py-5 text-light text-center">Trending<span style={{color:"#FFB231"}}> Stories</span></h3>

        <Card/>

        </div>
      </div>
    </div>
    <Footer/>

    <a className="btn btn-lg btn-warning" href="#top"
      style={{position:"fixed",bottom:"5%",right:"3%",boxShadow:"0 0 5px rgba(0,0,0,0.5)"}}>
      <i className="fa-solid fa-angle-up"></i>
    </a>

    </>
  );
}

export default Main;
