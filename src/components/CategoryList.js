import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const CategoryList = (props) => {
  return (
    <div>
      {/* <h3>Anchors </h3> */}
      <ListGroup>
        <ListGroupItem active tag="a" href="#" action>Cras justo odio</ListGroupItem>
        <ListGroupItem tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
        <ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem disabled tag="a" href="#" action>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <p />
      {/* <h3>Buttons </h3> */}
      {/* <ListGroup>
        <ListGroupItem active tag="button" action>Cras justo odio</ListGroupItem>
        <ListGroupItem tag="button" action>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem tag="button" action>Morbi leo risus</ListGroupItem>
        <ListGroupItem tag="button" action>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem disabled tag="button" action>Vestibulum at eros</ListGroupItem>
      </ListGroup> */}
    </div>
  );
}

export default CategoryList;