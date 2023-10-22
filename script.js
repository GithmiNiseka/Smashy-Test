///navigate using arrow keys 
function navigatePage(direction) {
    const currentPage = window.location.pathname;
    let nextPage;

    if (currentPage.endsWith('index.html')) {
      if (direction === 'left') {
        nextPage = 'form.html';
      } else if (direction === 'right') {
        nextPage = 'brief.html';
      }
    } else if (currentPage.endsWith('brief.html')) {
      if (direction === 'left') {
        nextPage = 'index.html';
      } else if (direction === 'right') {
        nextPage = 'form.html';
      }
    } else if (currentPage.endsWith('form.html')) {
      if (direction === 'left') {
        nextPage = 'brief.html';
      } else if (direction === 'right') {
        nextPage = 'index.html';
      }
    }

    window.location.href = nextPage;
  }

  // Event listener for keyboard arrow keys
  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'Left') {
      navigatePage('left');
    } else if (event.key === 'ArrowRight' || event.key === 'Right') {
      navigatePage('right');
    }
  });
 

// Check email validation

document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("email");
    const errorText = document.querySelector(".error");
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function(event) {
        if (!isValidEmail(emailInput.value)) {
            emailInput.classList.add("input-invalid");
            event.preventDefault(); // Prevent form submission
            errorText.style.display = "block";
        }
    });

    function isValidEmail(email) {
       
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    }
});


//// form input text style change
const inputFields = document.querySelectorAll('.input-text');

inputFields.forEach(input => {
    input.addEventListener('input', function () {
        if (input.value) {
            input.classList.add('typed-text');
        } else {
            input.classList.remove('typed-text');
        }
    });
});