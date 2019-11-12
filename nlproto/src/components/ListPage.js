var React=require('react');

import NLList from './NLList.js'
import * as DB from '../pseudoDB.js'

class ListPage extends React.Component{
  constructor(props={}){
    super(props);
    this.pageType=Object.keys(props.listValue)[0];
    this.pageValue=props.listValue[this.pageType];
    this.algos=this.loadAlgos()
  }

  loadAlgos(){
    if(this.pageType==='taxonomy'){
      this.headerTitle=`${this.pageValue} Taxonomy`;
      return DB.getAlgosByTaxonomy(this.pageValue);
    }
    if(this.pageType==='knownUses'){
      this.headerTitle=`Known Uses in ${this.pageValue}`;
      return DB.getAlgosByUses(this.pageValue);
    }
  }
  render(){
    console.log(this.algos);
    return (<div className="listpage">
      <h2>Algorithms with {this.headerTitle}</h2>
      <NLList listType="algo" items={this.algos} />
    </div>
    );
  }
}

export default ListPage;
