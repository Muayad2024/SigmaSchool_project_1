//alert
const myName = "Muayad";
let greeting = `Welcome to ${myName}'s portfolio website`;
alert(greeting);

// Select the button
const darkModeButton = document.querySelector('.dark-mode-button');

// Check if the user previously selected dark mode (saved in browser memory)
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeButton.textContent = 'Light';
}

// Add a click event listener to the button
darkModeButton.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body element
    document.body.classList.toggle('dark-mode');
    
    // Update the button text and save the preference
    if (document.body.classList.contains('dark-mode')) {
        darkModeButton.textContent = 'Light';
        localStorage.setItem('theme', 'dark');
    } else {
        darkModeButton.textContent = 'Dark';
        localStorage.setItem('theme', 'light');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-experience');
    const experienceBlocks = document.getElementById('my-experience-blocks');

    if (toggleBtn && experienceBlocks) {
        toggleBtn.addEventListener('click', () => {
            const isHidden = experienceBlocks.classList.toggle('hidden');
            
            // Update button text based on state
            if (isHidden) {
                toggleBtn.textContent = 'Show';
            } else {
                toggleBtn.textContent = 'Hide';
            }
        });
    }
});