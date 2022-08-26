import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../const';
import star from '../assets/star.png'

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    return (
       <Col md={3} className="mt-3" onClick={()=> navigate( DEVICE_ROUTE + '/' + device.id, {replace: true})}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={device.img}/>
                <div className='mt-1 text-black-50 d-flex justify-content-between align-items-center'>
                    <div>Iphone ...</div>
                    <div className='d-flex align-items-center mt-2'>
                        <div>{device.rating}</div>
                        <Image width={18} height={18} src={star}/>
                    </div>
                </div>
                <div>{device.name}</div>
            </Card>
       </Col>
    );
};

export default DeviceItem;