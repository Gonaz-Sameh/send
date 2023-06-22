import React, { useEffect, useState } from 'react'
import logo from '../images/logo.png';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {db,auth} from '../firebase-config'
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import {signOut } from "firebase/auth";
import LogoutIcon from '@mui/icons-material/Logout';

import i18next from 'i18next'

import classNames from 'classnames'

import egypt from '../images/egypt.png';
import us from '../images/us.webp';
import { useLocation } from 'react-router-dom';



const languages = [
 
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
    flag:us
  },
  {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    country_code: 'sa',
    flag:egypt
  },
]
const GlobeIcon = ({ width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    className="bi bi-globe"
    viewBox="0 0 16 16"
  >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
  </svg>
)
const Navbar = () => {
  const location = useLocation(); // Get the current location object

  // Set the active state based on whether the current path matches the nav item's path
  const isActive = (path) => location.pathname === path;
 
  const navigate = useNavigate();
  const { t } = useTranslation()
  const currentLanguageCode = cookies.get('i18next') || 'en'
    const handleLogout = () => {
      signOut(auth)
        .then(() => {
          navigate("/login");
          localStorage.removeItem("user");  
          toast.success("Success Log Out", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            }) 
        })
        .catch((error) => {
          console.log(error);
          toast.error(error, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            }) 
        });
    };
    const [scrolled, setScrolled] = useState(false);
    const CurrentUser = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
  console.log(CurrentUser);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
   
    <nav class={`navbar navbar-expand-lg bg-body-tertiary nav-style ${location.pathname == "/articlesOfCategory" || scrolled ? 'navbar-scrolled' : ''}`}>
  <div class="container">
    { location.pathname == "/articlesOfCategory" || (scrolled) ?  <svg id="Group_136" data-name="Group 136" xmlns="http://www.w3.org/2000/svg" width="81" height="66" viewBox="0 0 81 66">
  <path id="Path_438" data-name="Path 438" d="M64.51,23.738A23.7,23.7,0,1,1,40.807,0,23.721,23.721,0,0,1,64.51,23.738Zm-45.315,0A21.612,21.612,0,1,0,40.807,2.094,21.628,21.628,0,0,0,19.2,23.738Z" fill="#fff"/>
  <path id="Path_439" data-name="Path 439" d="M26.686,29.838l.455-10.805a4.236,4.236,0,0,0-1.488-2.9l.083-.5a4.9,4.9,0,0,1,.537-.124q.289-.083.62-.166.372-.083.827-.166t.951-.166a20.235,20.235,0,0,1,2.15-.124,2.19,2.19,0,0,1,1.736.828,3.9,3.9,0,0,1,.744,2.649,32.679,32.679,0,0,1-.579,5.134,34.073,34.073,0,0,0-.537,4.968q0,1.615.785,1.615a4.182,4.182,0,0,0,2.811-1.615q.041-.662.537-4.223a42.3,42.3,0,0,0,.5-5.175,13.436,13.436,0,0,0-.248-2.774,16.4,16.4,0,0,1,5.7-1.2q.537.373.537,2.443a32.085,32.085,0,0,1-.7,5.672,30.959,30.959,0,0,0-.7,5.258q0,1.615.661,1.615,1.571,0,3.431-2.318a8.043,8.043,0,0,0,1.984-3.933l-2.811-3.146a9.31,9.31,0,0,1,.868-3.229,7.1,7.1,0,0,1,1.323-2.029l.579-.538a3.547,3.547,0,0,1,2.687.952,3.132,3.132,0,0,1,.909,2.236,17.105,17.105,0,0,1-1.612,6.914,18.927,18.927,0,0,1-4.34,6.21,8.191,8.191,0,0,1-5.539,2.525,3.74,3.74,0,0,1-2.4-.787,4.075,4.075,0,0,1-1.281-2.111q-2.894,2.9-5.622,2.9a3.189,3.189,0,0,1-2.687-1.118A4.5,4.5,0,0,1,26.686,29.838Z" fill="#fff"/>
  <path id="Path_440" data-name="Path 440" d="M55.127,33.73a2.854,2.854,0,0,1-2.232-.869,3.587,3.587,0,0,1,.289-4.8,3.45,3.45,0,0,1,2.522-1.076,2.907,2.907,0,0,1,2.274.869,3.174,3.174,0,0,1,.785,2.277,3.488,3.488,0,0,1-1.116,2.525A3.45,3.45,0,0,1,55.127,33.73Z" fill="#fff"/>
  <path id="Path_441" data-name="Path 441" d="M18.14,51.3,14.266,65.8H12.572L9.7,56.039q-.129-.417-.248-.833t-.208-.8q-.1-.387-.168-.675l-.089-.446q-.02.149-.079.437t-.139.665q-.079.377-.2.8t-.238.863L5.538,65.8H3.844L0,51.3H1.754l2.328,9.1q.119.456.218.9t.188.853q.089.417.159.814t.129.774q.05-.387.129-.8t.168-.863q.1-.437.208-.883t.248-.893l2.606-9H9.867l2.714,9.068q.139.466.258.923t.208.893q.1.427.168.824t.139.734q.069-.486.168-1.022t.228-1.121q.139-.585.3-1.21L16.376,51.3Z" fill="#fff"/>
  <path id="Path_442" data-name="Path 442" d="M24.361,54.729a4.418,4.418,0,0,1,2.378.615,3.981,3.981,0,0,1,1.516,1.726,5.935,5.935,0,0,1,.525,2.58v1.022h-7.5a4.268,4.268,0,0,0,.951,2.917,3.349,3.349,0,0,0,2.6,1A7.921,7.921,0,0,0,26.65,64.4a10.049,10.049,0,0,0,1.645-.556V65.3a8,8,0,0,1-1.635.536,9.356,9.356,0,0,1-1.9.169,5.642,5.642,0,0,1-2.734-.635,4.438,4.438,0,0,1-1.8-1.885,6.528,6.528,0,0,1-.644-3.036,7.259,7.259,0,0,1,.585-3.036,4.376,4.376,0,0,1,4.2-2.679Zm-.02,1.349a2.7,2.7,0,0,0-2.1.863,4.065,4.065,0,0,0-.931,2.411h5.746a4.653,4.653,0,0,0-.307-1.707,2.4,2.4,0,0,0-.882-1.151A2.6,2.6,0,0,0,24.342,56.078Z" fill="#fff"/>
  <path id="Path_443" data-name="Path 443" d="M43.145,65.8H41.2l-7.9-12.184h-.079q.03.486.069,1.111t.059,1.32q.03.695.03,1.419V65.8H31.821V51.3h1.932L41.619,63.44h.069q-.02-.347-.049-.982t-.059-1.379q-.02-.744-.02-1.379V51.3h1.585Z" fill="#fff"/>
  <path id="Path_444" data-name="Path 444" d="M51.031,54.729a4.419,4.419,0,0,1,2.378.615,3.981,3.981,0,0,1,1.516,1.726,5.935,5.935,0,0,1,.525,2.58v1.022h-7.5a4.267,4.267,0,0,0,.951,2.917,3.349,3.349,0,0,0,2.6,1A7.92,7.92,0,0,0,53.32,64.4a10.046,10.046,0,0,0,1.645-.556V65.3a8,8,0,0,1-1.635.536,9.355,9.355,0,0,1-1.9.169,5.642,5.642,0,0,1-2.734-.635,4.439,4.439,0,0,1-1.8-1.885,6.528,6.528,0,0,1-.644-3.036,7.257,7.257,0,0,1,.584-3.036,4.376,4.376,0,0,1,4.2-2.679Zm-.02,1.349a2.7,2.7,0,0,0-2.1.863,4.066,4.066,0,0,0-.931,2.411h5.746a4.655,4.655,0,0,0-.307-1.707,2.4,2.4,0,0,0-.882-1.151A2.6,2.6,0,0,0,51.011,56.078Z" fill="#fff"/>
  <path id="Path_445" data-name="Path 445" d="M67.081,65.782l-1.932-6.33q-.129-.407-.248-.794t-.208-.754q-.089-.367-.168-.675l-.119-.546h-.069q-.04.228-.109.546t-.168.675q-.089.367-.2.774t-.248.8l-2.021,6.3H59.739L56.748,54.908h1.7l1.565,6q.159.6.3,1.181t.248,1.091q.109.506.159.883H60.8q.06-.248.129-.6t.168-.734q.1-.4.208-.784t.218-.744l2-6.3H65.3l1.932,6.29q.149.476.287.992t.267,1a7.706,7.706,0,0,1,.168.853h.079q.04-.337.149-.833t.248-1.091q.148-.6.307-1.21l1.585-6h1.674l-3,10.874Z" fill="#fff"/>
  <path id="Path_446" data-name="Path 446" d="M81,62.825a2.884,2.884,0,0,1-.525,1.756,3.108,3.108,0,0,1-1.486,1.062,6.608,6.608,0,0,1-2.3.357,9.5,9.5,0,0,1-1.971-.179,5.7,5.7,0,0,1-1.456-.506V63.8a9.775,9.775,0,0,0,1.585.6,6.709,6.709,0,0,0,1.882.268,3.555,3.555,0,0,0,2.041-.456,1.449,1.449,0,0,0,.634-1.24,1.256,1.256,0,0,0-.258-.784,2.412,2.412,0,0,0-.842-.665,12.488,12.488,0,0,0-1.645-.714,18.976,18.976,0,0,1-1.8-.784,3.365,3.365,0,0,1-1.169-.962,2.459,2.459,0,0,1-.406-1.468,2.382,2.382,0,0,1,1.11-2.113,5.211,5.211,0,0,1,2.933-.744,8.067,8.067,0,0,1,1.833.2,8.436,8.436,0,0,1,1.6.516l-.555,1.32a10.173,10.173,0,0,0-1.437-.486,6.152,6.152,0,0,0-1.555-.2,3.371,3.371,0,0,0-1.754.377,1.162,1.162,0,0,0-.6,1.032,1.245,1.245,0,0,0,.277.833,2.723,2.723,0,0,0,.911.615q.624.288,1.645.675a13.281,13.281,0,0,1,1.763.784,3.145,3.145,0,0,1,1.139.972A2.441,2.441,0,0,1,81,62.825Z" fill="#fff"/>
</svg>:<a class="navbar-brand" href="#"><img src={logo} alt="logo" /></a> 
}
    <button class="navbar-toggler" style={{border:"0"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class={currentLanguageCode =="ar" ? "navbar-nav me-auto mb-2 mb-lg-0 menu-ul":"navbar-nav ms-auto mb-2 mb-lg-0 menu-ul"} >
        <li className={isActive('/') ? 'active nav-item' : 'nav-item'}>
          <Link class="nav-link " aria-current="page" to={"/"}> {t("Home")}</Link>
        </li>
        <li className={isActive('/check') ? 'active nav-item' : 'nav-item'}>
          <Link class="nav-link " aria-current="page" to={"/check"}> {t("check")}</Link>
        </li>
        {/*<li class="nav-item">
          <a class="nav-link" href="#"> {t("FakeNews")}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> {t("NewsThatInterested")}</a>
        </li>*/}
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           {CurrentUser.email.split("@")[0]} <AccountCircleOutlinedIcon style={{fontSize:"30px"}}/>
          </a>
          <ul class="dropdown-menu"style={{textAlign:"center"}}>
            <li><button onClick={handleLogout} className='btn btn-danger'><LogoutIcon style={{fontSize:"17px"}} />  {t("Logout")}</button></li>

          </ul>
        </li>
        <li class="nav-item dropdown">
<a class="nav-link dropdown-toggle"  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
<GlobeIcon className='iconGlob'  /> {currentLanguageCode =="ar" ? "اللغة" : " Language " }
          </a>
<ul className="dropdown-menu">

{languages.map(({ code, name, country_code ,flag}) => (
<li key={country_code}>
  <a
    href=""
    className={classNames('dropdown-item', {
      disabled: currentLanguageCode === code,
    })}
    onClick={() => {
      i18next.changeLanguage(code)
    }}
  >
    <span
      
      style={{ 
        opacity: currentLanguageCode === code ? 0.5 : 1,
      }}
    ></span>
    <img src={flag} alt="flag" width="20px" />  <span style={{color:"black",fontSize:"14px",opacity: currentLanguageCode === code ? 0.5 : 1}}>{name}</span>
  </a>
</li>
))}
</ul>
    </li>
 
 
      </ul>
   
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
