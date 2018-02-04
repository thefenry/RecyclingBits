import React, {Component } from 'react';
import {Form, Grid, Divider, Header, Progress, Button, Card, Image, Input, Menu, Segment  } from 'semantic-ui-react'
import {PieChart, Pie, Legend, Tooltip, BarChart, Bar, Brush, ReferenceLine, XAxis, YAxis, CartesianGrid} from 'recharts';
import 'semantic-ui-css/semantic.min.css';
import '../../css/Shared.css';
import $ from 'jquery'

import UserMap from './UserMap';


  class UserContainer extends Component {

   state = { activeItem: 'user', result: [], src: "" }
 getResponse = (fileData) => {
      let constructed_url = "";
      console.log("fileData", fileData)
     $.ajax({
      url: "https://southcentralus.api.cognitive.microsoft.com/customvision/v1.1/Prediction/f263980e-3b19-49b8-8444-d97a0b67ed2b/image?iterationId=b17e369b-d99b-4a3b-b1ea-7ade0bfd1b24",
      data: fileData.target.files[0],
      processData: false,
      contentType: "application/octet-streama",
      headers: {
        'Prediction-key': 'd8fab3898adc430c80ad1669c875c4ff'
      },
      type: 'POST',
      success: function(response) {
        var result = response["Predictions"];
          this.setState({result: result});
        console.log(result);
      }.bind(this),
      error: function(error) {
      }
    });
console.log(fileData.target.files)
          if (fileData.target.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                this.setState({src: e.target.result})
            }.bind(this);

            reader.readAsDataURL(fileData.target.files[0]);
        }
    }
    render() {
      const { activeItem } = this.state;

      const data01 = [{name: 'Paper', value: 400}, {name: 'Metal', value: 300},
                        {name: 'Plactic', value: 300}]

      const data02 = [{name: 'Group A', value: 2400}, {name: 'Group B', value: 4567},
                        {name: 'Group C', value: 1398}, {name: 'Group D', value: 9800},
                        {name: 'Group E', value: 3908}, {name: 'Group F', value: 4800}];

const datarecycling = [
      {name: '01/2017', Paper: 4000, Metal: 1100, Plastic : 2400, amt: 2400},
      {name: '02/2017', Paper: 3000, Metal: 1950, Plastic : 1398, amt: 2210},
      {name: '03/2017', Paper: 2000, Metal: 3652, Plastic : 9800, amt: 2290},
      {name: '04/2017', Paper: 2780, Metal: 4500, Plastic : 3908, amt: 2000},
      {name: '05/2017', Paper: 1890, Metal: 5600, Plastic : 4800, amt: 2181},
      {name: '06/2017', Paper: 2390, Metal: 1200, Plastic : 3800, amt: 2500},
      {name: '07/2017', Paper: 3490, Metal: 4450, Plastic : 4300, amt: 2100},
];
        return (
        <div className="home-container">



  <div>
  <Menu pointing secondary className="ct-menu">
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='User' active={activeItem === 'user'} onClick={this.handleItemClick} />
          <Menu.Item name='Upload Image' active={activeItem === 'UploadImage'} onClick={this.handleItemClick} />
          <Menu.Item name='Map' active={activeItem === 'map'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>

        <Segment>
          <Header as='h2' icon='trophy'  color='purple' content='Current Score' />

        </Segment>
      </div>


  <Card.Group>
<Card>
<Card.Content>
 <Card.Header>
  
Waste Paper Recycling &
Cardboard Recycling
 </Card.Header>
 <Card.Meta>
 </Card.Meta>
 <Card.Description>
  Industry and commerce dispose of approximately 8.5 million tonnes of paper and cardboard in the UK each year! Every tonne of recycled cardboard saves 17 trees, 2 cubic yards of landfill capacity and 4100 Kw/hours of electricity!
 </Card.Description>
</Card.Content>
<Card.Content>
<Progress percent={85} warning>
    Score: 95
  </Progress>
</Card.Content>
<Card.Content extra>
 <div className='ui two buttons'>
   <Button basic color='green'>+</Button>
   <Button basic color='red'>-</Button>
 </div>
</Card.Content>
</Card>
<Card>
<Card.Content>
 <Card.Header>
   Metal Recycling
 </Card.Header>
 <Card.Meta>
 </Card.Meta>
 <Card.Description>
All grades of metal can be recycled for future use. Before it is recycled, metals are sorted into ferous and non-ferrous types. Ferrous metal includes Iron and Steel, non-ferrous includes aluminium, copper, stainless-steel, brass and lead to name but a few. </Card.Description>
</Card.Content>
<Card.Content>
    <Progress percent={2} inverted progress error>
      Low
    </Progress>
</Card.Content>

<Card.Content extra>
 <div className='ui two buttons'>
   <Button basic color='green'>+</Button>
   <Button basic color='red'>-</Button>
 </div>
</Card.Content>
</Card>
<Card>
<Card.Content>
 <Card.Header>
   Plastic Recycling

 </Card.Header>
 <Card.Meta>
  
 </Card.Meta>
 <Card.Description>
There are about 50 different groups of plastics, with hundreds of different varieties. Most types of plastic are recyclable. Because most plastics are non-degradable, they take a long time to break down, possibly up to hundreds of years - although no-one knows for certain as plastics haven't existed for long enough.
 </Card.Description>
</Card.Content>
<Card.Content>
<Progress percent={95} success>
    Score: 95
  </Progress>

</Card.Content>
<Card.Content extra>
 <div className='ui two buttons'>
   <Button basic color='green'>+</Button>
   <Button basic color='red'>-</Button>
 </div>

</Card.Content>
</Card>
</Card.Group>
        <Segment>
<Form>
    <Header as='h2' color='purple' content='Get Result' />

    <Form.Group widths='equal'>
    <input type="file" onChange={this.getResponse}/>
    </Form.Group> 
    </Form>
    <div className="imagePanel">
   {this.state.src&&
     <img src={this.state.src} height="200" />
    } 
    {this.state.src&&
    <div className='ui two buttons'>
      <Button basic color='green'>Recycling</Button>
      <Button basic color='red'>Not Recycling</Button>
    </div>
    }

<div className='tags'>
    {this.state&&this.state.result.map(x=> 
      {
return (
        <div className='tag'>{x.Tag} ({(x.Probability * 100).toFixed(2)})</div>

    )

      })
    }
        </div>

    </div>
    <Divider horizontal>Performance</Divider>





    <Grid columns='two' divided>
        <Grid.Row>
          <Grid.Column>
          <Header as='h4' color='purple' content='Overall Recycling Itmes' />

      <div>
      <PieChart width={800} height={400}>
        <Pie isAnimationActive={false} data={data01} cx={200} cy={200} outerRadius={80} fill="#9541f4" label/>
        <Pie data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#42d4f4"/>
        <Tooltip/>
      </PieChart>
      </div>

          </Grid.Column>
          <Grid.Column>
                    <Header as='h4' color='purple' content='This Year v.s. Last Year' />

          <BarChart width={600} height={300} data={datarecycling}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="Metal" fill="#f441ee" />
          <Bar dataKey="Paper" fill="#9541f4" />
          <Bar dataKey="Plastic" fill="#42d4f4" />
          </BarChart>
          </Grid.Column>       
        </Grid.Row>     
      </Grid>
        </Segment>

        </div>
      )
  }
}

export default UserContainer;
