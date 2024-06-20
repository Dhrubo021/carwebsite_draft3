document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const messageContainer = document.getElementById('messageContainer');
    
    if (urlParams.has('success')) {
        messageContainer.innerHTML = '<p>Your form has been successfully submitted!</p>';
    } else {
        messageContainer.innerHTML = '<p>There was an error submitting your form. Please try again.</p>';
    }
});
