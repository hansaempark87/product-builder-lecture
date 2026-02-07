document.addEventListener('DOMContentLoaded', function() {
  const lottoNumbersContainer = document.getElementById('lotto-numbers');
  const generateButton = document.getElementById('generate-button');
  const modeToggleButton = document.getElementById('mode-toggle');
  const sumOfNumbersEl = document.getElementById('sum-of-numbers');
  const oddEvenRatioEl = document.getElementById('odd-even-ratio');

  function generateLottoNumbers() {
      lottoNumbersContainer.innerHTML = '';
      const numbers = new Set();
      while(numbers.size < 6) {
          numbers.add(Math.floor(Math.random() * 45) + 1);
      }
      const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
      
      sortedNumbers.forEach(number => {
          const numberElement = document.createElement('div');
          numberElement.className = 'lotto-number';
          numberElement.textContent = number;
          lottoNumbersContainer.appendChild(numberElement);
      });

      // Calculate and display stats
      const sum = sortedNumbers.reduce((acc, num) => acc + num, 0);
      const oddCount = sortedNumbers.filter(num => num % 2 !== 0).length;
      const evenCount = 6 - oddCount;
      sumOfNumbersEl.textContent = sum;
      oddEvenRatioEl.textContent = `${oddCount} Odd / ${evenCount} Even`;
  }

  generateButton.addEventListener('click', generateLottoNumbers);

  modeToggleButton.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
  });

  // Initial generation
  generateLottoNumbers();
});
