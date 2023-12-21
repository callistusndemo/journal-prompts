document.addEventListener('DOMContentLoaded', function() {
    fetchPrompts();
});

function fetchPrompts() {
    fetch('http://localhost:3000/get-prompts')
        .then(response => response.json())
        .then(prompts => {
            displayPrompts(prompts);
        })
        .catch(error => console.error('Error:', error));
}

function displayPrompts(prompts) {
    const container = document.getElementById('prompts-container');
    container.innerHTML = '';
    prompts.forEach(prompt => {
        const promptElement = document.createElement('p');
        promptElement.textContent = prompt;
        container.appendChild(promptElement);
    });
}
