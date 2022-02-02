import React from 'react';
import "./header.css";
import Gerb from "../../assets/images/gerb.png";

export default function Header() {
  return (
  <div className='header'>
     <h1>O'zbekiston
         <br />
          Respublikasi</h1>
     <img src={Gerb} alt="gerb_logo" />
    <h1>Moliya vazirligi
        <br />
         yagona reestri</h1>
  </div>
  )
}
