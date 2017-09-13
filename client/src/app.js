
var AjaxRequest = require('./services/ajax_request.js');
var AnimalsView = require('./views/animals_view.js');


function app(){
  var animalsData = new AjaxRequest('http://localhost:3000/api/animals');
  var animalsView = new AnimalsView(animalsData);
  animalsData.get(animalsView.render);

  var form = document.querySelector('#animals');

  form.addEventListener('submit', function(e){
    e.preventDefault();

    var newAnimal = {
      name: this.fname.value,
      type: this.type.value,
      // enumerate to put in array.
      feedingTimes: this.feedingtimes.value,
    }
    console.log(newAnimal)
    animalsData.post(animalsView.render, newAnimal);
  })
}

window.addEventListener('load', app);