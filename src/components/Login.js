import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom';
import { Slide } from './Slide';
const URL = "http://localhost:1000/api/auth/login"
const Login = (props) => {
    const [creadential,setCreadential] = useState({username: "", password: ""})
    const navigate = useNavigate();
    const Events = async (e)=>{
        e.preventDefault();
        //Api call
        const response = await fetch(URL,{
            method: 'POST',
            headers:{"Content-Type":"application/json"
            },
            body: JSON.stringify({username:creadential.username, password:creadential.password})
        });
        const json = await response.json()
        console.log(json);
        if(json.success){
            //save the auttoken and redirect
            localStorage.setItem('token',json.authtoken);
            props.ShowAlert("Logged in Successfully","success")
            navigate("/");
        }
        else{
            props.ShowAlert("Please try to login with correct Credentials","danger");
        }
    }
    const onChange = (e)=>{
        setCreadential({...creadential, [e.target.name]: e.target.value})
    }
  return (
    <div id='header'>
    <div id='text' className=" d-flex align-items-center">
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="col-6 mx-auto d-block w-100 text_group">
                    <h1 className='brand-name mt-5'>iNotebook</h1>
                    <h4>iNotebook-Secure Your Note With cloud Storege</h4>
                    <p>Create or login Your own Account for Add your Note</p>
                    </div>
                </div>
            </div>    
        </div>
    </div>
    <div id="login" className='mt-5'>           
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto ">
                    <div className="row"></div>
                    <div className="col-6 mx-auto d-block w-100">
                        <h6 className='mt-3'>Login Your Account</h6>          
                        <div id='form'>
                                <form className='my-3' onSubmit={Events}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputUsername1" className="form-label">Username</label>
                                        <input type="username" className="form-control" value={creadential.username} id="username" name='username' onChange={onChange} minLength={5} required aria-describedby="usernameHelp"/>
                                        <div id="usernameHelp" className="form-text">Please Enter a valid Username.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className="form-control" value={creadential.password} id="password" name='password' onChange={onChange} minLength={6} required aria-describedby="passwordHelp" data-bv-identical="true"
                                        data-bv-identical-field="cpassword"
                                        data-bv-identical-message="The password and its confirm are not the same"/>
                                        <div id="passwordHelp" className="form-text"><strong> Please Enter a valid Password.</strong></div>
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                    </div>
                                        <div><button type="Submit" className="btn btn-outline-info mx-2">LogIn</button>
                                        
                                    </div> 
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>
            <div className="show mt-5">
                <Slide/>
            </div>
    
    
    </div>
  )
}

export default Login