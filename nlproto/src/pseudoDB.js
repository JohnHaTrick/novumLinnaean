import aiML from './aiML.js'

export function getAlgo(algo){
  return aiML.filter((entry=>entry.name===algo))[0];
}

export function getAlgosByUses(knownUse){
  let algos=aiML.filter((entry)=>{
    return entry.uses.indexOf(knownUse) !== -1;
  });

  return algos.map((entry)=>{
    return entry.name;
  })
}

export function getAlgosByTaxonomy(taxonomy){
  let algos=aiML.filter(entry=>{
    return entry.tax.indexOf(taxonomy) !==-1;
  });

  return algos.map((entry)=>{
    return entry.name;
  })
}

export function getKnownUses(){
  let uses=aiML.map((value, index)=>{
    return value.uses;
  });

  return Array.from(new Set([].concat(...uses)));
}

export function getTaxonomies(){
  let taxes=aiML.map((value)=>{
    return value.tax;
  });

  return Array.from(new Set([].concat(...taxes)));
}
