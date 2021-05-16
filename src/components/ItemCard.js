import { Button } from 'reactstrap';
import React from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import Onion from '../images/Onion.jpeg'


import './../index.css';


const ItemCard = (props) => {
  return (
    <div>
      <Card className="itemCardWidth">
        <div className="d-flex">
          <img width="100%" src={Onion} alt=" cap" />
          <CardBody>
            <CardTitle tag="h5">Onion</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">1 KG</CardSubtitle>
          </CardBody>
        </div>
        <CardBody className="text-center">
          <Button>Add to order</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ItemCard;