import React, {Component } from 'react';
import {ProgressBar} from 'react-bootstrap';
//import UserMap from './UserMap';
// import UserMap from './UserMap';
import {PieChart, Pie, Legend, Tooltip, BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid} from 'recharts';
 // import StockImg from '../img/stock_img.jpg';
import { Input, Menu, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';



  class UserContainer extends Component {

   state = { activeItem: 'home' }
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
      const { activeItem } = this.state;

      const data01 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                        {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
                        {name: 'Group E', value: 278}, {name: 'Group F', value: 189}]

      const data02 = [{name: 'Group A', value: 2400}, {name: 'Group B', value: 4567},
                        {name: 'Group C', value: 1398}, {name: 'Group D', value: 9800},
                        {name: 'Group E', value: 3908}, {name: 'Group F', value: 4800}];
                        const data = [
      {name: '1', uv: 300, pv: 456},
      {name: '2', uv: -145, pv: 230},
      {name: '3', uv: -100, pv: 345},
      {name: '4', uv: -8, pv: 450},
      {name: '5', uv: 100, pv: 321},
      {name: '6', uv: 9, pv: 235},
      {name: '7', uv: 53, pv: 267},
      {name: '8', uv: 252, pv: -378},
      {name: '9', uv: 79, pv: -210},
      {name: '10', uv: 294, pv: -23},
      {name: '12', uv: 43, pv: 45},
      {name: '13', uv: -74, pv: 90},
      {name: '14', uv: -71, pv: 130},
      {name: '15', uv: -117, pv: 11},
      {name: '16', uv: -186, pv: 107},
      {name: '17', uv: -16, pv: 926},
      {name: '18', uv: -125, pv: 653},
      {name: '19', uv: 222, pv: 366},
      {name: '20', uv: 372, pv: 486},
      {name: '21', uv: 182, pv: 512},
      {name: '22', uv: 164, pv: 302},
      {name: '23', uv: 316, pv: 425},
      {name: '24', uv: 131, pv: 467},
      {name: '25', uv: 291, pv: -190},
      {name: '26', uv: -47, pv: 194},
      {name: '27', uv: -415, pv: 371},
      {name: '28', uv: -182, pv: 376},
      {name: '29', uv: -93, pv: 295},
      {name: '30', uv: -99, pv: 322},
      {name: '31', uv: -52, pv: 246},
      {name: '32', uv: 154, pv: 33},
      {name: '33', uv: 205, pv: 354},
      {name: '34', uv: 70, pv: 258},
      {name: '35', uv: -25, pv: 359},
      {name: '36', uv: -59, pv: 192},
      {name: '37', uv: -63, pv: 464},
      {name: '38', uv: -91, pv: -2},
      {name: '39', uv: -66, pv: 154},
];
    const data222 = [
      {name: 'Page A', uv: 4000, female: 2400, male: 2400},
      {name: 'Page B', uv: 3000, female: 1398, male: 2210},
      {name: 'Page C', uv: 2000, female: 9800, male: 2290},
      {name: 'Page D', uv: 2780, female: 3908, male: 2000},
      {name: 'Page E', uv: 1890, female: 4800, male: 2181},
      {name: 'Page F', uv: 2390, female: 3800, male: 2500},
      {name: 'Page G', uv: 3490, female: 4300, male: 2100},
];

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




  <div>
    <ProgressBar striped attive bsStyle="success" now={40} />
    <ProgressBar striped bsStyle="info" now={20} />
    <ProgressBar striped bsStyle="warning" now={60} />
    <ProgressBar striped bsStyle="danger" now={80} />
  </div>
  <div>
  <PieChart width={800} height={400}>
    <Pie isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#8884d8" label/>
    <Pie data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d"/>
    <Tooltip/>
   </PieChart>
  </div>
  <BarChart width={600} height={300} data={data}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}>
   <XAxis dataKey="name"/>
   <YAxis/>
   <CartesianGrid strokeDasharray="3 3"/>
   <Tooltip/>
   <Legend verticalAlign="top" wrapperStyle={{lineHeight: '40px'}}/>
   <ReferenceLine y={0} stroke='#000'/>
   <Brush dataKey='name' height={30} stroke="#8884d8"/>
   <Bar dataKey="pv" fill="#8884d8" />
   <Bar dataKey="uv" fill="#82ca9d" />
  </BarChart>
  </div>

        </div>
      )
  }
}

export default UserContainer;
