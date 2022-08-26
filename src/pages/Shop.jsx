import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { useContext } from 'react';
import { Context } from '..';
import { useEffect } from 'react';
import { fetchTypes } from '../http/deviceAPI';
import {observer} from 'mobx-react-lite';

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(()=>{
        fetchTypes().then(data=>device.setTypes(data))
    },[])
    return (
        <Container>
            <Row className='mt-3'>
                <Col md={3} >
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;