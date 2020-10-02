import React from 'react';
import ReactDOM, { unstable_renderSubtreeIntoContainer } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import "./index.css";

  
  const imageUrl="https://scontent.fomr1-1.fna.fbcdn.net/v/t1.0-9/13567248_1102925276413443_3354638502919230756_n.jpg?_nc_cat=104&_nc_sid=8bfeb9&_nc_ohc=MOCilKlvUCEAX_tDeUR&_nc_ht=scontent.fomr1-1.fna&oh=22a49d61cef9c077af9080ca1541621b&oe=5F9B8E96";
  const user ={
    firstName: "Adelina",
  lastName: "Nica",
  description: "Dental Technician",
  school:"University of Medicine and Pharmacy",
  facebook: <a href ="https://www.facebook.com/"> Facebook</a>,
  instagram: <a href =" https://www.instagram.com/?hl=en"> Instagram</a>
};

ReactDOM.render(
  <div className="profile">
    <div>
    < img src ={imageUrl} alt ="profile"/>
    </div>
   <div>
    <h1  id="name"> {user.firstName + " " + user.lastName }</h1>
  </div>
  <div>
    <h2 id="info"> {user.description} </h2>
  </div>
  <div> 
    <h3 id ="school" > {user.school} </h3>
  </div>
  <div>
    <button id="facebook"> {user.facebook} </button> <button id="instagram"> {user.instagram}</button>
  </div>
  <br></br>
  <div id="contact">
    <p>Contact</p>
  </div>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
