import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import Check from './pages/check';
import Result from './pages/result';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import i18next from 'i18next'
import classNames from 'classnames'
import { useEffect, useState } from 'react';
import {onAuthStateChanged} from "firebase/auth";
import {db,auth} from './firebase-config'
import { getAuth } from "firebase/auth";
import ArticlesOfCategory from './pages/articlesOfCategory';

const languages = [

  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
    country_code: 'sa',
  },
]
function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const { t } = useTranslation()
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  //const [user, setUser] = useState(null);
  //const [count, setCount] = useState(0);
  useEffect(() => {
   
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])


  useEffect(() => {
    /*getAuth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        // User is signed in
        setUser(currentUser);
        console.log(currentUser);
      } else {
       setCount(count+1);
        // User is signed out
        setUser(null);
        console.log(null);
      }
    });*/
 

  }, []);
  return (
    <div>
           <Routes> 
       <Route path="/login"   element={ !user ? <Login/> : <Navigate to="/" replace/>   }/>
       <Route path="/signup"   element={ !user ? <Signup/> : <Navigate to="/" replace/> }/>
     <Route  path="/check"   element={user ? <Check/>: <Navigate to="/login" replace/> }/>
     <Route  path="/"   element={user ? <Home/>: <Navigate to="/login" replace/> }/>
     <Route path="/result"   element={ user ? <Result/> : <Navigate to="/login" replace/>   }/>
     <Route  path="/articlesOfCategory"   element={user ? <ArticlesOfCategory/>: <Navigate to="/login" replace/> }/>
 
       </Routes> 

<ToastContainer />
    </div>
  );
}

export default App;
