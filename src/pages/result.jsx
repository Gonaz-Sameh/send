import { textAlign } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CopyRightFooter from '../components/CopyRightFooter';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import searchImg from '../images/search.png';
import logo from '../images/logo.png';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import {db,auth} from '../firebase-config'
import { ToastContainer, toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



const Result = () => {
  
    useEffect(()=>{
      console.log(Number(pre));
    })
  //const user = JSON.parse(localStorage.getItem("user"));
    const [result,setResult] =  useState([]);
    const navigate = useNavigate();
    const { t } = useTranslation()
    const currentLanguageCode = cookies.get('i18next') || 'en'
    const { search} = useLocation();
    const pre = new URLSearchParams(search).get("pre");
  return (

      	< div className='main resultPage-min'>
            <img src={logo} alt="logo"  style={{display:"block",margin:"10px",position:"absolute"}}/>
<div className="resultPage">

<div className="container">
<div className="row d-flex justify-content-center ">

  <div className="col-md-4 ">
      <div className="centerSide">
{/*<img src={searchImg} alt="search" />*/}
<h3>{t('thisIs')}</h3>
<h1>{(Number(pre)*100)>=50 ? <span style={{color:"rgb(33,186,79)"}}>{t('true')}</span> 
 : <span style={{color:"rgb(214 87 85)"}}>{t('fake')}</span> }</h1>
        {currentLanguageCode =="en" ?  <h2>{t('accuracy')}  { (Number(pre)*100)>=50 ? (Number(pre)*100).toFixed(2) : 100 - (Number(pre)*100).toFixed(2)} %  </h2> :
         <h2 style={{direction:"ltr"}}>{ (Number(pre)*100)>=50 ? (Number(pre)*100).toFixed(2) : 100 - (Number(pre)*100).toFixed(2)} % {t('accuracy')}</h2> }
<Pie data={{
  labels: [t('fake'), t('true')],
  datasets: [
    {
      label: '# of Votes',
      data: (Number(pre)*100)>=50 ?  [100-  (Number(pre)*100).toFixed(2),  (Number(pre)*100).toFixed(2)] : [100 - (Number(pre)*100).toFixed(2), (Number(pre)*100).toFixed(2)],
      backgroundColor: [
        'rgb(214 87 85)',
        'rgb(33,186,79)',
      ],
      borderColor: [
        'rgb(214 87 85)', 
        'rgb(33,186,79)',
      ],
      borderWidth: 1,
    },
  ],
}} />
<Link type='submit' className="btn-style checkAnoterBtn" to={"/check"}>
<ArrowBackOutlinedIcon/>  {t('another')}
</Link>
<h6>{t('note')}</h6>
    </div>

    </div>
    </div>

    </div>
    <CopyRightFooter/>
    </div>
    </div>

  )
}

export default Result