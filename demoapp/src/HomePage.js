import React, { useState } from "react";
import './HomePage.css';
// import image from './Component/Assets/background_image.jpg';
import NavBar from "./Component/NavBar/NavBar";
import RegistrationForm from "./RegistrationForm";
const HomePage=() =>{
    const [showModel, setShowModel] = useState(false);

    const togglePopup=() =>{
            setShowModel(!showModel)
    }

    return(
        <div className="homepage">
            <div className="img">
            </div>
            <div className="text">
                <NavBar />
            </div>
            <div className="text2">
                <p>I am looking for....</p>
            </div>
            <div className="homepage-2">
                <div className="search">
                    <input type="text" placeholder="Enter a job description"></input>
                    <button className="btn">Search</button>
                </div>
                <div className="search2">
                    <div className="check-box">
                        <input type="checkbox" /><label>Full Time</label>
                        <input type="checkbox" /><label>Part Time/Casual/Freelance</label>
                    </div>
                    <div className="selectbox">
                    <input type="text" placeholder="Select your location"></input>
                      <select>
                            <option defaultChecked></option>
                            <option>Pune</option>
                            <option>Banglore</option>
                            <option>Mumbai</option>
                            <option>Hydrabad</option>
                        </select>
                    </div>
                </div>
                <div className="register-btn">
                        <button onClick={togglePopup}>Register </button>
                        {showModel && (
                            <>
                                <RegistrationForm close={togglePopup} />
                            </>
                        )
                        }
                    </div>
            </div>
        </div>
    )
}

export default HomePage;