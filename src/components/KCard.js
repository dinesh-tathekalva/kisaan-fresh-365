import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const KCard = (props) => {
    const { image, title, content, subTitle, showBtn } = props
    return (
        <div className="mb-3">
            <Card>
                <CardImg top width="100%" src={image} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{title}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{subTitle}</CardSubtitle>
                    <CardText>{content}</CardText>
                    {showBtn && <Button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://wa.me/c/919493233615';
                    }}>Catalog</Button>}
                </CardBody>
            </Card>
        </div>
    );
};

export default KCard;