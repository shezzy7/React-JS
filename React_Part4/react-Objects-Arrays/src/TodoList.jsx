import { useState } from "react";
import "./TodoList.css";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList() {

    // let [todos, setTodos] = useState([]);
    // unique key for list items:-As we add an element to list then to access this particular element later in our code we have to add any key woth item which uniquly identifies it. To do this go to website 'npm.com' there search for 'uuid' and first of all install it(npm install uuid) and then import it in out jsx file -> import the uuid writen as 'import { v4 as uuidv4 } from 'uuid';.And then where we want to generrate a unique key we can simply call it -> uuidv4(); and it generate and return a unique key.
    // And now our each list item will contain two things one will be the data(task) and other will be key(id) of this item.And now istead of using a simple array for storing tasks we will use an array of objects.Each object will contains value of task and value of key(id).
    let [todos, setTodos] = useState([{task:"Sample task" , id:uuidv4() , isDone:false}]);
    let [todoValue, setTodoValue] = useState("");

    // Update value of todoValue variable.
    let updateInputValue = (event) => {
        setTodoValue(event.target.value);
    }

    // Add task in list
    let addTask = () => {

        if (todoValue === "") {
            alert("please enter a task name.");
            return;
        }
        setTodos([...todos, { task: todoValue, id: uuidv4() , isDone:false }]);
        // Note : For adding values in array in react avoid methods like push,unshift and use methods like spread,concat.

        setTodoValue("");
    }

    // delete task
    let deleteTask = (id)=>{
        // Here we are getting id of list item,to which we have to remove from our list.
        // In react filter method is used for removing elements from an array.
        // using a callback as new value will depend on previous values.
        setTodos((prevTodos)=>
            prevTodos.filter((ele)=>
                ele.id!=id
            )
        )
        // Note : While removing any element from array in react we have to avoid methods like pop,shift,splice and we have to use methods like filter,slice.
    }

    // conerting all the letters in list items to uppercase
    // Note:for replacing/updating values in arrays we use map method and avoid from splice or asssignment method(arr[i]=...).
    let upperCaseAll = ()=>{
        setTodos((prevTodos)=>
            prevTodos.map((ele)=>{
                return{
                    ...ele,task:ele.task.toUpperCase()
                };
            })
    )
    }

    // converting only single list item to uppercase
    let upperCaseOne = (id)=>{
        setTodos((prevTodos)=>
            prevTodos.map((ele)=>{
                if(ele.id==id){
                    return{
                        ...ele,task:ele.task.toUpperCase()
                    }
                }
                else{
                    return ele;
                }
            })
        )
    }
    
    // Mark as done
    let markAsDone = (id)=>{
        setTodos((prevTodos)=>
            prevTodos.map((ele)=>{
                if(ele.id==id){
                    
                    // data.style.textDecoration = "line-through";
                    return{...ele,isDone:true};
                }
                else{
                    return ele;
                }
            })
        )
    }
    return (
        <div className="container">
            <div id="todo">
                <h2>To-Do List <i className="fa-solid fa-book"></i></h2>
                <input type="text" onChange={updateInputValue} placeholder="Enter task here" value={todoValue} />
                {/* onChange method focuses on any change done with input section.Whenver any letter is added or removed from input section it calls function 'updateInputValue' and it updatws the value of variable 'todoValue' */}
                <button onClick={addTask} id="btn">ADD</button>
                <br /> <br />
                <hr />
                <ul>

                    {/* {todos.map((ele) => <li>{ele.task}</li>)} */}

                    {/* As now we are using object inside array so to print value of each task in this object we have to write obj.task*/}

                    {todos.map((ele) =>
                        <li key={ele.id} style={{background:"white"}}>
                           <span style={ ele.isDone?{textDecorationLine:"line-through",background:"#fff"}:{background:"#fff"}}> {ele.task}</span>
                            <span style={{background:"transparent" , fontSize:"13px"}}>
                            <button onClick={()=>deleteTask(ele.id)} style={{background:"maroon"}}><i className="fa-solid fa-trash-can"></i></button>
                            
                            &nbsp;&nbsp; &nbsp;
                            <button onClick={()=>markAsDone(ele.id)} style={{background:"green"}}><i className="fa-solid fa-check" style={{background:"green"}}></i></button>
                            </span>
                            
                            {/* here we calling deleteTask function in an arrwo function bcz this arrow function will not execute it directly.It will generate a copy of this function and button for this list item will be clicked then it will call this fucntion. */}
                        </li>
                    )}


                </ul>
                <br />
                <button className="upperCaseAll" onClick={upperCaseAll}>UpperCase All</button>
            </div>
        </div>
    );

}