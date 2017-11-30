import React, {Component} from 'react';
import { Switch, Route, Link } from 'react-router-dom';

class Services extends Component{
  constructor(){
    super();
    this.state = {
      services: []
    }
  }

  componentDidMount(){
    this.setState({
      services: [
        {
          name: 'Lawn Mowing',
          _id: '123',
          price: 20
        },
        {
          name: 'Leaf Raking',
          _id: '234',
          price: 25
        },
        {
          name: 'Sprinkler Maintenance',
          _id: '345',
          price: 100
        }
      ]
    })
  }

  render(){
    return(
      <div>
        <div className='services-list'>
          {<Link to='name'>Lawn Mowing</Link>}
          {<Link to='name'>Leaf Raking</Link>}
          {<Link to='name'>Sprinkler Maintenance</Link>}
          {this.state.services.map(service => <Link to={`/services/${service._id}`} key={service._id}>{service.name}</Link>)}

        </div>

        <Switch>
          <Route path='/services/:serviceId' component={ServiceDetail}/>
        </Switch>
      </div>
    )
  }
}


export default Services;
