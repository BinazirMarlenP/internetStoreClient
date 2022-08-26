import React from 'react';
import { Container, Row , Col, Card, Button, Image} from 'react-bootstrap';
import bigStar from '../assets/bigStar.png'

const DevicePage = () => {
    const device =  {id: 1, name: 'Iphone 12pro', price: 2500, rating: 5, img: 'https://media.wired.com/photos/5f8dfd6db9910f1848191341/master/w_2400,h_1800,c_limit/Gear-iPhone-12-Pro-rear-pacific-blue-SOURCE-Apple.jpg'}
    const description = [
        {id:1, title: 'Оперативная память', description: '5гб'},
        {id:2, title: 'Камера', description: '12mp'},
        {id:3, title: 'Процессор', description: 'Ryzen 5'},
        {id:4, title: 'кол-во ядер', description: '2'},
        {id:5, title: 'аккумулятор', description: '4000'},
    ]
    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2 className='text-center'>{device.name}</h2>
                        <div className='d-flex justify-content-center align-items-center'
                        style={{background: `url(${bigStar}) no-repeat center center`, width: 240, height:240, backgroundSize: 'cover', fontSize:64}}
                        >{device.rating}</div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className='d-flex flex-column align-items-center justify-content-around'
                style={{width: 300 , height:300, fontSize:32, border:'5px solid lightgrey'}}>
                        <h3>От: {device.price} $</h3>
                        <Button variant={'outline-dark'}> Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-3'>
                <h1> Характеристики</h1>
                {description.map((info, index)=>
                <Row key={info.id} style={{background: index%2===0? 'lightgrey':'transparent', padding:10}}>
                    {info.title}:{info.description}
                </Row>)}
            </Row>
        </Container>
    );
};

export default DevicePage;