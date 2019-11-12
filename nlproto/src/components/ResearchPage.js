var React=require('react');

import NLLink from './NLLink.js';

class ResearchPage extends React.Component{
  constructor(props={}){
    super(props);
  }

  render(){

    return(
      <div className="research-page">
        <h2>{this.props.filter} Research for {this.props.algo}</h2>
        <span className="nl-note">Note: Example placeholders, to be built on research portfolio</span>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <NLLink screen="quad" algo={this.props.algo}>Back</NLLink>
      </div>
    )

  }
}

export default ResearchPage;
