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
        quoteElement.style.backgroundColor = '#f4f4f9';
        quoteElement.style.fontStyle = 'italic';
    });

    quoteElement.addEventListener('mouseout', function () {
        quoteElement.style.backgroundColor = '';
        quoteElement.style.fontStyle = '';
    });
}

window.onload = function () {
    addPageLoadDate();
    registerCVQuoteEvents();
};
