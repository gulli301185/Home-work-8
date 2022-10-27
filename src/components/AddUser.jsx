import { useState } from "react"
import styled from "styled-components"

const Div=styled.div`

 text-align: center;
 
 
 &.addUser{
     display: flex;
     flex-direction: column;
     margin-bottom: 20px;
     width: 450px;
     background-color: aqua;
     margin: auto;
     padding-top: 100px;
    //  list-style: none;
 }

& .form{
    width: 300px;
    height: 50px;
    margin-bottom: 20px;
    margin-left: 50px;
 
}

& .forma{
    margin: auto;
    padding-bottom: 20px;
    font-weight: bold;
    font-size: 20px;
}
& .form1{
    width: 300px;
    height: 50px;
    margin-bottom: 20px;
    margin-left: 50px;
 
}

& .forma1{
    margin: auto;
    padding-bottom: 20px;
    font-weight: bold;
    font-size: 20px;
    display:flex;
    flex-direction: column;
    
}

`

const AddUser=(props)=>{

    const[uName, setUName]= useState("")
    const[uAge, setUAge]= useState("")

    function uNameHandler(event){
        setUName(event.target.value);
    }

    function uAgeHandler(event){
        setUAge(event.target.value);
    }


    function submitHandler(event){
        event.preventDefault()
       
        setUName("")
        setUAge("")
        if(uAge.length===0){
         return  setUAge( alert("fill all"))
        }else if(uName.length===0){
          return setUName( alert("fill all"))
        }

props.onTransfer(uName,uAge)
    }
    return(
        <Div className="addUser">
                <form onSubmit={submitHandler}>

                    <label className="forma" htmlFor="name">UserName</label>
                    <input className="form" type="text" onChange={uNameHandler}  value={uName}/>

                    <label className="forma1" htmlFor="age">User Age</label>
                    <input className="form1" type="number" onChange={uAgeHandler} value={uAge}/>

                    <button className="form" type="submit" onClick={submitHandler}> Add User</button>
                </form>
        </Div>
    )
}

export default AddUser