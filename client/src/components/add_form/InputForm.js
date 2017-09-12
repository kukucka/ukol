import React, { Component } from 'react';
import { Form, Input, Dropdown, Rating, Accordion } from 'semantic-ui-react';
import { days } from '../../data/days';
import { months } from '../../data/months';
import { years } from '../../data/years';

import InputField from './InputField';
import DropdownField from './DropdownField';

let InputForm = props => {
  console.log(props.data);
  return (
    <div>
      <h1>Add New Astronaut</h1>
      <Form onSubmit={() => console.log('wow')}>
        <InputField
          name="name"
          holder="Name"
          value={props.data.name}
          onHandleChangeOnInput={props.onHandleChangeOnInput}
        />
        <InputField
          name="surename"
          holder="Surename"
          value={props.data.surename}
          onHandleChangeOnInput={props.onHandleChangeOnInput}
        />
        <InputField
          name="superpower"
          holder="Superpower"
          value={props.data.superpower}
          onHandleChangeOnInput={props.onHandleChangeOnInput}
        />
        <Form.Field required style={{ marginTop: '5px' }}>
          <label>Birth Date</label>
          <Form.Group unstackable>
            <DropdownField holder="Day" name="day" option={days} />
            <DropdownField holder="Month" name="month" option={months} />
            <DropdownField holder="Year" name="year" option={years} />
          </Form.Group>
        </Form.Field>
        <Form.Button primary>Submit</Form.Button>
      </Form>
    </div>
  );
};

// InputForm.propTypes = {};

export default InputForm;
