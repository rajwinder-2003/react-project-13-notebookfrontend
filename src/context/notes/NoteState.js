import React, { useState } from "react";
import NoteContext from "./noteContext";
const NoteState =(props)=>{
    const host = "http://localhost:1000"
    const notesInitial = []
    const[notes,setNotes]= useState(notesInitial)
     //get notes
    const getNotes =async()=>{
        //Api call
        const response = await fetch(`${host}/api/notes/fetchallnotes`,{
            method: 'GET',
            headers:{"Content-Type":"application/json",
                      "auth-token": localStorage.getItem('token')
            }
        });
        const data = await response.json()
        setNotes(data)
    }
    //Add a note
    const addNote =async(title,subtitle,description,tag)=>{
            //Api call
            const response = await fetch(`${host}/api/notes/addnote`,{
                method: 'POST',
                headers:{"Content-Type":"application/json",
                          "auth-token": localStorage.getItem('token')
                },
                body: JSON.stringify({title,subtitle,description,tag})
            });
            const note =  await response.json()
            setNotes(notes.concat(note))
        
    }
    //Delete a note
    const deleteNote =async(id)=>{
        const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
            method: 'DELETE',
            headers:{"Content-Type":"application/json",
                      "auth-token": localStorage.getItem('token')
            }
        });
        const json = await response.json();
        console.log(json)
         const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes);
    }
    // get one note
    const getoneNote = async(id)=>{
        const response = await fetch(`${host}/api/notes/getone/${id}`,{
            method: 'GET',
            headers:{"Content-Type":"application/json",
                    "auth-token": localStorage.getItem('token')
            }

        });
        const json = await response.json();
            localStorage.setItem('detail',JSON.stringify(json));
    }
    //Edit a note
    const editNote =async(id,title,subtitle,description,tag)=>{
          //Api call
            const response = await fetch(`${host}/api/notes//updatenote/${id}`,{
                method: 'PUT',
                headers:{"Content-Type":"application/json",
                          "auth-token": localStorage.getItem('token')
                },
                body: JSON.stringify({title,subtitle,description,tag})
            });
            const json = await response.json();
            console.log(json)
            let newNote = JSON.parse(JSON.stringify(notes))
            //Edit a note logic in clint side
            for (let index = 0; index < newNote.length; index++) {
            const element = newNote[index];
            if(element._id===id){
                newNote[index].title = title;
                newNote[index].subtitle = subtitle;
                newNote[index].description = description;
                newNote[index].tag = tag;
                break;
            }
            

        }
        setNotes(newNote)
    }
    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes,getoneNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;