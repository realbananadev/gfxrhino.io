document.addEventListener('DOMContentLoaded', () => {
  // Add event listener to all dropdown buttons
  document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', () => {
      // Toggle the active state of the dropdown button
      const isActive = button.classList.contains('active');

      // Close all dropdowns
      document.querySelectorAll('.dropdown-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.dropdown-content').forEach(content => content.style.display = 'none');

      // If the button wasn't active, open the dropdown
      if (!isActive) {
        button.classList.add('active');
        button.nextElementSibling.style.display = 'block';
      }
    });
  });
});
