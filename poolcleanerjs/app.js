// You clean pools
// you start a small net which makes $5/wk
// for $50 you can upgrade to a big net which makes $10
// You win when you have the big net and $100

const tools = [
  { name: "Small Net", generates: 5, price: 0 },
  { name: "Big net", generates: 10, price: 50 },
];

const player = {
  money: 0,
  tool: 0,
  wonGame: false
};

function cleanPool() {
  const tool = tools[player.tool];
  alert(
    `You cleaned a pool with ${tool.name} and make ${tool.generates} dollars`
  );
  player.money += tool.generates;
}

function upgrade() {
  if (player.tool + 1 < tools.length) {
    const nextTool = tools[player.tool + 1];
    if (nextTool.price <= player.money) {
      player.money -= nextTool.price;
      player.tool += 1;
    } else {
      alert("not enough money to upgrade");
    }
  } else {
    alert("There are no more tools to upgrade");
  }
}

function winConditions(){
    if(player.tool === tools.length - 1 && player.money >= 100){
        alert("You have won the game")
        player.wonGame = true
    }
}

alert("Welcome to pool cleaner!!!")

while(!player.wonGame){
    const response = prompt(`You currently have ${player.money} dollars, do you want to [c]lean pools or [u]pgrade `)

    if (response === 'c'){
        cleanPool()
    }

    if (response === 'u'){
        upgrade()
    }

    if (response !== 'u' && response !== 'c'){
        alert("that's a not a valid option, type 'c' or 'u'")
    }

    winConditions()
}