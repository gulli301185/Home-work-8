import styled from "styled-components";


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
     list-style: none;
 }

& ul{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 450px;
    background-color: aqua;
    list-style: none;
    text-align: center;
    
}

`

const  UserList=(props)=>{
    return(
        <Div className="addUser">

        <ul>
            {props.userList.map((item)=>(
                  <li key={item.id} >{item.name} {item.age}
                <input type='checkbox'  className="checkboxes"></input> 
                   <button onClick={props.onDeleteItem(item.id)}>delete</button>
                   </li>
            ))}
        </ul>
        </Div>
    )
}

export default UserList;

