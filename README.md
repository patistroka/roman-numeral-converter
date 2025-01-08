# Roman Numeral Converter  

This project is a Roman Numeral Converter app built with JavaScript and styled using CSS Flexbox. It converts Arabic numbers (1–3999) into Roman numerals and provides real-time validation and feedback.

## Features  
- **Input Validation**: Ensures the user provides a valid number between 1 and 3999.  
- **Arabic to Roman Conversion**: Converts the input number into its Roman numeral representation using standard conversion rules.  
- **Dynamic Feedback**: Displays results directly on the page and informs users about invalid inputs.  
- **Responsive Design**: Styled with CSS Flexbox for a clean and adaptable layout.  

## User Stories  
1. An input element (`id="number"`) to enter the Arabic numeral.  
2. A button (`id="convert-btn"`) to trigger the conversion.  
3. An output element (`id="output"`) to display the Roman numeral or error messages.  
4. Handles invalid inputs with user-friendly messages:  
   - "Please enter a valid number" for empty or non-numeric inputs.  
   - "Please enter a number greater than or equal to 1" for numbers less than 1.  
   - "Please enter a number less than or equal to 3999" for numbers greater than or equal to 4000.  

### Examples:  
- Input: `9` → Output: `"IX"`  
- Input: `16` → Output: `"XVI"`  
- Input: `649` → Output: `"DCXLIX"`  
- Input: `1023` → Output: `"MXXIII"`  
- Input: `3999` → Output: `"MMMCMXCIX"`  

## Technologies Used  
- **JavaScript**: Handles number validation, conversion logic, and DOM manipulation.  
- **CSS Flexbox**: Provides a responsive and structured layout.  
- **HTML**: Forms the structure for user input, button, and output display.  
