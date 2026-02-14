(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })

  // Image file size validation
  const imageInput = document.getElementById('image');
  const imageError = document.getElementById('image-error');
  const MAX_FILE_SIZE_MB = 10; // Max file size in MB

  if (imageInput && imageError) {
    imageInput.addEventListener('change', function () {
      if (this.files[0] && this.files[0].size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        imageError.style.display = 'block';
        this.value = ''; // Clear the input
      } else {
        imageError.style.display = 'none';
      }
    });
  }

  // Custom Confirmation Modal Logic
  const confirmationForms = document.querySelectorAll('.confirm-action');
  const confirmationModal = document.getElementById('deleteConfirmationModal');
  const confirmActionBtn = document.getElementById('confirmActionButton');
  const confirmationModalMessage = document.getElementById('deleteModalMessage');

  let formToSubmit = null;

  if (confirmationModal && confirmActionBtn) {
    const bsModal = new bootstrap.Modal(confirmationModal);

    confirmationForms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        formToSubmit = form;

        // Set message
        const message = form.getAttribute('data-message');
        if (message) {
          confirmationModalMessage.textContent = message;
        }

        // Set button text and style
        const btnText = form.getAttribute('data-btn-text') || 'Confirm';
        const btnClass = form.getAttribute('data-btn-class') || 'btn-primary';

        confirmActionBtn.textContent = btnText;
        confirmActionBtn.className = `btn px-4 ${btnClass}`;

        bsModal.show();
      });
    });

    confirmActionBtn.addEventListener('click', () => {
      if (formToSubmit) {
        formToSubmit.submit();
      }
    });
  }
})()
