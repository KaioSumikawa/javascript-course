// Global variables to store DOM references
const bodyElement = document.body;
const paragraphElements = document.getElementsByTagName('p');
const interactiveMessage = document.getElementById('interactive-message');
const selectionOutput = document.getElementById('selection-output');
const elementInfoDisplay = document.getElementById('element-info-display');
const resultParagraph = document.getElementById('result-paragraph');

// Initialize DOM manipulation when page loads
function initializeDOMManipulation() {
    console.log('DOM Manipulation App Initialized');
    
    const messageElement = document.querySelector('div#interactive-message');
    messageElement.style.backgroundColor = '#007bff';
    messageElement.style.color = 'white';
    
    messageElement.addEventListener('click', handleInteractiveClick);
    
    logDOMStructure();
}

// Demonstrate getElementById method
function demonstrateGetElementById() {
    const targetElement = document.getElementById('interactive-message');
    
    targetElement.style.backgroundColor = '#28a745';
    targetElement.innerHTML = 'Selected with getElementById()';
    
    displaySelectionInfo('getElementById', 'Selected single element by ID', targetElement);
    
    console.log('getElementById demonstration:', targetElement);
}

// Demonstrate getElementsByTagName method
function demonstrateGetElementsByTagName() {
    const paragraphs = document.getElementsByTagName('p');
    
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.backgroundColor = 'rgba(255, 193, 7, 0.3)';
        paragraphs[i].style.padding = '10px';
        paragraphs[i].style.borderRadius = '5px';
    }
    
    interactiveMessage.style.backgroundColor = '#ffc107';
    interactiveMessage.style.color = 'black';
    interactiveMessage.innerHTML = `Found ${paragraphs.length} paragraph elements`;
    
    displaySelectionInfo('getElementsByTagName', `Selected ${paragraphs.length} paragraph elements`, paragraphs);
    
    console.log('getElementsByTagName demonstration:', paragraphs);
}

// Demonstrate querySelector method
function demonstrateQuerySelector() {
    const selectedElement = document.querySelector('div#interactive-message');
    
    selectedElement.style.backgroundColor = '#17a2b8';
    selectedElement.style.transform = 'scale(1.05)';
    selectedElement.innerHTML = 'Selected with querySelector()';
    
    displaySelectionInfo('querySelector', 'Selected first matching element with CSS selector', selectedElement);
    
    console.log('querySelector demonstration:', selectedElement);
}

// Demonstrate querySelectorAll method
function demonstrateQuerySelectorAll() {
    const allElements = document.querySelectorAll('p, div');
    
    allElements.forEach((element, index) => {
        element.style.border = '2px solid #dc3545';
        element.style.margin = '5px';
        
        if (element.tagName === 'DIV') {
            element.innerHTML = `Element ${index + 1}: ${element.tagName} selected with querySelectorAll()`;
        }
    });
    
    displaySelectionInfo('querySelectorAll', `Selected ${allElements.length} elements (p and div tags)`, allElements);
    
    console.log('querySelectorAll demonstration:', allElements);
}

// Change background color dynamically
function changeBackgroundColor() {
    const colors = ['#e74c3c', '#9b59b6', '#3498db', '#1abc9c', '#f39c12'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    interactiveMessage.style.backgroundColor = randomColor;
    interactiveMessage.innerHTML = `Background changed to: ${randomColor}`;
    
    updateElementInfo(interactiveMessage, 'Background color changed');
    
    console.log('Background color changed to:', randomColor);
}

// Change text content dynamically
function changeTextContent() {
    const messages = [
        'Text content updated!',
        'DOM manipulation in action!',
        'JavaScript is powerful!',
        'Learning DOM methods!',
        'Interactive web development!'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    interactiveMessage.textContent = randomMessage;
    resultParagraph.innerHTML = `<strong>Result:</strong> Text changed using textContent property`;
    
    updateElementInfo(interactiveMessage, 'Text content modified');
    
    console.log('Text content changed to:', randomMessage);
}

// Add CSS class dynamically
function addCSSClass() {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        .dynamic-class {
            animation: pulse 2s infinite;
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        }
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(styleSheet);
    
    interactiveMessage.classList.add('dynamic-class');
    interactiveMessage.innerHTML = 'CSS class added with animation!';
    
    updateElementInfo(interactiveMessage, 'CSS class added');
    
    console.log('CSS class added to element');
}

// Reset all styles
function resetStyles() {
    const allElements = document.querySelectorAll('p, div#interactive-message');
    
    allElements.forEach(element => {
        element.style.cssText = '';
        element.classList.remove('dynamic-class');
        
        if (element.id === 'interactive-message') {
            element.style.backgroundColor = '#007bff';
            element.style.color = 'white';
            element.innerHTML = 'Styles reset - Click me again!';
        }
    });
    
    resultParagraph.innerHTML = 'Here will be the results of DOM manipulation';
    updateElementInfo(interactiveMessage, 'All styles reset');
    
    console.log('All styles reset to default');
}

// Handle interactive element click
function handleInteractiveClick() {
    const currentBackground = interactiveMessage.style.backgroundColor;
    const newBackground = currentBackground === 'rgb(0, 123, 255)' ? '#28a745' : '#007bff';
    
    interactiveMessage.style.backgroundColor = newBackground;
    interactiveMessage.innerHTML = 'Clicked! Background toggled';
    
    updateElementInfo(interactiveMessage, 'Element clicked');
    
    console.log('Interactive element clicked');
}

// Display selection method information
function displaySelectionInfo(method, description, elements) {
    selectionOutput.style.display = 'block';
    
    const elementCount = elements.length || 1;
    const elementType = elements.tagName || 'Multiple elements';
    
    selectionOutput.innerHTML = `
        <strong>Method:</strong> ${method}<br>
        <strong>Description:</strong> ${description}<br>
        <strong>Elements found:</strong> ${elementCount}<br>
        <strong>Element type:</strong> ${elementType}
    `;
}

// Update element information display
function updateElementInfo(element, action) {
    elementInfoDisplay.innerHTML = `
        <strong>Element:</strong> ${element.tagName}<br>
        <strong>ID:</strong> ${element.id || 'None'}<br>
        <strong>Classes:</strong> ${element.className || 'None'}<br>
        <strong>Action:</strong> ${action}<br>
        <strong>Current text:</strong> ${element.textContent}<br>
        <strong>Background color:</strong> ${element.style.backgroundColor || 'Default'}
    `;
}

// Log DOM structure for learning purposes
function logDOMStructure() {
    console.group('DOM Structure Analysis');
    console.log('Body element:', bodyElement);
    console.log('Paragraph elements:', paragraphElements);
    console.log('Interactive message element:', interactiveMessage);
    console.log('Total paragraphs found:', paragraphElements.length);
    
    console.group('Element Properties');
    console.log('Body background:', bodyElement.style.background);
    console.log('Interactive message ID:', interactiveMessage.id);
    console.log('Interactive message content:', interactiveMessage.textContent);
    console.groupEnd();
    
    console.groupEnd();
}

// Advanced DOM manipulation examples
function createNewElement() {
    const newDiv = document.createElement('div');
    newDiv.textContent = 'Dynamically created element';
    newDiv.style.backgroundColor = '#6c757d';
    newDiv.style.color = 'white';
    newDiv.style.padding = '10px';
    newDiv.style.margin = '10px 0';
    newDiv.style.borderRadius = '5px';
    
    document.querySelector('.container').appendChild(newDiv);
    
    console.log('New element created and added to DOM');
}

// Traverse DOM tree
function traverseDOM() {
    const container = document.querySelector('.container');
    
    console.group('DOM Traversal');
    console.log('Container children:', container.children);
    console.log('First child:', container.firstElementChild);
    console.log('Last child:', container.lastElementChild);
    console.log('Parent element:', container.parentElement);
    console.groupEnd();
}

// Event handling examples
function setupEventHandlers() {
    document.getElementById('btn-getElementById').addEventListener('click', demonstrateGetElementById);
    document.getElementById('btn-getElementsByTagName').addEventListener('click', demonstrateGetElementsByTagName);
    document.getElementById('btn-querySelector').addEventListener('click', demonstrateQuerySelector);
    document.getElementById('btn-querySelectorAll').addEventListener('click', demonstrateQuerySelectorAll);
    document.getElementById('btn-changeBackground').addEventListener('click', changeBackgroundColor);
    document.getElementById('btn-changeText').addEventListener('click', changeTextContent);
    document.getElementById('btn-addClass').addEventListener('click', addCSSClass);
    document.getElementById('btn-resetStyles').addEventListener('click', resetStyles);

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            demonstrateQuerySelector();
        }
    });
    
    console.log('Event handlers set up');
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeDOMManipulation();
    setupEventHandlers();
    
    console.log('DOM Manipulation Learning App fully loaded');
});

// Additional utility functions for advanced DOM manipulation
function getElementProperties(element) {
    return {
        tagName: element.tagName,
        id: element.id,
        className: element.className,
        textContent: element.textContent,
        innerHTML: element.innerHTML,
        style: element.style.cssText,
        attributes: Array.from(element.attributes).map(attr => `${attr.name}="${attr.value}"`),
        childElementCount: element.childElementCount
    };
}

function logElementDetails(element) {
    const properties = getElementProperties(element);
    console.table(properties);
}

// Performance monitoring for DOM operations
function measureDOMPerformance(operation, callback) {
    const startTime = performance.now();
    callback();
    const endTime = performance.now();
    
    console.log(`${operation} took ${endTime - startTime} milliseconds`);
}
