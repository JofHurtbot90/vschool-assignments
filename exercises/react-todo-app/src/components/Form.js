import React, {Component} from 'react';
import {
  Form,
  FormGroup,
  Col,
  FormControl,
  Checkbox,
  ControlLabel,
  Button
} from 'react-bootstrap';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      price: '',
      imgURL: '',
      completed: false

    }

    this.updateInputs = this.updateInputs.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  updateInputs(e) {
    if (e.target.type === 'checkbox') {
      this.setState({completed: e.target.checked});
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  }

  submitForm(e) {
    e.preventDefault()
    this.props.newform(this.state);
  }

  render() {
    return (

      <Form onSubmit={this.submitForm} horizontal="horizontal">
      <FormGroup>
        <Col componentClass={ControlLabel} sm={2}>
          Title
        </Col>
        <Col sm={5}>
          <FormControl required="required" onChange={this.updateInputs} name='title' placeholder='Title'/>
        </Col>
      </FormGroup>

      <FormGroup>
        <Col componentClass={ControlLabel} sm={2}>
          Description
        </Col>
        <Col sm={10}>
          <FormControl minLength='3' onChange={this.updateInputs} name='description' placeholder='Description'/>
        </Col>
      </FormGroup>

      <FormGroup>
        <Col componentClass={ControlLabel} sm={2}>
          Image URL
        </Col>
        <Col sm={10}>
          <FormControl onChange={this.updateInputs} name='imgURL'/>
        </Col>
      </FormGroup>

      <FormGroup>
        <Col componentClass={ControlLabel} sm={2}>
          Price
        </Col>
        <Col sm={2}>
          <FormControl onChange={this.updateInputs} name='price' placeholder='Price'/>
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Checkbox onChange={this.updateInputs} name='completed'>Completed</Checkbox>
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Button type='submit'>
            Add Todo
          </Button>
        </Col>
      </FormGroup>
    </Form>)
  }
}
export default Form;
