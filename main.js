const generateBtn = document.getElementById('generate-btn');
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const lottoNumbersContainer = document.querySelector('.lotto-numbers');
const body = document.body;

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayLottoNumbers(numbers) {
    lottoNumbersContainer.innerHTML = '';
    for (const number of numbers) {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('lotto-number');
        numberDiv.textContent = number;
        lottoNumbersContainer.appendChild(numberDiv);
    }
}

generateBtn.addEventListener('click', () => {
    const numbers = generateLottoNumbers();
    displayLottoNumbers(numbers);
});

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Initial generation
const initialNumbers = generateLottoNumbers();
displayLottoNumbers(initialNumbers);