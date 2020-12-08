/* eslint-disable react/style-prop-object */
import React from 'react';
import Home from './components/Home.jsx';
import Percent from './components/Percent.jsx';

const nav_arr = [
  {
    id: 'home',
    name: '首页',
    // ”别直接写成 Home ，除非此时 Home 是一个function之类的“
    comp: <Home key='home'/>
  },{
    id: 'percent',
    name: '历史数据的百分比可视化',
    comp: <Percent key='home'/>
  },
]

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nav_id: 'home',
    }
  }

  render() {
    return (
      <>
        <div style={{display: "flex", justifyContent: 'space-around', marginTop: '20px'}}>
          {
            nav_arr.map(item => <div key={item.id} 
              style={{cursor: 'pointer', color: this.state.nav_id === item.id && 'red'}}
              onClick={() => this.onSwitchNav(item.id)}>
              {item.name}
            </div>)
          }
        </div>
        {/* 根据 nav_id的不同切换不同的组件去展示。 */}
        {
          nav_arr.map(item => (
            this.state.nav_id === item.id && item.comp
          ))
        }
      </>
    )
  }

  onSwitchNav(id) {
    console.log(id);
    this.setState({
      nav_id: id,
    })
  }
}