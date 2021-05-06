import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const KCard = (props) => {
    const {image, title, content} = props
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>{content}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default KCard;