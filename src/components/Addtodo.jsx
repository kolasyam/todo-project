import { useContext, useRef } from "react";
import { IoMdAdd } from "react-icons/io";
import { todoItemsContext } from "../store/createContext";

function Addtodo(){
    const {addNewItem} =useContext(todoItemsContext);
    const onTodoName = useRef();
    const onTodoDate = useRef();
    const handleAddButtonClicked=(event) => {
        event.preventDefault();
        const todoName=onTodoName.current.value;
        const todoDate=onTodoDate.current.value;
        addNewItem(todoName , todoDate);
        onTodoName.current.value="";
        onTodoDate.current.value="";
    } 
    return ( 
        <center className="container">
            <form className="row syam-row" onSubmit={handleAddButtonClicked}>
                <div className="col-6"><input type="text"placeholder="Enter Todo here" ref={onTodoName}></input></div>
                <div className="col-4"><input type="date" ref={onTodoDate}></input></div>
                <div className="col-2"><button type="submit" className="btn btn-success syam-button" ><IoMdAdd />
</button></div>
            </form>
        </center>    
    );
}
export default Addtodo;
