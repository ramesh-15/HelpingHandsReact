import axios from 'axios'
import React, { useState } from 'react'
import { FaArrowRight, FaRegCheckCircle } from "react-icons/fa"
import '../styles/Signup.css'
import '../styles/Signup.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function Signup() {
    // const [show, setShow] = useState(false)
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    
    const [arr, setarr] = useState([])
    const [firstName, setFirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [userName, setuserName] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [password2, setpassword2] = useState("")
    const [gender, setgender] = useState("")
    const [options, setoptions] = useState("")


    const singupData = (e) => {
        // setShow(true)
        // e.preventdefault();
        let obj = {
            first_name: firstName,
            last_name: lastName,
            username: userName,
            email: email,
            password:password,
            password2:password2,
            gender: gender,
            options: options
        }
        console.log(obj, "one object created")
        // setFirst_name("")
        // setLast_name("")
        // setUsername("")
        // setEmail("")
        // setCity("")
        // setState("")
        // setPasscode("")

        axios.post("http://192.168.3.97:8000/signup/", obj).then((response) => {
            console.log(response.data);
            // setarr(response.data)
        })


    }
    return (
        <div>
            <div className='img'>
                <div className='row'>
                    <div className='frm col-4'>
                        <h4>Welcome Donor</h4>
                        <h6 className='text-start mb-4'>Create an Account</h6>
                        <div className="input-group">
                            <input type="text" className='form-control'
                                name="firstName"
                                value={firstName}
                                onChange={(e)=>setFirstName(e.target.value)}
                                placeholder='First name'></input>
                            <label className='label'>First name</label>
                        </div><br />
                        <div className='input-group'>
                            <input type="text" className='form-control'
                                name='lastName'
                                value={lastName}
                                onChange={(e)=>setlastName(e.target.value)}
                                placeholder='Last name'></input>
                            <label className='label'>Last name</label>
                        </div><br />
                        <div className='input-group'>

                            <input type="text" className='form-control'
                                name='userName'
                                value={userName}
                                onChange={(e)=>setuserName(e.target.value)}
                                placeholder='User name'></input>
                            <label className='label'>User Name</label>
                        </div><br />
                        <div className='input-group'>
                            <input type="text" className='form-control'
                                name='email'
                                value={email}
                                onChange={(e)=>setemail(e.target.value)}
                                placeholder='Email'></input>
                            <label className='label'>Email</label>
                        </div><br />
                        <div className='input-group'>
                            <input type="text" className='form-control'
                                name='password'
                                value={password}
                                onChange={(e)=>setpassword(e.target.value)}
                                placeholder='Password'></input>
                            <label className='label'>Password</label>
                        </div><br />
                        <div className='input-group'>
                            <input type="password" className='form-control'
                                name='password2'
                                value={password2}
                                onChange={(e)=>setpassword2(e.target.value)}
                                placeholder='Confirm Password'></input>
                            <label className='label'>Confirm Password</label>
                        </div><br />
                        <div className='input-group'>
                            Gender:
                            <div className='col'>
                                <label> Male</label>
                                <input type="radio"
                                    name='gender'
                                    value="Female"
                                    onChange={(e)=>setgender(e.target.value)}
                                    placeholder='Male'
                                />
                            </div>
                            <div className='col'>
                                <label>Female</label>
                                <input type="radio"
                                    name='gender'
                                    value="Male"
                                    //  checked={gender === "Female"}
                                    onChange={(e)=>setgender(e.target.value)}
                                    placeholder='Female'
                                />
                            </div>
                        </div>

                        <div className='input-group'>
                            <label>Options:</label>
                            <div className='col'>
                                <label> Donors</label>
                                <input type="radio"
                                    name='options'
                                    value="is_Donar"
                                    //  checked={gender === "Female"}
                                    onChange={(e)=>setoptions(e.target.value)}
                                    placeholder='is_Donar'

                                />
                            </div>
                            <div className='col'>
                                <label> Volunteers</label>
                                <input type="radio"
                                    name='options'
                                    value="is_Volunteer"
                                    //  checked={gender === "Female"}
                                    onChange={(e)=>setoptions(e.target.value)}
                                    placeholder='is_Donar'
                                />

                               
                            </div>
                        </div><br />
                       
                        
                        <button onClick={singupData} className='form-control btnn mb-5 '><Link  to="/Login">Save<FaArrowRight /></Link>  </button>
                        <div className='text-start'>
                            <small className='small-text'>Do you have an account?</small>
                            <Link to='/login'><button type='button' className='sign-btn'>Login.</button></Link>

                        </div>
                            
                    </div> 
                    </div>       
                       
                      


                 
                </div>


            </div>
        
    )
}

export default Signup;
