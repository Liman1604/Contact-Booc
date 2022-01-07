import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";


const AddContakt = (props) => {
    const [contName,setContName] = useState('')
    const [contNumber,setContNumber] = useState('')
    const [contImage,setContImage] = useState('')

    function handleSubmit(ev){
        ev.preventDefault()
        if (!contName.trim()){
            alert('Заполните поле для имени')
            return
        }
        if (!contNumber.trim()){
            alert('Заполните поле для номера')
            return;
        }
        if (!contImage){
        return setContImage('data:image/jpeg;base64,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')        }
        let newContact={
            name:contName,
            number:contNumber,
            image:contImage,
            id: Date.now(),
        }
      props.newContact(newContact)
        setContName('')
        setContNumber('')
        setContImage('')
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control value={contName} onChange={(ev)=>setContName(ev.target.value)} type="text" placeholder="Введите имя контакта" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Номер</Form.Label>
                    <Form.Control value={contNumber} onChange={(ev)=>setContNumber(ev.target.value)} type="number" placeholder="Введите номер телефона" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Фото контакта</Form.Label>
                    <Form.Control value={contImage} onChange={(ev)=>setContImage(ev.target.value)} type="text" placeholder="Добавте фото (src)" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Сохранить
                </Button>
            </Form>
        </div>

    );
};

export default AddContakt;