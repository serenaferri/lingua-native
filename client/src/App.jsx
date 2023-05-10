import React, { useState } from "react";
import "./App.css";
import ArtSearch from "./components/ArtSearch";
import Art from "./Art"; 


function App() {
  const [isActive, setIsActive] = useState(true);
  const [projects, setProjects] = useState(Art);
  const [flip, setFlip] = useState(false);

  

  const handleImageClick = (isActive) => {
    setIsActive(isActive);
  };

  return (
    <div>
      <h1>Art Search</h1>
     {Art.map( item => (
       <img 
        className="image-grid"
        src={item.url}
        alt=""
        height={400}
        width={400}
        />
       
        
     )
      )}
      </div>
   );
 }
 
   export default App;
  

  
  


 