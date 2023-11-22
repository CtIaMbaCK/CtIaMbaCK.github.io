const ctx3 = document.getElementById('doughnut');

new Chart(ctx3, {
    type: 'doughnut',
    data: {
      labels: ['Online','Tại Shop','Kênh Bán Hàng'],
      datasets: [{
        label: '- Sơ Đồ Thích Của Sản Phẩm',
        data: [22381,9789,12312],
        backgroundColor: [
            '#71C016',
            '#8CAAFF',
            '#248AFD'
        ],
        borderColor: [
            '#71C016',
            '#8CAAFF',
            '#248AFD'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });