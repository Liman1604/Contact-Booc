import React from 'react';
import {Button,Row, Card, Col,} from "react-bootstrap";

const AddContaktList = (props) => {
    console.log(props.newCont)

    return (
        <div>
            <Row xs={1} md={4} className="g-4">
                {props.newCont.map((item,index) => (
                    <Col key={item.id}>
                        <Card>
                            <Card.Img className='card-image' variant="top" src={item.image}/>
                            <Card.Body>
                                <Card.Title > <strong>Имя:</strong> <strong>{item.name}</strong></Card.Title>
                                <Card.Text>
                                    <strong>Номер:</strong> <strong>{item.number}</strong>
                                </Card.Text>
                                <Button onClick={()=>props.deleteCont(item.id)}>
                                    &times;
                                </Button>
                                <Button className='ms-3' onClick={()=>props.editContact(index)}>
                                    <img  width='20px' src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png" alt="edit" />
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default AddContaktList;