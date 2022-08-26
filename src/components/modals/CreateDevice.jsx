import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import { Context } from '../..';

const CreateDevice = ({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([])
    const addInfo=()=>{setInfo([...info, {title: '', description: '', number: Date.now()}])}
    const removeInfo=(number)=>{setInfo(info.filter(i=>i.number!==number))}
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Добавить Устройство</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>Выберите Устройство</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type=>
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle>Выберите Бренд</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand=>
                               <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control className='mt-2' placeholder='Введите название устройство'/>
                    <Form.Control className='mt-2' placeholder='Введите стоймость устройство' type="number"/>
                    <Form.Control className='mt-2' type="file"/> <hr/>
                    <Button variant={'outline-dark'} onClick={addInfo}>Добавить Характеристики</Button>
                    {info.map(i=><Row className='mt-3' key={i.number}>
                        <Col md={4}>
                            <Form.Control value={i.title} onChange={(e)=>changeInfo('title', e.target.value, i.number)} placeholder="Введите название свойство"/>
                        </Col>
                        <Col md={4}>
                            <Form.Control value={i.description} onChange={(e)=>changeInfo('description', e.target.value, i.number)} placeholder="Введите описание свойство"/>
                        </Col>
                        <Col md={4}>
                            <Button onClick={()=>removeInfo(i.number)} variant={'outline-danger'}>Удалить</Button>
                        </Col>
                    </Row>)}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" >Добавить</Button>
            </Modal.Footer>

        </Modal>
    );
};

export default CreateDevice;