import React from 'react'
import FullNote from './fullnotes';
function Fetch() {
    let notes = JSON.parse(localStorage.getItem('detail'));
    // console.log(JSON.parse(notes));
  return (
    <>
        {/* {notes.map((note)=>{
            return( */}
                <div id="oneNote">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-10 mx-auto">
                            <FullNote notes={notes}/>
                            </div>
                        </div>
                    </div>
                </div>
            {/* )})} */}
    </>
  )
}

export default Fetch