var React=require('react');

import NLLink from './NLLink.js';

class NLList extends React.Component{
  constructor(props={}){
    super(props);
    this.linkProps={}

    switch(this.props.listType){
      case 'taxonomy':
      case 'knownUses':
        this.linkProps={
          screen: 'list',
          listType: 'algos',
        }
        break;
        case 'algo':
        this.linkProps={
          screen:'quad'
        }
    }
  }

  render(){
    let renderItems=[];
    let listKey= 'inalid';
    if(this.props.listType==='taxonomy'){
      listKey='taxonomy'
    }else if(this.props.listType==='knownUses'){
      listKey='knownUses';
    }

    this.props.items.forEach((item, index) =>{
      let linkProps= {...this.linkProps};
      linkProps.listValue={}
      linkProps.listValue[listKey]=item
      linkProps.algo= item;
      linkProps.key=index;
      renderItems.push( <NLLink {...linkProps}>{item}</NLLink>)
    });

    return (<div className="list">
      {renderItems}
    </div>);

  }
}

export default NLList;
