import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
    const [email, setEmail] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [profilepic, setProfilepic] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8071/signup', { email, fname, lname, phone, password, profilepic })
        .then(result => {
            console.log(result);
            navigate('/login');
        })
        .catch(err => console.log(err));
    };

    // const handleFileUpload = async (e) => {
    //     const file = e.target.files[0];
    //     const base64 = await convertToBase64(file);
    //     setProfilepic(base64);
    // };

    // const convertToBase64 = (file) => {
    //     return new Promise((resolve, reject) => {
    //         const fileReader = new FileReader();
    //         fileReader.readAsDataURL(file);
    //         fileReader.onload = () => {
    //             resolve(fileReader.result);
    //         };
    //         fileReader.onerror = (error) => {
    //             reject(error);
    //         };
    //     });
    // };

return (
    <div>
        <h2>Register</h2>

          <form onSubmit={handleSubmit}>
                <div class="mb-3">
                  <label for="email" class="form-label">Email :</label>
                  <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email" required onChange={(e)=>setEmail(e.target.value)} />
                </div>

                <div class="mb-3">
                  <label for="fname" class="form-label">First Name :</label>
                  <input type="text" class="form-control" id="fname" name="fname" placeholder="Enter your first name" required onChange={(e)=>setFname(e.target.value)}/>
                </div>

                <div class="mb-3">
                  <label for="lname" class="form-label">Last Name:</label>
                  <input type="text" class="form-control" id="lname" name="lname" placeholder="Enter your last name" required onChange={(e)=>setLname(e.target.value)}/>
                </div>

                <div class="mb-3">
                  <label for="phone" class="form-label">Phone Number:</label>
                  <input type="text" class="form-control" id="phone" name="phone" placeholder="Enter your Phone Number" required pattern="[0-9]{10}" title="Please enter a valid phone number" onChange={(e)=>setPhone(e.target.value)}/>
                </div>

                <div class="mb-3">
                  <label for="pw" class="form-label">password:</label>
                  <input type="password" class="form-control" id="pw" name="pw" placeholder="Enter your password" required pattern=".{8,}" title="Password must be at least 8 characters long." onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                {/* <div className='mb-3'>
                    <label htmlFor='Profilepic'>Profile picture:</label>
                    <input type='file' name='profilepic' onChange={handleFileUpload}/>
                </div> */}
                <div class="mb-3">
                <button className="btn btn-primary" type='submit'>Register</button>
                <button className="btn btn-danger" type='reset'>Delete</button>
                </div>
                </form>
                
        
     
    </div>         
            
  )
}
