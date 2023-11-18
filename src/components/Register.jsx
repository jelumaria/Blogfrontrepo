import axios from 'axios'
import React, { useState } from 'react'
import BlogHeader from './BlogHeader'

const register = () => {
    const [inputfield, changeInputfield] = useState(
        { 
        
            "name": "",
            "profile": "",
            "email": "",
            "password": ""
           
            
        
         }
    )

const inputHandler=(event)=>{
    changeInputfield({...inputfield,[event.target.name]:event.target.value})
}

const readValue=()=>{
    console.log(inputfield)
    axios.post("http://127.0.0.1:8000/blog/register/",inputfield).then(
        (response)=>{
            alert(response.data.status)
        }
    )
    
}
  return (
    <div>
<BlogHeader/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <label htmlFor="" className="form-label">name</label>
                    <input type="text" className="form-control" name='name' value={inputfield.name} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">profile</label>
                    <input type="file" className="form-control" name='profile' value={inputfield.profile} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">email</label>
                    <input type="text" className="form-control" name='email' value={inputfield.email} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">password</label>
                    <input type="text" className="form-control" name='password' value={inputfield.password} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <button onClick={readValue} className="btn btn-success">Add</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default register