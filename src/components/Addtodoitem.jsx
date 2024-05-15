import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { todoItemsContext } from "../store/createContext";

function Item({TodoName,TodoDate}){
    const {deleteItem}=useContext(todoItemsContext);
    return (
        <div className="container">  
            <div className="row syam-row">
                <div className="col-6">{TodoName}</div>
                <div className="col-4">{TodoDate}</div>
                <div className="col-2"><button type="button" className="btn btn-danger syam-button" onClick={() => deleteItem(TodoName)}><AiFillDelete /></button></div>
        </div>
        </div>
    );
}
export default Item;