import React, { Component } from 'react'
import { Segment, Button, Card, Image } from 'semantic-ui-react';
import axios from 'axios';

class Menu extends Component {
  state = { items: [] }

  componentDidMount() {
    const itemId = this.props.match.params.id;

    axios.get('/api/menu_items/')
      .then(res => {
        this.setState({ items: res.data })
      }).catch(err => {
        console.log(`Error - ${err}`)
    });
  }

  displayItems = () => {
    return  this.state.items.map( item => {
      return(
        <Card>
          <Card.Content>
            <Image floated='right' src='http://www.simplyrecipes.com/wp-content/uploads/2013/02/pasta-puttanesca-horiz-c-1800.jpg' />
            <Card.Header>
              { item.id }
              { item.name }
            </Card.Header>
            <Card.Meta>
              ${ item.price }
            </Card.Meta>
            <Card.Description>
              { item.description }
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui three buttons'>
              <Button basic color='blue'>View</Button>
              <Button basic color='green'>Edit</Button>
              <Button basic color='red' onClick={this.deleteItem}>Delete</Button>
            </div>
          </Card.Content>
        </Card>
      )
    });
  }

  render() {
    return(
      <Segment>
        <h1>Menu</h1>
        { this.displayItems() }
      </Segment>
    )
  }
}

export default Menu;
