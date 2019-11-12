
import {GO_HOME, GO_LIST, GO_QUAD, GO_RESEARCH} from './actionTypes.js';

export const goHome=()=>{
  return {
    type: GO_HOME
  };
}

export const goList=(listType, listValue)=>{
  return {
    type: GO_LIST,
    listType: listType,
    listValue: listValue
  };
}

export const goQuad=(algo)=>{
  return {
    type: GO_QUAD,
    algo: algo
  };
}

export const goResearch=(algo, filter)=>{
  return {
    type: GO_RESEARCH,
    algo: algo,
    filter: filter
  };
}
