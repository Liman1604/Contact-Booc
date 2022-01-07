import React, { useState } from "react";
import {
    Button,
    FormControl,
    ModalDialog,
    ModalFooter,
    ModalTitle,
} from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";

const EditModel = (props) => {
    // let [edit, setEdit] = useState(props.editTodo);
    console.log(props)
    function handleEditContact(e) {
        console.log(props.editTodo)
        let newObj = { ...props.editTodo };
        newObj[e.target.name] = e.target.value;
        props.setEditTodo(newObj)
        // setEdit(newObj);
    }
    function handleSave() {
        props.handleSave(props.editTodo);
    }

    return (
        <div>
            <div key={props.editTodo.id} id='logo'>
                <ModalDialog>
                    <ModalHeader closeButton>
                        <ModalTitle>Edit Contact</ModalTitle>
                    </ModalHeader>
                    <FormControl
                        name="name"
                        onChange={handleEditContact}
                        value={props.editTodo.name}
                        className="mt-3"
                        type="text"
                        placeholder={props.editTodo.name}
                    />
                    <FormControl
                        name="number"
                        onChange={handleEditContact}
                        value={props.editTodo.number}
                        className="mt-3"
                        type="text"
                        placeholder={props.editTodo.number}
                    />
                    <FormControl
                        name='image'
                        onChange={handleEditContact}
                        value={props.editTodo.image}
                        className="mt-3"
                        type="number"
                        placeholder={props.editTodo.image}
                    />



                    <ModalFooter>
                        <Button
                            onClick={props.handleCloseModal}
                            variant="secondary">
                            Close
                        </Button>
                        <Button onClick={handleSave} variant="primary">
                            Save changes
                        </Button>
                    </ModalFooter>
                </ModalDialog>
            </div>
        </div>
    );
};

export default EditModel;