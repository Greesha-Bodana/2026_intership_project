import axios from 'axios'
import React from 'react'

export const ApiDemo4 = () => {

    const addUser = async()=>{
        //form -->
        const userObj = {
            name:"admin",
            age:25,
            email:"admin@gmail.com",
            password:"admin1234",
            isActive:true
        }

        //post(url,obj)
        try{
        const res = await axios.post("https://node5.onrender.com/user/user/",userObj)
        console.log(res)
        console.log(res.data)
        }catch(err){
            console.log(err)
            alert("error while adding user")
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 4</h1>
        <button onClick={()=>{addUser()}}>ADD</button>
    </div>
  )
}