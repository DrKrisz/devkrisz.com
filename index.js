function toggleDarkMode() {
    document.body.classList.toggle('dark');
    updateButtonContent();
}

function updateButtonContent() {
    const button = document.querySelector('.toggle-button');
    if (document.body.classList.contains('dark')) {
        button.textContent = 'Light Mode';
    } else {
        button.textContent = 'Dark Mode';
    }
}