/*....................... popup JS start------------------------------- */

document.addEventListener('click', function(event) {
    var popup = document.getElementById("popup");
    if (event.target.matches('.close-button')) {
        popup.classList.remove("show");
    }
    if (event.target.matches('#login-button')) {
        popup.classList.toggle("show");
    }
});

/*....................... popup JS ends------------------------------- */

/*....................... Login popup JS starts------------------------------- */

document.addEventListener('click', function(event) {
    var popup = document.getElementById("LoginPopup");
    if (event.target.matches('.close-button')) {
        popup.classList.remove("show");
    }
    if (event.target.matches('#orUseEmail')) {
        popup.classList.toggle("show");
    }
});

/*....................... login popup JS ends------------------------------- */

/*....................... Signup popup JS starts------------------------------- */

document.addEventListener('click', function(event) {
    var popup = document.getElementById("SignUpPopup");
    if (event.target.matches('.close-button')) {
        popup.classList.remove("show");
    }
    if (event.target.matches('#JumpToSignUp')) {
        popup.classList.toggle("show");
    }
});

/*....................... Signup popup JS ends------------------------------- */

/*....................... index JS start------------------------------- */

// Placeholder for future JavaScript functionality
document.querySelectorAll('.upload-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Upload functionality not implemented yet.');
    });
});


/*....................... index JS start------------------------------- */

/*....................... for uploading images------------------------------- */
document.getElementById('inputTag').addEventListener('change', function(event) 
{
    const file = event.target.files[0];
    const imgElement = document.getElementById('preview-image');
    const videoElement = document.getElementById('preview-video');
    
    if (!file) return;

    const url = URL.createObjectURL(file);

    if (file.type.startsWith('image/')) {
        imgElement.src = url;
        imgElement.classList.remove('hidden');
        videoElement.classList.add('hidden');
    } else if (file.type.startsWith('video/')) {
        videoElement.src = url;
        videoElement.classList.remove('hidden');
        imgElement.classList.add('hidden');
    }
});


