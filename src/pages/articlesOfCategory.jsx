import axios from 'axios'
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import CopyRightFooter from '../components/CopyRightFooter';
import Navbar from '../components/Navbar';

const ArticlesOfCategory = () => {
    const [allResponse,setAllResponse] =  useState({});
    const [articles,setArticles] =  useState([]);
    const navigate = useNavigate();
    const { t } = useTranslation()
    const currentLanguageCode = Cookies.get('i18next') || 'en'
    const { search} = useLocation();
    const category = new URLSearchParams(search).get("category");
    useEffect(()=>{

const  makeRequest = async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=19fd7e338d1747d7a6f9e870284d0e6a&category=${category}`
 try {
    let res = await axios.get(url)
    setAllResponse(res.data)
      setArticles(res.data.articles)
console.log(res.data.articles);
                } catch(err){
console.log(err);
                }
             

       
            }
            
            makeRequest()    
        },[])
  return (
    < div className='main' >
      
    <Navbar colorA={"#a13939"}/>  
   <div style={{height:"96px"}}></div>
    <div className="homePage" style={{backgroundColor:"#white"}}>
          <div className="container" >
    <div className="row"style={{padding:"30px 6px 20px 6px",backgroundColor:"white",borderRadius:"5px"}}>
	{articles.length>0? articles.map(post=>
    <a href={post.url} key={post.id} className="col-md-3 oneArt" style={{direction:"ltr"}}>
      <div className="card  mb-5"style={{border:"1px solid #DCDCDC",borderRadius:"5px"}}>
  
    <img width="100%"height="200px"style={{borderRadius:"5px"}}src={post.urlToImage} alt="image post" className="card-img-top" />
    <div className="card-body" style={{textAlign:"center"}}>
      <h4 className="card-title"style={{textTransform:"capitalize",margin:"6px 2px",textAlign:"center",lineHeight:"1.4"}}>
	  {post.title.length > 75 ? post.title.substring(0, 75 - 3) + " ..." : post.title}
      </h4>
 <span style={{color:"gray",fontSize:"13px"}}>{ new Date(post.publishedAt).toLocaleString()}</span>


    </div>
  
  </div>
        </a>
        ) : <h1 className='Altr'>{t("waitData")} </h1>}
        </div>
      </div>
      </div>
      <CopyRightFooter/>
   
   </div>
  )
}

export default ArticlesOfCategory
