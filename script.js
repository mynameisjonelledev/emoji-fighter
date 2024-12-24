let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", () => {
  const randomFighter = Math.floor(Math.random() * fighters.length);
  const randomFighterTwo = Math.floor(Math.random() * fighters.length);
  
    const firstFighter = fighters[randomFighter];
    const secondFighter = fighters[randomFighterTwo];
    
    stageEl.textContent = firstFighter + ' ' + 'vs' + ' ' + secondFighter; 
});


