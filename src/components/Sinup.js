import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
const URL = "http://localhost:1000/api/auth/createuser"
const Sinup = (props) => {
    const [creadential,setCreadential] = useState({email:"", username: "", password: "", cpassword:""})
    const navigate = useNavigate();
    const Events = async (e)=>{
        e.preventDefault();
        const {email,username,password} = creadential;
        //Api call
        const response = await fetch(URL,{
            method: 'POST',
            headers:{"Content-Type":"application/json"
            },
            body: JSON.stringify({email,username,password})
        });
        const json = await response.json()
        console.log(json)
        if(json.success){
            //save auth token and redirect
            localStorage.setItem('token',json.authtoken);
            props.ShowAlert("Account Created Successfully","success")
            navigate("/");
        }
        else{
            props.ShowAlert("Username or Email allredy exist Please Enter Unique username or valid Email","danger");
        }
    }
    const onchange = (e)=>{
        setCreadential({...creadential, [e.target.name]: e.target.value})
    }
   
  return (
    <>
        <div id="sinup" className="mt-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto mt-5">
                        <div className="col-6 mx-auto d-block w-100">
                        <h4 className='mt-5'>Create you Account</h4>
                        <p>or
                        Add Your Notes in Cloud Stroge</p>
                        <form className='my-3' onSubmit={Events}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" value={creadential.email} id="email" name='email' onChange={onchange} required aria-describedby="emailHelp"/>
                                <div id="emailHelp" className="form-text">Please Enter a valid Email.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputUsername1" className="form-label">Username</label>
                                <input type="username" className="form-control" value={creadential.username} id="username" name='username' onChange={onchange} minLength={5} required aria-describedby="usernameHelp"/>
                                <div id="usernameHelp" className="form-text">Please Enter a Unique Username.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" value={creadential.password} id="password" name='password' onChange={onchange} minLength={6} required aria-describedby="passwordHelp" data-bv-identical="true"
                                data-bv-identical-field="cpassword"
                                data-bv-identical-message="The password and its confirm are not the same"/>
                                <div id="passwordHelp" className="form-text">Please Enter a Strong Password.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputCPassword1" className="form-label">Confirm Password</label>
                                <input type="cpassword" className="form-control" value={creadential.cpassword} id="cpassword" onChange={onchange} minLength={6} name = 'cpassword' aria-describedby="cpasswordHelp"  data-bv-identical="true"
                                data-bv-identical-field="password"
                                data-bv-identical-message="The password and its confirm are not the same"/>
                                <div id="passwordHelp" className="form-text">Please Enter a Confirm Password.</div>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="Submit" className="btn btn-outline-info mx-2">SinUp</button>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sinup