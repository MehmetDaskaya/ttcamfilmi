// whatsapp-button.js
(function () {
  const whatsappButtonHTML = `
    <a
      href="https://wa.me/905331477525"
      target="_blank"
      class="fixed bottom-8 right-8 p-3 bg-green-500 text-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition duration-300"
      style="position: fixed; bottom: 14px; right: 14px; z-index: 9999;"
      aria-label="WhatsApp"
    >
      <i class="fab fa-whatsapp text-4xl"></i>
    </a>
  `;

  // Append the WhatsApp button to the body
  document.addEventListener("DOMContentLoaded", () => {
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = whatsappButtonHTML;
    document.body.appendChild(buttonContainer);
  });
})();
