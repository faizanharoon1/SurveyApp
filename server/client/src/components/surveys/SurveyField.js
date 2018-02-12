// SurveyField contains logic to render a single label and text input
import React  from 'react';



export default ({input,label,meta:{error,touched}})=>{
    return(//this ...input passes all properties to input 
        <div>
            <label>{label}</label>
       <input {...input} style={{marginBottom:'4px'}}/> 
       <div className="red-text" style={{marginBottom:'20px'}}> {touched && error} </div>
      
         </div>
    );
};