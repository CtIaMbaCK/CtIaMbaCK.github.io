const ctx4 = document.getElementById('doughnut');

new Chart(ctx4, {
    type: 'doughnut',
    data: {
      labels: ['HÀI LÒNG','KHÔNG HÀI IÒNG'],
      datasets: [{
        label: '- Sơ Đồ Thích Của Sản Phẩm',
        data: [22381,9789],
        backgroundColor: [
            '#71C016',
            '#8CAAFF'
        ],
        borderColor: [
            '#71C016',
            '#8CAAFF'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });