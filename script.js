const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

let events = new Set(gameEvents.values());

events = [...events];

gameEvents.delete(64);
console.log(events);
// console.log(gameEvents);
let newGameEvents = gameEvents.entries();
console.log(newGameEvents);

let timer = 0;
for (let [time, gamePlay] of newGameEvents) {
  if (time >= timer && time <= 45) {
    let firstHalf = `[FIRST HALF]`;
    let periodOne = `${firstHalf} ${time} ${gamePlay}`;
    console.log(periodOne);
  } else {
    let secondHalf = `[Second HALF]`;
    let periodtwo = `${secondHalf} ${time} ${gamePlay}`;
    console.log(periodtwo);
  }
}
