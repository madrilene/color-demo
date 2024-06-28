document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('color-picker');
  const firstParagraph = document.querySelector('article p');
  const rootStyle = getComputedStyle(document.documentElement);

  // Set the initial color from the CSS variable without changing the paragraph
  input.value = rootStyle.getPropertyValue('--color').trim();

  // Function to update the paragraph text and color
  function updateParagraphColor(color) {
    firstParagraph.innerHTML = `The whole website is tinted by the color you set: <strong style="color: ${color};">${color}</strong>.`;
  }

  // Add event listener for color changes
  input.addEventListener('input', function () {
    document.documentElement.style.setProperty('--color', input.value);
    updateParagraphColor(input.value); // Update paragraph only on user input
  });
});
