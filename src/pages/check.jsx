import { textAlign } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react'
import CopyRightFooter from '../components/CopyRightFooter';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import find from '../images/find2.svg';
import {db,auth} from '../firebase-config'
import { ToastContainer, toast } from 'react-toastify';
import { createSearchParams, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import { getAuth } from "firebase/auth";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
const Check = () => {
  //const user = JSON.parse(localStorage.getItem("user"));
    const [search,setSearch] =  useState("");
    const navigate = useNavigate();
    const { t } = useTranslation()
    const currentLanguageCode = cookies.get('i18next') || 'en'
   // const user = getAuth().currentUser;
  
    const searchFunc = async (e) => {
       // e.preventDefault()
  
        try {
          //     const res = await axios.post("http://localhost:5000/predict ", 
          const res = await axios.post("http://ec2-13-50-106-253.eu-north-1.compute.amazonaws.com:8080/predict", 
           {
            text:search,
          });
         /* setOpen(true);
          setSearch(parseInt(Number(res.data.prediction)*100));*/
          navigate({
            pathname: '/result',
            search: `?${createSearchParams({ pre:res.data.prediction})}`,
          });
console.log(res.data.prediction);
        } catch (err) {
    
          toast.error(t('error'), {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            }) 
                
        }
    
      
      }

  return (

      	< div className='main'>
            <Navbar/>  
<div className="homePage">

<div className="container-fluid"style={{margin:"0",padding:"0",overflow:"hidden"}}>

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
  borderRadius:currentLanguageCode=="en" ?" 0 0 5% 40%":" 0 0  40% 5%", 
   height:"90vh",
  padding:  "50px"
}}>
 
<div className="searchform">
<h3>{t("checkhere")}           
</h3>
<div className="parent-area">
<textarea className="area-style form-control" onChange={(e) =>setSearch(e.target.value) }  placeholder={t("check")}>
</textarea>
</div>
   
          <button className="btn-style"  onClick={searchFunc}>
          {t("check")}  
</button>

</div>

    </div>
    </div>
    </div>
    </div>

    </div>
    <CopyRightFooter/>
   
    </div>

  )
}

export default Check