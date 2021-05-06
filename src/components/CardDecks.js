import React from 'react';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

import VeggiesPortrait from '../images/VeggiesPortrait.jpeg'
import Whatsapp from '../images/Whatsapp.jpeg'
import Delivery from '../images/Delivery.jpeg'

const CardDecks = (props) => {
  return (
    <CardDeck className="d-flex justify-content-around mt-5">
      <Card>
        <CardImg top width="100%" src={Whatsapp} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Place your orders easily.</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>We take orders on Whatsapp.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={VeggiesPortrait} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src={Delivery} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This card has supporting .</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      {/* <Card>
        <CardImg top width="100%" src="/assets/256x186.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card> */}
      
    </CardDeck>
  );
};

export default CardDecks;