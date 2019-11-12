var React=require('react');

import NLList from './NLList.js'
import NameSearch from './NameSearch.js';

import * as DB from '../pseudoDB.js';


class HomePage extends React.Component{
  constructor(props={}){
  super(props);
  }

  render(){
    let uses=DB.getKnownUses();
    let taxonomies=DB.getTaxonomies();
    return (
      <div className="nl-home-page">
        <div className="search">
        </div>
        <div className="quad half top-half">
          <div className="known-uses">
            <h3>Find by Known Uses</h3>
            <NLList listType="knownUses" items={uses} />
          </div>
          <div className="taxonomies">
            <h3>Find by Taxonomy</h3>
            <NLList listType="taxonomy" items={taxonomies} />
          </div>
        </div>
      </div>
    )
  }
}


export default HomePage;
