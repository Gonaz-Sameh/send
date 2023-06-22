import { textAlign } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react'
import CopyRightFooter from '../components/CopyRightFooter';
import Navbar from '../components/Navbar';
import find from '../images/find.svg';
import {db,auth} from '../firebase-config'
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PublicIcon from '@mui/icons-material/Public';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import BiotechIcon from '@mui/icons-material/Biotech';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation()
  const currentLanguageCode = cookies.get('i18next') || 'en'
 // const user = JSON.parse(localStorage.getItem("user"));
  return (

      	< div className='main'>
            <Navbar/>  
<div className="homePage">

<div className="container-fluid" style={{margin:"0",padding:"0",overflow:"hidden"}}>

  <div className="row ">
  <div className="col-md-4 ">
      <div className="RightSide">
        <div className='parent-find-img'>
<img src={find} alt="logo" />
</div>

    
    </div>
    </div>
  <div className="col-md-8 "> 
    <div className="leftSide" style={ {
  position:"relative",
  backgroundColor: "#A13939",
  borderRadius:currentLanguageCode=="en" ?" 0 0 0 40%":" 0 0  40% 0", 
   height:"90vh",
  padding:  "50px"
}}>
     
 <h1>{t("iwant")}          
</h1>

<Link type='submit' to={"/check"} className='btn-style'>{t("letsGo")}</Link>

    </div>
    </div>
    </div>
    </div>

    </div>
    <div className="PopularSec">
<div className="container">
  <div className="headpopular">
    <h1>{t("popularNews")}</h1>
    {/*<p>{t("lorem")}{t("lorem")}{t("lorem")}</p>*/}
  </div>
  <div className="row ">
  <div className="col-md-4 "> 
    <div className="onePop">
      <div>
        <PublicIcon className='iconpop'/>
      </div>
    <h3> {t("PublicNews")}</h3>
{/*<p>{t("lorem")}{t("lorem")}{t("lorem")}</p>*/}
<Link to={"/articlesOfCategory?category=general"} className=" mt-2 btn btn-dark">{t("FindMore")}</Link>
    </div>
    </div>
    <div className="col-md-4 "> 
    <div className="onePop">
    <div>
        <BiotechIcon className='iconpop'/>
      </div>


<h3> {t("SocialNews")}</h3>

<Link to={"/articlesOfCategory?category=science"} className="  mt-2 btn btn-dark">{t("FindMore")}</Link>
    </div>
    </div>
    <div className="col-md-4 "> 
    <div className="onePop">
    <div>
        <BusinessCenterIcon className='iconpop'/>
      </div>
    <h3>{t("CulturalNews")}</h3>

<Link to={"/articlesOfCategory?category=business"} className=" mt-2 btn btn-dark">{t("FindMore")}</Link>
    </div>
    </div>
    <div className="col-md-4 "> 
    <div className="onePop">
    <div>
        <SportsScoreIcon className='iconpop'/>
      </div>
    <h3>{t("ReligiousNews")} </h3>

<Link to={"/articlesOfCategory?category=sports"} className=" mt-2 btn btn-dark">{t("FindMore")}</Link>
    </div>
    </div>
    <div className="col-md-4 "> 
    <div className="onePop">
    <div>
        <MonitorHeartIcon className='iconpop'/>
      </div>

    <h3>{t("EconomicNews")}</h3>

<Link to={"/articlesOfCategory?category=health"} className=" mt-2 btn btn-dark">{t("FindMore")}</Link>
    </div>
    </div>
    <div className="col-md-4 "> 
    <div className="onePop">
    <div>
        <LaptopChromebookIcon className='iconpop'/>
      </div>

    <h3>{t("PoliticalNews")} </h3>
<Link to={"/articlesOfCategory?category=technology"} className=" mt-2 btn btn-dark">{t("FindMore")}</Link>
    </div>
    </div>
    </div>
    </div>
    </div>
    <CopyRightFooter/>
    </div>

  )
}

export default Home