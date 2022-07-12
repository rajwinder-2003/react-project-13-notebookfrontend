import React, { useContext,useEffect,useRef,useState } from 'react'
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
const Notes = (props) => {
    const context = useContext(noteContext);
    const navigate = useNavigate();
    const {notes,getNotes,editNote}= context;
    useEffect(() => {
        if(localStorage.getItem('token')){
            getNotes()
        }
        else{
            navigate("/login")
        }
        // eslint-disable-next-line
    },[]);
    const ref = useRef(null)
    const refCloss = useRef(null)
    const [note,setNote]=useState({id:"", etitle:"", esubtitle:"", edescription:"", etag:""});
    const updateNote = (currentNote)=>{
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, esubtitle: currentNote.subtitle, edescription: currentNote.description, etag: currentNote.tag})
    }
    const handelClick = (e)=>{
        editNote(note.id, note.etitle, note.esubtitle, note.edescription, note.etag)
        refCloss.current.click();
        props.ShowAlert("Updated Note Successfully","success");
        
    }
    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
  return (
    <>
        <AddNote ShowAlert={props.ShowAlert}/>
        {/* <!-- Button trigger modal --> */}
            <button type="button" ref ={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
            </button>
        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"  aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            {/* add note form */}
            <div className="modal-body">
            <form className='my-3'>
                    <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" value={note.etitle} onChange={onChange} minLength={3} required />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="subtitle" className="form-label">SubTitle</label>
                    <input type="text" className="form-control" id="esubtitle" name='esubtitle' aria-describedby="emailHelp" value={note.esubtitle} onChange={onChange} minLength={3} required />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={onChange} minLength={5} required />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="etag" name='etag'value={note.etag} onChange={onChange}/>
                    </div>
                    <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" ref={refCloss} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" onClick={handelClick} disabled={note.etitle.length<3 ||note.esubtitle.length<3 || note.edescription.length<5} className="btn btn-primary">Update Note</button>
            </div>
            </div>
        </div>
        </div>
        <div>
            <div className='container-fluid mt-5'>
                <div className="row">
                    <div className="col-10 mx-auto">
                        
                    <h2 className='ms-2'>Your Notes</h2>
                        <div className='my-2'>
                            {notes.length===0 && 'No Any Notes'}
                        </div>
                    </div>
                      
                </div>        
            </div>            
            {notes.map((note)=>{
            return(
                <div id="notes">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                
                                <Noteitem key={note._id} updateNote={updateNote} ShowAlert={props.ShowAlert} note={note}/>
                                
                            </div>
                        </div>
                    </div>
                </div>
            )})}
        </div>
  </>
  )
}

export default Notes;