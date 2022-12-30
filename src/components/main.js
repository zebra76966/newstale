import React from 'react';
import {useEffect, useState} from 'react';
import Axios from 'axios';
import Card from './newscard'
import Header from './header'
import Footer from './footer'

const Main=()=>{

  const [datas,setData] = useState([]);
  const [isLoad,setIsload] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(()=>{
    setIsload(true);
    Axios.get("https://cors-anywhere.herokuapp.com/https://ace.qtstage.io/api/v1/collections/entertainment")
    .then(response=>response)
    .then(data=>{
      setData(data.data.items)
      setIsload(false);
    })
    console.log(datas)
  },[])



  return(
    <>

    <Header/>
    <div id="trend" className="bg-light rounded" style={{background: "linear-gradient(0deg, rgba(0,6,20,1) 0%, rgba(0,0,0,1) 100%)"}}>
      <div className="container">
        <div className="row">
        <h3 className="display-4 fw-bold py-5 text-light text-center">Trending<span style={{color:"#FFB231"}}> Stories</span></h3>
        {isLoad&&<span className="col-12 my-5 py-5">
          <div className="loader mx-auto"></div>
        </span>}

{/*Search-bar code Starts ======>*/}
        <div className="col-md-12 pb-5">
          <div className="search">

            <input type="text" className="form-control" placeholder="Search Stories"
              onChange={(e)=>setSearch(e.target.value.toLowerCase())}/>
            <i class="fa fa-search fs-2"></i>
          </div>
        </div>

        {datas.map(pini=>{
          if((pini.item.headline[0].toLowerCase()).includes(search)){

            return <Card res={pini}/>
          }
        })
        }
{/*Search-bar code End ======>*/}

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
