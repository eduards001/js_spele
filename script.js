let score = 0;
let clickPower = 1;
let upgradeCost = 10;

const scoreEl = document.getElementById("score");
const clickBtn = document.getElementById("clickBtn");
const upgradeBtn = document.getElementById("upgradeBtn");
const upgradeCostEl = document.getElementById("upgradeCost");

clickBtn.addEventListener("click", () => {
    score += clickPower;
    updateUI();
});

upgradeBtn.addEventListener("click", () => {
    if (score >= upgradeCost) {
        score -= upgradeCost;
        clickPower++;
        upgradeCost = Math.floor(upgradeCost * 1.5);

        updateUI();
    } else {
        alert("Nepietiek punktu!");
    }
});

function updateUI() {
    scoreEl.textContent = score;
    upgradeCostEl.textContent = upgradeCost;
}