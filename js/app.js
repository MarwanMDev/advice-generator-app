const adviseId = document.getElementById('adviseId');
const advise = document.getElementById('advise');
const button = document.getElementById('generateButton');

const getApiData = async () => {
  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();
  adviseId.innerText = 'Advice #' + data.slip.id;
  advise.innerText = `\"  ${data.slip.advice} \"`;
};

getApiData();

button.addEventListener('click', () => {
  getApiData();
});
