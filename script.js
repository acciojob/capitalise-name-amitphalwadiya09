document.getElementById('fname').addEventListener('blur', function() {
    // Get the value of the input field
    let inputValue = this.value;

    // Convert the value to uppercase
    let uppercaseValue = inputValue.toUpperCase();

    // Set the uppercase value back to the input field
    this.value = uppercaseValue;
});