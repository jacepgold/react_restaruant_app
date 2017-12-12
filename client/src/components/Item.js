import React, { Component } from 'react';

class Item extends Component {

  deleteItem = () => {
    axios.delete(`/api/menu_items/${this.state.items.id}`)
      .then(res => {
        this.props.history.push('/menu')
      })
      .catch(err => {
        console.log(err)
    });
  }
  render() {
    return(
      <h1>Returning a Menu Item</h1>
    )
  }
}

export default Item;

// <Card>
//   <Card.Content>
//     <Image floated='right' size='mini' src='http://www.simplyrecipes.com/wp-content/uploads/2013/02/pasta-puttanesca-horiz-c-1800.jpg' />
//     <Card.Header>
//       {name}
//     </Card.Header>
//     <Card.Meta>
//       Friends of Elliot
//             </Card.Meta>
//     <Card.Description>
//       Steve wants to add you to the group <strong>best friends</strong>
//     </Card.Description>
//   </Card.Content>
//   <Card.Content extra>
//     <div className='ui two buttons'>
//       <Button basic color='green'>Approve</Button>
//       <Button basic color='red'>Decline</Button>
//     </div>
//   </Card.Content>
// </Card>