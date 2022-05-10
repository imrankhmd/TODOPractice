import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/action";

export const Todo = () => {
    const [text, setText] = useState("");
    const todo = useSelector((store) => store.todo);
    console.log('todo:', todo)
    const dispatch = useDispatch();

    const handleClick = () => {
        const payload = {
            title: text,
            status: false,
        };
        dispatch(addTodo(payload));
    };
return(
    <div>
        <input type="text" onChange={(e) => {
            setText(e.target.value);
        }} />
        <button onClick={handleClick}>Submit</button>{todo.map((e) => {
            return (
                <div key={e.id}>
                {e.title}-{e.status ?"true":"false"}
                </div>
            );
        })}
    </div>
);
};