var React=require('react');

import NLList from './NLList.js'
import NLLink from './NLLink.js'

import * as DB from '../pseudoDB.js';


class QuadPage extends React.Component{

  constructor(props={}){
    super(props);

    this.algo=DB.getAlgo(props.algo)
  }

  render(){

    return (
      <div className="quad-page">
      <h2>{this.props.algo}</h2>
        <div className="quad half top-half">
          <div className="quad quarter left">
            <h3>Research</h3>
              <NLLink screen="research" algo={this.algo.name} filter="Available">## Available Research</NLLink>
              <NLLink screen="research" algo={this.algo.name} filter="Funded">## Funded Research</NLLink>
              <span className="nl-note"> Note: Example placeholders. To be built on research portfolio</span>
          </div>
          <div className="quad quarter right">
            <h3>Known Uses</h3>
            <NLList items={this.algo.uses} listType="knownUses"/>
          </div>
        </div>
        <div className="quad half botom-half">
          <div className="quad quarter left">
            <h3>Mechanism</h3>
            <p>{this.algo.mechanism}</p>
          </div>
          <div className="quad quarter right">
            <h3>Taxonomy</h3>
            <NLList items={this.algo.tax} listType="taxonomy"/>
          </div>
        </div>
      </div>
    )
  }

}

export default QuadPage;
