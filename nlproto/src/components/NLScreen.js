var React=require('react');

import HomePage from './HomePage.js'
import ListPage from './ListPage.js'
import QuadPage from './QuadPage.js'
import ResearchPage from './ResearchPage'

import NLLink from './NLLink.js'

class NLScreen extends React.Component{

  constructor(props={}){
      super(props);
      this.state=props.store.getState();
  }

  componentDidMount(){
    const { store }=this.props;
    this.unsubscribe= store.subscribe(()=> {
      this.setState({...store.getState() })
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render(){
    let page;
    switch(this.state.screen){
      case 'quad':
        page=<QuadPage {...this.state} />
        break;
      case 'research':
        page=<ResearchPage {...this.state} />
        break;
      case 'list':
        page=<ListPage {...this.state} />
        break;
      default:
        page=<HomePage {...this.state} />
    }

    return (
      <div className="nl-screen">
      <h1>Novum Linnaean AI/ML interactive viewer</h1>
      {['quad','research', 'list'].indexOf(this.state.screen) !==-1 && <NLLink screen="home">Back to home</NLLink>}
      <hr/>
      {page}
      </div>
    )

  }
}

export default NLScreen;
