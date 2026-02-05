import React from 'react'

export const MapDemo3 = () => {

    var students=[
         {id:1,name:"Sia",age:20,marks:78,city:"ahmedabad",gender:"female"},
        {id:2,name:"Krishna",age:16,marks:80,city:"ahmedabad",gender:"female"},
        {id:3,name:"ram",age:22,marks:99,city:"ahmedabad",gender:"male"},
    ]
  return (
    <div style={{textAlign:'center'}}>
        <h1>Map Demo 3</h1>
        <table border="" align='center' >
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>MARK</th>
                <th>CITY</th>
                <th>GENDER</th>
            </tr>
        </thead>
        <tbody>
            {
                students.map((st)=>{
                    return <tr>
                        <td>{st.id}</td>
                        <td>{st.name}</td>
                        <td>{st.age}</td>
                        <td>{st.marks}</td>
                        <td>{st.city}</td>
                        <td>{st.gender}</td>
                    </tr>
                })
            }
        </tbody>
        </table>
    </div>
  )
}
