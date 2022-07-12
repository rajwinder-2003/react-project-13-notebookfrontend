import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
export const Navbar = () => {
    const navigate = useNavigate();
    const handelLogout = ()=>{
        localStorage.removeItem('token');
        navigate("/login")
    }
   
    // let location = useLocation();
    // useEffect(() => {
    //     console.log(location.pathname);
    //   }, [location]);
  return (
    <div className='container-fluid nav_bg'>
        <div className="row">
            <div className="col-10 mx-auto">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">iNotebook</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link menu_active active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token')?<form className="d-flex">
                        <Link to='/login'>
                        <button type="button" className="btn btn-outline-info mx-2">LogIn</button></Link>
                        <Link to='/sinup'>
                        <button type="button" className="btn btn-outline-info mx-2">SinUp</button></Link>
                        </form>:<button onClick={handelLogout} type="button" className="btn btn-outline-info mx-2">LogOut</button>}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}
