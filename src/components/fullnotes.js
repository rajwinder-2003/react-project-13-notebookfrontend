import React from 'react';
import { useNavigate } from 'react-router-dom';
const FullNote = (props) => {
  const navigate = useNavigate();
    const {notes} = props;
    const Event = (e) =>{
        e.preventDefault();
        navigate(-1);
        localStorage.removeItem('detail');
    }
  return (
    <div id="item" className='mt-5'>
      <div className='col-10 mx-auto mt-5 d-block w-100'>
        <div className="card my-3">
          <div className="card-body">
            <h3 className="card-title"> Title: <br />{notes.title}</h3>
            <h4 className="card-title mt-3"> SubTitle: <br />{notes.subtitle}</h4>
              <p className="card-text mt-3">Description: <br />{notes.description}</p>
                <button type="Submit" onClick={Event} className="btn btn-outline-info mx-1">Go back</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullNote;