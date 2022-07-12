import React from 'react'
import first from "../image/1.jpg";
import second from "../image/5.jpg";
import third from "../image/2.png";
import four from "../image/4.jpg";
import five from "../image/3.webp";
export const Slide = () => {
  return (
    <div id='slide'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={first} className="d-block w-100 h-100 img_src" alt='first'/>
                        </div>
                        <div className="carousel-item">
                        <img src={second} className="d-block w-100 h-100 img_src" alt='second'/>
                        </div>
                        <div className="carousel-item">
                        <img src={third} className="d-block w-100 h-100 img_src"alt='thirrd'/>
                        </div>
                        <div className="carousel-item">
                        <img src={four} className="d-block w-100 h-100 img_src" alt='four'/>
                        </div>
                        <div className="carousel-item">
                        <img src={five} className="d-block w-100 img_src" alt='five'/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
