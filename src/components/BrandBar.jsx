import { observer } from 'mobx-react-lite';
import React, { useContext }  from 'react';
import { Card, Row } from 'react-bootstrap';
import { Context } from '..';


const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className="d-flex">
            {device.brands.map(brand=>
                <Card
                style={{cursor: 'pointer', border: '2px solid grey', maxWidth: '150px'}}
                key={brand.id}
                className="p-3 m-2"
                onClick={()=>device.setSelectedBrand(brand)}
                border={brand.id===device.selectedBrand.id? 'danger': 'light'}>{brand.name}</Card>
                )}
        </Row>
    );
});

export default BrandBar;