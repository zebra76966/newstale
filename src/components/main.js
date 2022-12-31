import React from 'react';
import {useEffect, useState} from 'react';
import Axios from 'axios';
import Card from './newscard'
import Header from './header'
import Footer from './footer'
import ReactPaginate from 'react-paginate'
const Main=()=>{

  const [localDat, setLocaldat] = useState(localStorage.getItem('likes')!==null?JSON.parse(localStorage.getItem('likes')):[]);
// Alternate methods in *components/alt.md* =====>

  useEffect(()=>{
    localStorage.setItem('likes',JSON.stringify(localDat))
  },[localDat])



  const [datas,setData] = useState([]);
  const [isLoad,setIsload] = useState(false);
  const [search, setSearch] = useState('');
  const [pageNum, setPageNum] = useState(0);
  const cardPerPage = 9
  const pageCurrent = cardPerPage * pageNum;
  const cardSet = datas.slice(pageCurrent, pageCurrent+cardPerPage)
  const pageCount = Math.ceil(datas.length / cardPerPage)
  const changePage = ({selected}) =>{
    setPageNum(selected);
  }



  useEffect(()=>{
    setIsload(true);
    Axios.get("https://cors-anywhere.herokuapp.com/https://ace.qtstage.io/api/v1/collections/entertainment")
    .then(response=>response)
    .then(data=>{
      setData(data.data.items)
      setIsload(false);
    })
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
              <i className="fa fa-search fs-2"></i>
            </div>
          </div>


          {(search.length===0?cardSet:datas).map(pini=>{
            if((pini.item.headline[0].toLowerCase()).includes(search)){

              return <Card ls={localDat}
              onClick={(val)=>setLocaldat(ini=>[...ini,val])}
              onDelete={(val)=>{setLocaldat(ini=>ini.filter(function(e){return e!=pini.id}))}}
              res={pini}/>
            }
          })
          }
          {/*Search-bar code End ======>*/}

        </div>

        <div className="col-12 py-5">
            <ReactPaginate
            previousLabel = {"Previous"}
            nextLabel = {"Next"}
            pageCount = {pageCount}
            onPageChange = {changePage}
            containerClassName = {"pagination justify-content-center"}
            previousLinkClassName = {"page-link p-3 px-md-4"}
            nextLinkClassName = {"page-link p-3 px-md-4"}
            activeLinkClassName = {"page-item active text-light bg-warning border-warning"}
            disabledClassName = {"page-item disabled"}
            pageLinkClassName = {"page-link text-warning p-3 px-md-4"}
            activeClassName = {"page-items"}
            />
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
