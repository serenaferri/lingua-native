import { useState } from "react";
import App from "../App.css"; 

function ArtSearch({art}) {
  const [isActive, setIsActive] = useState(false);
  
  function handleShow() {
     setIsActive(!isActive)
  }
  return (
   <div>
    <h1> Art Search </h1>
        
    {art.map( item => (
     <li key={item.id} >
      <div className="par">
      <img 
       className="image-grid"
       src={item.url}
       alt=""
       />
       <button className="btn1" onClick={handleShow}>Check description</button>
        
       { isActive &&  <div> <p> 
         <b className="title">{item.title}</b>
       </p>
       <p>
       <b className="date"> ~{item.date}~</b>
       </p>
       <p className="description">
        {item.description}
       </p> </div> }
       </div>
     </li> 
    ))}
     </div>
  
  );
} 












export default ArtSearch; 












//export default function ArtSearch() {
  //const [message, setMessage] = useState({

  //});




//function handleInputChange() {

//}

//return (
 // <div>
   // <h1> </h1>
    //<input type="text" value={message} onChange={handleInputChange}/>
  //</div>
//)
//}