const ctx = document.getElementById('barChart');

new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul','Augs','Sep','Oct','Nov','Dec'],
      datasets: [{
        label: '- Tổng Sản Phẩm Bán Ra Thị Trường ',
        data: [12000, 43000, 20090, 50000, 72000, 36700, 87098, 34800, 16789, 87000, 65900],
        backgroundColor: [
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