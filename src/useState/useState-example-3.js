import React, { useState } from 'react'

const Index = () => {

    const [list, setList] = useState([]);


    const [message, setMessage] = useState({
        text: "",
        id: ""
    });

    const [editingItem, setEditingItem] = useState({
        id: "",
        isEditing: false
        // At here if isEditing true add button replace the edit button 
    });


    const changeMessage = (e) => {
        setMessage({
            ...message,
            text: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let newTodo = {
            text: message.text,
            id: new Date().getTime().toString()
            // This is create a new unique id based in time 
        }

        setList([...list, newTodo]);
        // At here we assign the newTodo object to setList

        setMessage({
            text: "",
            id: ""
        });
        // Those above line of code for outputs input field will be empty for us after click the Add button that's why we wrote those lines of code.
    }

    const handleDelete = (id) => {
        let newTodos = list.filter((eachItem) => {
            return eachItem.id !== id;
        });

        setList(newTodos);
    }
    // Above line of code for to delete the created todos by using the filter method.

    const changeEditState = (id) => {
        setEditingItem({
            ...editingItem,
            id: id,
            isEditing: true
            // Above code To change the state of the edit button when we are click the edit button to replace add button to edit button.
        });
        let editableItem = list.find((eachItem) => eachItem.id === id);
        setMessage({
            ...message,
            text: editableItem.text,
            id: editableItem.id
        });
        // Above line of code if we are make to edit item we can shift to that item send to input field that function work here.
    };

    const handleEdit = (e) => {
        e.preventDefault();
        let newTodos = list.map((eachItem) => {
            if (eachItem.id === editingItem.id) {
                return {
                    text: message.text,
                    id: editingItem.id
                };
            } else {
                return eachItem;
            }
        });
        setList(newTodos)
        // Above code for to edit todos 

        setMessage({
            text: "",
            id: ""
        });
        // Above code for after editing remove data in input

        setEditingItem({
            id: "",
            isEditing: false
        });
        // Above code for after editing to change edit button to add button.
    };


    return (
        <div>
            <form>
                <input type="text" name='message' id='message' placeholder='enter some text' value={message.text} onChange={changeMessage} />

                {
                    editingItem.isEditing ? <button type='submit' onClick={handleEdit}>Edit</button> : <button type='submit' onClick={handleSubmit}>Add</button>
                }
                {/* Above code for if isEditing is true add button will replace the edit button otherwise it is add button  */}

            </form>

            <hr />

            {list.length === 0 && <h4>There is no items in the list</h4>}
            {/* Above conditional statement for if there is no items in list displayed in output.  */}

            <ul>
                {
                    list.map((eachItem) => {
                        const { text, id } = eachItem
                        return <li key={id}>
                            <span>{text}</span>
                            <button onClick={() => changeEditState(id)}>Edit</button>
                            <button onClick={() => handleDelete(id)}>Delete</button>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default Index;