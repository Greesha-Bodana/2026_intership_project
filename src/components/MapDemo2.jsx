import React from 'react'

export const MapDemo2 = () => {
    
    var users =[
        {id:1,name:'Greesha',age:21,gender:'female'},
        {id:2,name:'Sia',age:20,gender:'female'},
        {id:3,name:'Pratham',age:19,gender:'male'}
    ]
  return (
    <div>
        <h1>MapDemo2</h1>
        {
            users.map((user)=>{
                return <li>{user.id} -{user.name} -{user.age} -{user.gender}</li>
            })
        }

    </div>
  )
}
