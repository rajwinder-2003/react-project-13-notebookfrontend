import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/notes/noteContext';
const Noteitem = (props) => {
  const navigate = useNavigate();
    const {note,updateNote} = props;
    const context = useContext(noteContext);
    const {deleteNote,getoneNote} = context;
    const Event = (e) =>{
      e.preventDefault();
        getoneNote(note._id);
        if(localStorage.getItem('detail')){
          navigate("/fetch");
        }
        else{
          
        }
         
      
       
    }
  return (
    <div id="item" className='mt-5'>
      <div className='col-10 mx-auto mt-5 d-block w-100'>
        <div className="card my-3">
          <div className="card-body">
            <h3 className="card-title me-5 mt-3"> Title: <br /> <h4>{note.title}</h4></h3>
            <h5 className="card-title mt-3"> SubTitle: <br /> <h6>{note.subtitle}</h6></h5>
              
                <i className="fa fa-thin fa fa-trash-can mx-2" key={note._id} onClick={()=>{deleteNote(note._id); props.ShowAlert("Deleted Note Successfully","success");}}></i>
                <i className="fa fa-thin fa fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
                <button type="Submit" onClick={Event} className="btn btn-outline-info mx-2">Read more</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Noteitem;