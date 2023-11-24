//Toast Function
function toast ({ title='', message='', type='info', duration = 3000}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        const icons = {
            success: 'fa-sharp fa-solid fa-circle-check',
            error : 'fa-solid fa-circle-exclamation',
        };

        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);
        toast.classList.add('toast',`toast--${type}`);
        toast.style.animation = `slideInLeft ease 0.3s , fadeOut linear ${delay}s ${delay} `;

        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-circle-xmark"></i>
            </div>
        `;
        main.appendChild(toast);

        setTimeout(function() {
            main.removeChild(toast);
        },duration);
    }
}

function showSuccessToast() {
    toast({
        title: ' Thành công',
        message: 'Báo cáo đã được gửi đi ',
        type: 'success',
        duration: 4000
    });
}
