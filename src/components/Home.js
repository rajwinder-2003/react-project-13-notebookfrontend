import React from 'react'
import Notes from './Notes';
export const Home = (props) => {
  const {ShowAlert}=props;
  return (
    <div id='home' className="header">
        <Notes ShowAlert={ShowAlert}/>
    </div>
    
  )
}
