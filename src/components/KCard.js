import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const KCard = (props) => {
    const {image, title, content, subTitle} = props
  return (
    <div className="mb-3">
      <Card>
        <CardImg top width="100%" src={image} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{subTitle}</CardSubtitle>
          <CardText>{content}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default KCard;