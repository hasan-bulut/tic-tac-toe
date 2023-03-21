let table = [
  0, 0, 0,
  0, 0, 0,
  0, 0, 0,
]


function fill(isX, id) {
  if (table[id] == 0) {
    table[id] = isX ? 1 : 2;
    document.getElementById("td" + id).innerHTML = isX ? "X" : "O";
    document.getElementById("td" + id).classList.add(isX ? "x" : "o");
    return true
  }
  return false
}

function check() {
  for (let row = 0; row < 3; row++) {
    let col1 = table[row * 3];
    let col2 = table[row * 3 + 1];
    let col3 = table[row * 3 + 2];
    if (col1 != 0 && col1 == col2 && col1 == col3) {
      return true;
    }
  }

  for (let col = 0; col < 3; col++) {
    let row1 = table[col % 3];
    let row2 = table[col % 3 + 3];
    let row3 = table[col % 3 + 6];
    if (row1 != 0 && row1 == row2 && row1 == row3) {
      return true;
    }
  }

  if (table[0] != 0 && table[0] == table[4] && table[0] == table[8]) {
    return true;
  }

  if (table[2] != 0 && table[2] == table[4] && table[2] == table[6]) {
    return true;
  }
}
let modal = document.getElementById('myModal');

function alertMessage(player) {
  modal.style.display = "block";
  document.getElementById("winner").innerHTML = "Winner: " + player;
}

let player1 = true;

let counter = 0;

function draw(id) {
  if (fill(player1, id)) {
    if (check()) {
      alertMessage(player1 ? "X" : "O")
    }
    player1 = !player1;
    counter++;
  }
  if (counter == 9) {
    alertMessage("None")
  }
}


let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
  location.reload();
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    location.reload();
  }
}