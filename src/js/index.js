document.addEventListener('DOMContentLoaded', () => {
    const btnNao = document.querySelector('.btnnao');
    const container = btnNao.parentElement;
    const main = document.querySelector('.main');

    let mouseMoveTimeout;

    document.addEventListener('mousemove', (e) => {
        clearTimeout(mouseMoveTimeout);

        const rect = btnNao.getBoundingClientRect();
        const distance = Math.hypot(e.clientX - (rect.left + rect.width / 2), e.clientY - (rect.top + rect.height / 2));

        if (distance < 100) {
            const padding = 20;

            const minLeft = padding;
            const maxLeft = main.clientWidth - btnNao.clientWidth - padding;
            const minTop = padding;
            const maxTop = main.clientHeight - btnNao.clientHeight - padding;

            btnNao.style.position = 'absolute';
            btnNao.style.left = `${Math.random() * (maxLeft - minLeft) + minLeft}px`;
            btnNao.style.top = `${Math.random() * (maxTop - minTop) + minTop}px`;
        }

        resetPageAfterTimeout();
    });

    function resetPageAfterTimeout() {
        clearTimeout(mouseMoveTimeout);
        mouseMoveTimeout = setTimeout(() => {
            location.reload();
        }, 2000);
    }
});




