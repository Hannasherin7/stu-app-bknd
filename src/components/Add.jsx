import React, { useState } from 'react'
import { Nav } from './Nav'
import axios from 'axios'

export const Add = () => {
    const [data,setData]=useState(
        {
          "name":"",
          "rollno":"",
          "admno":"",
          "college":""
        }
      )
      const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
      }
      const readVlue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
          (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
              alert("successfully added")
              
            } else {
              alert("error")
              
            }
          }
        ).catch(
          (error)=>{
            console.log(error.message)
            alert(error.map)
          }
        ).finally()
      }
  return (
    <div>
        <h1><center>ADD STUDENT</center></h1>
        <Nav></Nav>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name'value={data.name} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">roll no</label>
                    <input type="text" className="form-control"name='rollno' value={data.rollno}onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">adm no</label>
                    <input type="text" className="form-control" name='admno' value={data.admno}onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">college</label>
                    <input type="text" className="form-control" name='college'value={data.college}onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <br /><br />  <button onClick={readVlue} className="btn btn-success">ADD</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
