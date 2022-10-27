
import { useState } from 'react';
// import './App.css';
import AddUser from './components/AddUser';
import UserList from './components/UserList';



function App() {
const [ userList,setUserList] =useState([])

function transfer(name,age){
   setUserList((prevList)=>{
    return [...prevList,{
      name:name,
      age:age,
      id:Math.random().toString()
    }]
   })
}

const deleteItem=(id)=>{
  return ()=>{
    const deleted=userList.filter((item)=>item.id !==id)
    setUserList(deleted)
  }
}
  return  <div>
    <AddUser onTransfer={transfer}/>
    <UserList userList={userList} onDeleteItem={deleteItem}/>
  </div>
}

export default App;
