document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-button');
    const themeToggleBtn = document.getElementById('mode-toggle');
    const lottoNumbersContainer = document.getElementById('lotto-numbers');
    const body = document.body;

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 7) { // Generate 7 unique numbers for bonus
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function displayLottoNumbers(numbers) {
        lottoNumbersContainer.innerHTML = '';
        const winningNumbers = numbers.slice(0, 6);
        const bonusNumber = numbers[6];

        for (const number of winningNumbers) {
            const numberDiv = document.createElement('div');
            numberDiv.classList.add('lotto-number');
            numberDiv.textContent = number;
            lottoNumbersContainer.appendChild(numberDiv);
        }

        const plusSpan = document.createElement('span');
        plusSpan.textContent = ' + ';
        lottoNumbersContainer.appendChild(plusSpan);

        const bonusDiv = document.createElement('div');
        bonusDiv.classList.add('lotto-number', 'bonus-number');
        bonusDiv.textContent = bonusNumber;
        lottoNumbersContainer.appendChild(bonusDiv);
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
});