
var React=require('react');

import * as actions from '../actions.js';
import store from '../store.js';

class NLLink extends React.Component{
  constructor(props={}){
    super(props);
    this.onClick=this.onClick.bind(this);
  }

  onClick(){

    switch(this.props.screen){
      case 'home':
        store.dispatch(actions.goHome());
        break;
      case 'list':
        store.dispatch(actions.goList(this.props.listType, this.props.listValue));
        break;
      case 'quad':
        store.dispatch(actions.goQuad(this.props.algo));
        break;
      case 'research':
        store.dispatch(actions.goResearch(this.props.algo, this.props.filter));
        break;
      default:
        alert("Invalid screen property in link: "+this.props.screen);
    }
  }

  render(){
    return <div onClick={this.onClick} className="nl-link">{this.props.children}</div>
  }
}

export default NLLink;
