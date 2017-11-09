window.onload = function () {
    /*haciendo referencia a un elemento de la tabla*/
  var board = document.querySelector('.board.js');

/*añade evento al elemento board-->board.addEventListener
  board.addEventListener ('dbclick', function(event){
    event.target.style.backgroundcolor = 'red';
  });

  board.addEventListener ('click', function(event){
    event.target.style.backgroundcolor = 'red';
  });

  board.addEventListener ('dbclick', function(event){
    event.target.style.backgroundcolor = 'yellow';

  board.addEventListener ('click', function(event){
    event.target.innerHTML = '<h1>X</h1>';

    board.addEventListener ('click', function(event){
      event.target.textContent = 'x';

      function addX(event) {
        event.target.textContent = 'X';
      }
*/

  board.addEventListener('click',addX);
};

/*var centinel = false;

function addX(event) {
  if(centinel)
  event.target.textContent = 'X';
  centinel =false;
} else {
  event.target.textContent = 'O';
  centinel = true;
}

}*/

var centinel = true;

function addX(event) {
  if(centinel)
  event.target.textContent = 'X';
  else
  event.target.textContent = 'O';

  centinel = !centinel;
}
}
