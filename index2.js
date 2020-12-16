const battleship = () => {
  //assign name variables
  let p1 = prompt("What is your name P1?");
  let p2 = prompt("What is your name P2?");

  let p1Grid = createGrid(4);
  let p2Grid = createGrid(4);

  //initialize players objects
  const players = [
    {
      name: p1,
      shipCount: 0,
      gameBoard: p1Grid, //set up 2D array to make 4x4 grid
    },
    {
      name: p2,
      shipCount: 0,
      gameBoard: p2Grid,
    },
  ];

  //create function that takes a size parameter to create a grid
  function createGrid(size) {
    let grid = [];
    for (i = 0; i < size; i++) {
      grid[i] = [];
      for (j = 0; j < size; j++) {
        grid[i][j] = " 0 ";
      }
    }
    //return grid value
    return grid;
  }

  //create a loop to generate random coordinates for ships and place them as 1's on the grid
  for (i = 0; i < 4; i++) {
    let randX = Math.floor(Math.random() * 3) + 1;
    let randY = Math.floor(Math.random() * 3) + 1;
    for (j = 0; j < 1; j++) {
      if ([randY, randX] !== players[0].gameBoard[i][i]) {
        players[0].gameBoard[i][(randY, randX)] = " 1 ";
        players[0].shipCount++;
      }
    }
  }

  //couldn't figure out how to populate both player grids with different random coordinates, so I split in two seperate loops
  for (i = 0; i < 4; i++) {
    let randX = Math.floor(Math.random() * 3) + 1;
    let randY = Math.floor(Math.random() * 3) + 1;
    for (j = 0; j < 1; j++) {
      if ([randY, randX] !== players[1].gameBoard[i][i]) {
        players[1].gameBoard[i][(randY, randX)] = " 1 ";
        players[1].shipCount++;
      }
    }
  }

  //create a loop to check for spaces with ships
//   for (k = 0; k < p1Grid.length; k++) {
//     for (j = 0; j < players.length; j++) {
//       let strikeX1 = parseInt(prompt("P1: Choose an x coordinate to strike your opponent"));
//       let strikeY1 = parseInt(prompt("P1: Choose a y coordinate to strike your opponent"));
//       if ([strikeY1, strikeX1] == players[1].gameBoard[k][k]) {
//         alert("Direct hit!");
//         players[1].gameBoard[k] = " 0 ";
//         players[1].shipCount --;
//       }
//     }
//   }

//   //second loop for p2 (I know there's got to be a way to loop this for 2 players)
//   for (k = 0; k < p1Grid.length; k++) {
//     for (j = 0; j < players.length; j++) {
//       let strikeX2 = parseInt(prompt("P2: Choose an x coordinate to strike your opponent"));
//       let strikeY2 = parseInt(prompt("P2: Choose a y coordinate to strike your opponent"));
//       if ([strikeY2, strikeX2] == players[0].gameBoard[k][k]) {
//         alert("Direct hit!");
//         players[0].gameBoard[k] = " 0 ";
//         players[0].shipCount --;
//       }
//     }
//   }

  // function printGrid(grid, isEnemy = false) {
  //     const headers = createHeaders(grid.length);
  //     let rowStr;
  //     for (i = 0; i < grid.length; i++) {
  //         rowStr = i + " ";
  //         for (let cell of grid[i]) {
  //             if (isEnemy && cell == " 1 ") {
  //                 rowStr += " 0 ";
  //             } else {
  //                 rowStr += cell + " 0 "
  //             }
  //         }
  //     }
  //     return rowStr;
  //     function createHeaders(size) {
  //         let result = " ";
  //         for (i = 0; i < size; i++) {
  //             result += i + " ";
  //         }
  //         return result;
  //     }
  // }

  console.log(players);
  return "The winner is...?";
};

const gameResult = battleship();

htmlTarget = document.getElementById("result");
htmlTarget.innerHTML = gameResult;