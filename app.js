document.addEventListener('DOMContentLoaded', function () {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1')
      .then(response => response.json())
      .then(data => {
        const tableBody = document.querySelector('#cryptoTable tbody');
  
        data.slice(0, 5).forEach(currency => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${currency.id}</td>
            <td>${currency.symbol}</td>
            <td>${currency.name}</td>
          `;
  
          if (currency.symbol === 'usdt') {
            row.classList.add('green-background');
          } else {
            row.classList.add('blue-background');
          }
  
          tableBody.appendChild(row);
        });
      })
      .catch(error => console.error('Error fetching data:', error));
  });
  