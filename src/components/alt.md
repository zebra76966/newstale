import React from 'react';
import {useEffect, useState} from 'react';
import Axios from 'axios';

const Card = () =>{

  const [isLoad,setIsload] = useState(false);

  const [datas,setData] = useState([]);
  const [images,setImg] = useState([]);
  const [toggle, setToggle] = useState(false);

  const handle = (e)=>{
    setToggle(!toggle);
    if(localStorage.getItem(e.currentTarget.id)===null || localStorage.getItem(e.currentTarget.id)==="no"){
      localStorage.setItem(e.currentTarget.id,"ok")
    }
    else{
      localStorage.setItem(e.currentTarget.id,"no")
    }
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


  return (
    <>
    {isLoad&&<span className="col-12 my-5 py-5">
      <div className="loader mx-auto"></div>
    </span>}
    {datas.map((res)=>{

      return(
        <div className="col-12 col-md-6 col-lg-4 p-3">
          <div className="card border-0 h-100 w-100 rounded" style={{background:"rgba(255,255,255,0.5)",boxShadow:"0 0 10px rgba(0,0,0,0.5)", backdropFilter:"blur(15px)"}}>
            <img src="gy.png" className="card-img-top rounded" style={{maxHeight:"200px",objectFit:"cover"}} alt="..."/>
            <div className="card-header d-flex align-items-center justify-content-between">

              <p className="p-0 m-0">Author: <strong>{res.story["author-name"]}</strong></p>

              <img src={res.story.authors[0]["avatar-url"]}
              className="rounded-pill"
              style={{width:"40px",height:"40px",objectFit:"cover"}}/>

            </div>
            <div className="card-body mb-0">
              <h5 className="card-title">{res.item.headline[0]}</h5>
              <p className="card-text">Some dummy text to build on the card title.</p>
              <a href="#" className="btn  btn-outline-warning fw-bold">Read More...</a>
            </div>

              {localStorage.getItem(res.id)==="ok"?
              <i className="p-4 fs-3 text-danger align-self-end fa-solid fa-heart"
                id={res.id}
                onClick={handle}
              >
              </i>:
              <i className="p-4 fs-3 text-danger align-self-end fa-regular fa-heart"
                id={res.id}
                onClick={handle}>
              </i>}

          </div>
        </div>
      )


    })}

    </>
  )
}

export default Card;
