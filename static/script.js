// Smooth scrolling to form section
function scrollToForms() {
  document.getElementById('forms-section').scrollIntoView({ behavior: 'smooth' });
}

// Handle encryption form submission
const encryptForm = document.getElementById('encrypt-form');
const encryptedImageField = document.getElementById('encrypted-image');
const decryptionKeyField = document.getElementById('decryption-key');
const encryptSpinner = document.getElementById('encrypt-spinner');

encryptForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Show spinner and disable button
  encryptSpinner.style.display = 'inline-block';
  encryptForm.querySelector('button').disabled = true;

  const formData = new FormData(encryptForm);

  try {
      const response = await fetch('/encrypt', {
          method: 'POST',
          body: formData
      });

      if (!response.ok) throw new Error("Failed to encrypt image");

      const data = await response.json();
      encryptedImageField.value = data.encrypted_image;
      decryptionKeyField.value = data.key;
  } catch (error) {
      alert(error.message);
  } finally {
      // Hide spinner and re-enable button
      encryptSpinner.style.display = 'none';
      encryptForm.querySelector('button').disabled = false;
  }
});

function showNotification(message, isSuccess = true) {
  const notification = document.createElement("div");
  notification.className = `notification ${isSuccess ? "success" : "error"}`;
  notification.innerText = message;
  document.body.appendChild(notification);

  setTimeout(() => notification.remove(), 3000);
}

function downloadEncryptedData() {
  const encryptedData = document.getElementById("encrypted-image").value;
  if (!encryptedData) {
      showNotification("No encrypted data to download.", false);
      return;
  }
  const blob = new Blob([encryptedData], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "encrypted_image.txt";
  link.click();
}

document.getElementById("download-btn").style.display = "inline-block";

function showLoadingOverlay() {
  document.getElementById("loading-overlay").style.display = "flex";
}

function hideLoadingOverlay() {
  document.getElementById("loading-overlay").style.display = "none";
}

// Use showLoadingOverlay and hideLoadingOverlay during encryption/decryption:
encryptForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  showLoadingOverlay();

  // Encryption code...

  hideLoadingOverlay();
});
function resetForm() {
  // Clear file input
  document.querySelector("input[type='file']").value = "";
  
  // Clear all text areas and input fields
  document.getElementById("encrypted-image").value = "";
  document.getElementById("decryption-key").value = "";
  document.getElementById("decrypt-encrypted-image").value = "";
  document.getElementById("decrypt-key").value = "";
  
  // Hide the download button
  document.getElementById("download-btn").style.display = "none";
  
  // Hide any notifications or reset states
  const notifications = document.querySelectorAll(".notification");
  notifications.forEach(notification => notification.remove());
  
  // Optionally, hide the loading overlay if it was visible
  hideLoadingOverlay();
  
  showNotification("Form reset successfully!", true);
}
// Paste encrypted image from encryption section to decryption form
function pasteEncryptedImage() {
  const encryptedImage = document.getElementById("encrypted-image").value;
  if (encryptedImage) {
      document.getElementById("decrypt-encrypted-image").value = encryptedImage;
      showNotification("Encrypted image pasted successfully!", true);
  } else {
      showNotification("No encrypted image to paste.", false);
  }
}

// Paste decryption key from encryption section to decryption form
function pasteDecryptionKey() {
  const decryptionKey = document.getElementById("decryption-key").value;
  if (decryptionKey) {
      document.getElementById("decrypt-key").value = decryptionKey;
      showNotification("Decryption key pasted successfully!", true);
  } else {
      showNotification("No decryption key to paste.", false);
  }
}


