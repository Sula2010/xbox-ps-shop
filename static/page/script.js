document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const answer = this.previousElementSibling;

            if (answer.classList.contains('show')) {
                answer.classList.remove('show');
                this.textContent = '+';
                this.classList.remove('active');
            } else {
                answer.classList.add('show');
                this.textContent = '−';
                this.classList.add('active');
            }
        });
    });
});