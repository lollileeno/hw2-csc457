function addPageLoadDate() {
    var pageFooter = document.querySelector('footer');
    if (!pageFooter) {
        return;
    }

    var currentDate = new Date();
    var message = document.createTextNode('Page loaded on: ' + currentDate.toLocaleString());
    var paragraph = document.createElement('p');
    paragraph.appendChild(message);
    pageFooter.appendChild(paragraph);
}

function validateContactForm() {
    var nameField = document.getElementById('name');
    var emailField = document.getElementById('email');

    if (!nameField || !emailField) {
        return true;
    }

    if (nameField.value.trim() === '' || emailField.value.trim() === '') {
        alert('Please fill out all required fields.');
        return false;
    }

    return true;
}

function toggleProjectDescription(descriptionId) {
    var description = document.getElementById(descriptionId);
    if (!description) {
        return;
    }

    var currentDisplay = window.getComputedStyle(description).display;
    if (currentDisplay === 'none') {
        description.style.display = 'block';
    } else {
        description.style.display = 'none';
    }
}

function registerCVQuoteEvents() {
    var quoteElement = document.querySelector('blockquote');
    if (!quoteElement) {
        return;
    }

    quoteElement.addEventListener('mouseover', function () {
        var darkMode = document.body.classList.contains('dark-mode');
        quoteElement.style.backgroundColor = darkMode ? '#1e293b' : '#f4f4f9';
        quoteElement.style.color = darkMode ? '#f8fafc' : '';
        quoteElement.style.fontStyle = 'italic';
    });

    quoteElement.addEventListener('mouseout', function () {
        quoteElement.style.backgroundColor = '';
        quoteElement.style.color = '';
        quoteElement.style.fontStyle = '';
    });
}

function setDarkMode(enabled) {
    var bodyElement = document.body;
    var button = document.getElementById('dark-mode-button');
    if (!bodyElement || !button) {
        return;
    }

    if (enabled) {
        bodyElement.classList.add('dark-mode');
        button.textContent = 'Light Mode';
        localStorage.setItem('darkMode', 'true');
    } else {
        bodyElement.classList.remove('dark-mode');
        button.textContent = 'Dark Mode';
        localStorage.setItem('darkMode', 'false');
    }
}

function toggleDarkMode() {
    var bodyElement = document.body;
    if (!bodyElement) {
        return;
    }

    var enabled = bodyElement.classList.contains('dark-mode');
    setDarkMode(!enabled);
}

function registerDarkModeToggle() {
    var button = document.getElementById('dark-mode-button');
    if (!button) {
        return;
    }

    button.addEventListener('click', toggleDarkMode);
    var storedValue = localStorage.getItem('darkMode');
    if (storedValue === 'true') {
        setDarkMode(true);
    }
}

window.onload = function () {
    addPageLoadDate();
    registerCVQuoteEvents();
    registerDarkModeToggle();
};
