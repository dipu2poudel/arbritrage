const oddsA = document.querySelector(".oddsANum");
const oddsB = document.querySelector(".oddsBNum");
const result = document.querySelector(".result");
const button = document.querySelector(".btn");
const finalresultsdisplay = document.querySelector(".root");
const betAmountSelector = document.querySelector(".betAmount");

button.addEventListener("click", (e) => {
  e.preventDefault(e);

  const oddsAValue = 1 / Number(oddsA.value);
  const betAmount = Number(betAmountSelector.value);

  let oddsBValue = 1 / Number(oddsB.value);

  const oddsAPercent = oddsAValue * 100;
  const oddsBPercent = oddsBValue * 100;
  const finalodds = oddsAPercent + oddsBPercent;

  const bet1Size = (betAmount * oddsAPercent) / finalodds;
  const bet2Size = (betAmount * oddsBPercent) / finalodds;
  xhr = bet1Size * Number(oddsA.value);
  const profitPercentage = ((xhr - betAmount) / betAmount) * 100;

  const markup = `<div class="results">
  <h1>Your Profit Percentage ${profitPercentage.toFixed(2)}%</h1>
  <h1>Your Payout Will Be Rs.${xhr.toFixed(2)}</h1>
  <h2>Invest Rs.${bet1Size.toFixed(2)} with Odds ${oddsA.value}</h2>
  <h3>Invest Rs.${bet2Size.toFixed(2)} with Odds ${oddsB.value}</h3>
</div>`;

  finalresultsdisplay.innerHTML = markup;
});
