function performStringAnalysis() {
    try {
        const userName = getUserInput();
        if (!userName) return;
        const analysisData = analyzeString(userName);
        displayAnalysisResults(analysisData);
        logStringAnalysisDetails(analysisData);
    } catch (error) {
        console.error('Error during string analysis:', error);
        displayErrorMessage('An error occurred during string analysis. Please try again.');
    }
}

function getUserInput() {
    let userName = window.prompt('Please enter your name for analysis:');
    if (userName === null) return null;
    userName = userName.trim();
    if (userName === '') {
        window.alert('Please enter a valid name (cannot be empty).');
        return null;
    }
    if (userName.length > 50) {
        window.alert('Name is too long. Please enter a name with 50 characters or less.');
        return null;
    }
    return userName;
}

function analyzeString(inputString) {
    return {
        original: inputString,
        length: inputString.length,
        uppercase: inputString.toUpperCase(),
        lowercase: inputString.toLowerCase(),
        trimmed: inputString.trim(),
        firstChar: inputString.charAt(0),
        lastChar: inputString.charAt(inputString.length - 1),
        reversed: inputString.split('').reverse().join(''),
        wordCount: inputString.trim().split(/\s+/).length,
        characterFrequency: getCharacterFrequency(inputString),
        containsSpaces: inputString.includes(' '),
        startsWithVowel: /^[aeiouAEIOU]/.test(inputString),
        palindromeCheck: isPalindrome(inputString),
        capitalizedWords: capitalizeWords(inputString)
    };
}

function getCharacterFrequency(str) {
    const frequency = {};
    for (const char of str.toLowerCase()) {
        if (char !== ' ') frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
}

function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

function displayAnalysisResults(data) {
    const resultsContainer = document.getElementById('results-display');
    const resultsHTML = `
        <div class="results-container">
            <h2>String Analysis Results</h2>
            <div class="analysis-item">
                <strong>Original Input:</strong>
                <div class="method-demo">"${data.original}"</div>
            </div>
            <div class="analysis-item">
                <strong>Basic Properties:</strong>
                <div class="method-demo">
                    Length: <span class="highlight">${data.length}</span> characters<br>
                    Word Count: <span class="highlight">${data.wordCount}</span> words<br>
                    Contains Spaces: <span class="highlight">${data.containsSpaces ? 'Yes' : 'No'}</span><br>
                    Starts with Vowel: <span class="highlight">${data.startsWithVowel ? 'Yes' : 'No'}</span><br>
                    Is Palindrome: <span class="highlight">${data.palindromeCheck ? 'Yes' : 'No'}</span>
                </div>
            </div>
            <div class="analysis-item">
                <strong>String Transformations:</strong>
                <div class="method-demo">
                    toUpperCase(): <span class="highlight">"${data.uppercase}"</span><br>
                    toLowerCase(): <span class="highlight">"${data.lowercase}"</span><br>
                    Capitalized Words: <span class="highlight">"${data.capitalizedWords}"</span><br>
                    Reversed: <span class="highlight">"${data.reversed}"</span>
                </div>
            </div>
            <div class="analysis-item">
                <strong>Character Analysis:</strong>
                <div class="method-demo">
                    First Character: <span class="highlight">"${data.firstChar}"</span><br>
                    Last Character: <span class="highlight">"${data.lastChar}"</span><br>
                    Character Frequency: <span class="highlight">${JSON.stringify(data.characterFrequency)}</span>
                </div>
            </div>
        </div>
    `;
    resultsContainer.innerHTML = resultsHTML;
    resultsContainer.style.display = 'block';
    resultsContainer.scrollIntoView({ behavior: 'smooth' });
}

function demonstrateStringMethods() {
    const resultsContainer = document.getElementById('results-display');
    const demonstrationHTML = `
        <div class="results-container">
            <h2>JavaScript String Methods Reference</h2>
            <div class="analysis-item">
                <strong>Length and Character Access:</strong>
                <div class="method-demo">
                    str.length // Returns string length<br>
                    str.charAt(index) // Character at specific position<br>
                    str[index] // Alternative character access
                </div>
            </div>
            <div class="analysis-item">
                <strong>Case Conversion:</strong>
                <div class="method-demo">
                    str.toUpperCase() // Converts to uppercase<br>
                    str.toLowerCase() // Converts to lowercase<br>
                    str.toLocaleUpperCase() // Locale-specific uppercase
                </div>
            </div>
            <div class="analysis-item">
                <strong>Search and Test:</strong>
                <div class="method-demo">
                    str.includes(substr) // Check if contains substring<br>
                    str.indexOf(substr) // Find first occurrence index<br>
                    str.startsWith(substr) // Check if starts with<br>
                    str.endsWith(substr) // Check if ends with
                </div>
            </div>
            <div class="analysis-item">
                <strong>Manipulation:</strong>
                <div class="method-demo">
                    str.trim() // Remove whitespace from both ends<br>
                    str.replace(old, new) // Replace substring<br>
                    str.split(separator) // Split into array<br>
                    str.slice(start, end) // Extract portion
                </div>
            </div>
        </div>
    `;
    resultsContainer.innerHTML = demonstrationHTML;
    resultsContainer.style.display = 'block';
    resultsContainer.scrollIntoView({ behavior: 'smooth' });
}

function displayErrorMessage(message) {
    const resultsContainer = document.getElementById('results-display');
    resultsContainer.innerHTML = `
        <div class="error-message">
            <strong>Error:</strong> ${message}
        </div>
    `;
    resultsContainer.style.display = 'block';
}

function clearResults() {
    const resultsContainer = document.getElementById('results-display');
    resultsContainer.style.display = 'none';
    resultsContainer.innerHTML = '';
}

function logStringAnalysisDetails(data) {
    console.group('🔍 String Analysis Details');
    console.log('Original String:', data.original);
    console.log('String Length:', data.length);
    console.log('Type:', typeof data.original);
    console.group('📝 String Methods Demonstrated:');
    console.log('toUpperCase():', data.original, '->', data.uppercase);
    console.log('toLowerCase():', data.original, '->', data.lowercase);
    console.log('charAt(0):', data.firstChar);
    console.log('charAt(length-1):', data.lastChar);
    console.log('includes(" "):', data.containsSpaces);
    console.groupEnd();
    console.group('🧮 Advanced Analysis:');
    console.log('Word Count:', data.wordCount);
    console.log('Character Frequency:', data.characterFrequency);
    console.log('Is Palindrome:', data.palindromeCheck);
    console.log('Reversed String:', data.reversed);
    console.groupEnd();
    console.groupEnd();
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 JavaScript String Analyzer loaded successfully');
    console.log('💡 Click "Analyze String" to start string analysis');
    console.group('📚 Educational Note: Modern vs Legacy Approaches');
    console.log('✅ Modern Approach: DOM manipulation with createElement, innerHTML, etc.');
    console.log('❌ Legacy Approach: document.write() - not recommended for modern web development');
    console.log('📖 Template Literals: Use backticks (`) for string interpolation: `Hello ${name}`');
    console.log('🎯 This application demonstrates modern JavaScript best practices');
    console.groupEnd();
});

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'Enter') {
        performStringAnalysis();
    } else if (event.key === 'Escape') {
        clearResults();
    }
});
