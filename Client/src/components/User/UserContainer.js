import React, {Component } from 'react';
import {ProgressBar} from 'react-bootstrap/lib/Button';
//import UserMap from './UserMap';
import UserMap from './components/User/UserMap';
import {PieChart, Pie, Legend, Tooltip} from 'Recharts';

//const {PieChart, Pie, Legend, Tooltip} = Recharts;
 // import StockImg from '../img/stock_img.jpg';
import { Input, Menu, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const data01 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
                  {name: 'Group E', value: 278}, {name: 'Group F', value: 189}]

const data02 = [{name: 'Group A', value: 2400}, {name: 'Group B', value: 4567},
                  {name: 'Group C', value: 1398}, {name: 'Group D', value: 9800},
                  {name: 'Group E', value: 3908}, {name: 'Group F', value: 4800}];
class UserContainer extends Component {
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
      const { activeItem } = this.state

        return (
        <div className="home-container">
        <div>
  <Menu pointing>
    <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
    <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />
    <Menu.Item name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
    <Menu.Menu position='right'>
      <Menu.Item>
        <Input icon='search' placeholder='Search...' />
      </Menu.Item>
    </Menu.Menu>
  </Menu>

  <Segment>
    // <img src='/assets/images/wireframe/paragraph.png' />
  </Segment>
</div>

<div>
<div>
  <ProgressBar striped attive bsStyle="success" now={40} />
  <ProgressBar striped bsStyle="info" now={20} />
  <ProgressBar striped bsStyle="warning" now={60} />
  <ProgressBar striped bsStyle="danger" now={80} />
</div>;
</div>
<UserMap />

<PieChart width={800} height={400}>
  <Pie isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
  <Pie data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d"/>
  <Tooltip/>
 </PieChart>
        </div>
        )
    }
}

export default UserContainer;
