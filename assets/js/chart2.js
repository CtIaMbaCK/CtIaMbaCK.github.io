const ctx2 = document.getElementById('lineChart');

new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul','Augs','Sep','Oct','Nov','Dec'],
      datasets: [{
        label: '- Mức độ hài lòng của người dùng qua từng tháng ',
        data: [-9.2, -6, -8.2, -4, -2, 0, 8, 0, -2, 8, 7,10],
        backgroundColor: [
            '#4A6575'
        ],
        borderColor: [
            '#4A6575'
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