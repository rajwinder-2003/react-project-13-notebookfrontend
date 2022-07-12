import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import { useState } from 'react';
const AddNote = (props) => {
    const context = useContext(noteContext);
    const {addNote} = context;
    const [note,setNote]=useState({title:"", subtitle:"", description:"", tag:""});
    const handelClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.subtitle, note.description, note.tag);
        setNote({title:"", subtitle:"", description:"", tag:""})
        props.ShowAlert("Added Note Successfully","success");
    }
    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
  return (
      <div id="addnote">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto mt-5">
                        <div className="col-6 mx-auto d-block w-100 mt-5">
            <div className="my-3">
                <h1 className='ms-3'>Add a Note</h1>
                <form className='my-3'>
                    <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange} value={note.title} minLength={3} required />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="subtitle" className="form-label">SubTitle</label>
                    <input type="text" className="form-control" id="subtitle" name='subtitle' aria-describedby="emailHelp" onChange={onChange} value={note.subtitle} minLength={3} required />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name='description' onChange={onChange} value={note.description} minLength={5} required />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name='tag' onChange={onChange} value={note.tag} />
                    </div>
                    <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" disabled={note.title.length<3 || note.subtitle.length<3 || note.description.length<5} className="btn btn-primary" onClick={handelClick}>AddNote</button>
                </form>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>     
  )
}

export default AddNote