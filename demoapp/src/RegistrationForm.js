import React from "react";
import './RegistrationForm.css'
import passport_image from './Component/Assets/passport_image.png'
import crossicon from './Component/Assets/crossicon_image.jpg'

const RegistrationForm=(props)=>{
    return(
    <div className="form">
        <div className="register">
                <p>Register</p>
                <p onClick={props.close}><img src={crossicon} alt=""></img></p>
            </div>
    
        
            <div className="register-1">
                <div className="register-img">
                    <img src={passport_image} alt="img"></img>
                    <p>upload photo</p>
                </div>
                <div className="register-information">
                    <div className="full-name">
                        <input type="text" placeholder="First Name"></input>
                        <input type="text" placeholder="Last Name"></input>
                    </div>
                    <div><input type="email" placeholder="Email"></input></div>
                    <div><input type="text" placeholder="enter phone number"></input></div>
                    <div><input type="range"></input></div>
                   <div><select placeholder="State">
                        <option defaultChecked></option>
                        <option>Maharashtra</option>
                        <option>Karnatak</option>
                        <option>Gujrat</option>
                    </select></div>
                    <div>
                    <select placeholder="Country">
                        <option defaultChecked></option>
                        <option>India</option>
                        <option>America</option>
                        <option>Germany</option>
                    </select>
                    </div>
                    <div><input type="text" placeholder="Address"></input></div>
                    <div><input type="checkbox"></input>subscribe to news letter</div>
                    <div className="btn">
                    <button>Cancel</button>
                    <button>Submit</button>
                </div>
                </div>
                
            </div>
        
    </div>
    )
}

export default RegistrationForm