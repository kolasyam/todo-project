import AppName from "./components/AppName"
import Addtodo from "./components/Addtodo"
import TodoItems from "./todoItem";
import './App.css';
import { useReducer, useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { todoItemsContext } from "./store/createContext";
function App() {
    const todoItemsReducer=(currTodoItems , action)=>{
    let newTodoItem=currTodoItems;
    if(action.type === "ADD-TODO"){
      newTodoItem = [{
        todoName: action.payload.itemName,
        dueDate: action.payload.itemDueDate,
      }, ...currTodoItems];
    } else if(action.type === "DELETE-TODO"){
      newTodoItem = currTodoItems.filter(item => item.todoName !== action.payload.todoItemName);
    }
    return newTodoItem;
  };

  // const [todoItems,setTodoItems] = useState([]);
  const [todoItems,dispatchFunction]=useReducer(todoItemsReducer,[]);
  const addNewItem=(itemName , itemDueDate) => {
    const newTodoItems={
      type: "ADD-TODO",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchFunction(newTodoItems);
    // const newTodoItems = [    {
    //   todoName: itemName,
    //   dueDate:itemDueDate,
    // }, ...todoItems];
    // setTodoItems(newTodoItems);
  }
  const deleteItem = (todoItemName) => {
    const newDeleteItems={
      type: "DELETE-TODO",
      payload: {
        todoItemName,
      },
    };
    dispatchFunction(newDeleteItems);
    // const newTodoItems = todoItems.filter(item => item.todoName !== todoItemName);
    // setTodoItems(newTodoItems);
  }
  return (
    <todoItemsContext.Provider value={{todoItems:todoItems , addNewItem , deleteItem}}>
      <center className='todo-container'>
        <AppName/>
        <Addtodo/>
        <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
        <TodoItems></TodoItems>

      </center> 
    </todoItemsContext.Provider>
  );
}

export default App
