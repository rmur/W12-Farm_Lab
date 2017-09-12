use farm;

db.animals.insert([
  {
    name:'Charlie',
    type:'Horse',
    feedingTimes: [8,12,18]
  }, 
  {
    name:'Lucy',
    type:'Goose',
    feedingTimes: [6,10,12]
  }
  ])