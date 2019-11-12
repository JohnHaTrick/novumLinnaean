
import {GO_HOME, GO_LIST, GO_QUAD, GO_RESEARCH} from './actionTypes.js';


function appReducer (state={}, action){
  switch(action.type){
  case GO_HOME:
    return {
      screen: 'home'
    };

  case GO_QUAD:
      return {
        screen: 'quad',
        algo: action.algo
      };

  case GO_RESEARCH:
      return {
        screen: 'research',
        algo: action.algo,
        filter: action.filter
      };
  case GO_LIST:
    const {listType, listValue}=action;
    return {
      screen: 'list',
      listType: listType,
      listValue: listValue

    }
    default:
    console.log("Bad Dispatch");
    console.log(action);
    return state;
  }
}

export default appReducer;
