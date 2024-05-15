import { useContext } from "react";
import { todoItemsContext } from "../store/createContext";

function WelcomeMessage(){
    const {todoItems}=useContext(todoItemsContext);

    return (
        todoItems.length===0&&<div>ENJOY THE DAY</div>
    );
};
export default WelcomeMessage;