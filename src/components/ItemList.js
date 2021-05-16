import React from 'react';
import { Button, CardBody, CardSubtitle, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
import FormSelect from './FormSelect';

const ItemList = (props) => {
    const { title, image } = props
    return (
        <ListGroup className="mb-1">
            <ListGroupItem className="d-flex">
                <img className="flex-column" width="30%" height="30%" src={image} alt={title} />
                <CardBody>
                    <CardTitle tag="h5">{title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">1 KG</CardSubtitle>
                    <FormSelect />
                    <Button className="text-right mt-1"> Add </Button>
                </CardBody>
            </ListGroupItem>
        </ListGroup>
    );

}

export default ItemList;
