import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const FormSelect = (props) => {
  return (
    <Form>
      <FormGroup >
         
        <Label for="selectQuantity">Quantity </Label>
        <Input type="select" name="select" id="selectQuantity">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
        </Input>
      </FormGroup>
    </Form>
  );
}

export default FormSelect;