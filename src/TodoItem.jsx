import { useContext } from "react";
import Item from "./components/Addtodoitem";
import { todoItemsContext } from "./store/createContext";
const TodoItems = () => {
    const {todoItems, deleteItem}=useContext(todoItemsContext);

    return (
        <div className="items-container">
            {todoItems.map((item)=>(
                <Item TodoName={item.todoName} key={item.todoName}TodoDate={item.dueDate} onDeleteClicked={deleteItem}></Item>
            ))}

    </div>
    );

};
export default TodoItems;