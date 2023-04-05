import React from 'react';
import loadingImage from '../../assets/giphy.gif';
import s from '../Users/Users.module.css';

function Preloader() {
  return <img className={`${s.loadingImg}`} src={loadingImage} alt="loading" />;
}

export default Preloader;
