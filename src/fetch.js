import React, { Component } from "react";
import './fetch.css';
import {
  InputGroup, InputGroupAddon, Input,
  Container, Row, Col,
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class FetchRandomUser extends React.Component {

  constructor(props) {
    super(props);
    this.toggleDiv = this.toggleDiv.bind(this);
    this.nextOne = this.nextOne.bind(this);
  }

  state = {
    loading: true,
    person: null,
    show: false,
    index: 0,
    avatar: "",
    name: "",
    about: "",
    data: null,
  };

  async componentDidMount() {
    const url = "http://localhost:8000/users/";
    const response = await fetch(url);
    const info = await response.json();
    this.setState({
      data: info,
      person: info[this.state.index],
      avatar: info[this.state.index].fields.avatar,
      id: info[this.state.index].pk,
      name: info[this.state.index].fields.name,
      about: info[this.state.index].fields.about,
      loading: false
    });
  }

  nextOne = () => {
    { console.log(this.state.index) }
    this.setState({ index: this.state.index + 1 })
    if (this.state.index >= this.state.data.length) 
      return;
    this.setState({ name: this.state.data[this.state.index].fields.name })
    this.setState({ avatar: this.state.data[this.state.index].fields.avatar })
    this.setState({ about: this.state.data[this.state.index].fields.about })
    this.setState({ pk: this.state.data[this.state.index].pk })
  }

  toggleDiv = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Card className="card-style">
                <a href={"https://kitsu.io/users/" + this.state.id}><img className="img-style" src={this.state.avatar} alt="Card image cap" /></a>
                <CardBody>
                  <CardTitle>Name: {this.state.name}</CardTitle>
                  <CardSubtitle>About: {this.state.about}</CardSubtitle>
                  <div><Button color="success" onClick={this.toggleDiv}>Waifu</Button>{' '}<Button color="danger" onClick={this.nextOne}>Laifu</Button></div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
        {this.state.show && <TextBox />}
      </div >
    );
  }
}

class TextBox extends Component {
  render() {
    return (
      <InputGroup>
        <InputGroupAddon addonType="prepend">Matched!</InputGroupAddon>
        <Input placeholder="Start a chat with 友達" />
      </InputGroup>
    )
  }
}