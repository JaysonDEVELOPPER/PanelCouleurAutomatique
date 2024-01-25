const styleChange = () => {
  const elements = document.querySelectorAll(".code-text");

  elements.forEach((element) => {
    const number = ((Math.random() * 0xffffff) << 0)
      .toString(16)
      .padStart(6, "0");
    const randomColor = "#" + number;
    element.style.backgroundColor = randomColor;
    element.textContent = randomColor;
  });
};

document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    styleChange();
  }
});


let isColorChanged = false;

        function toggleColor() {
            const changeColorBackground = document.getElementById("bodyy");
            changeColorBackground.style.backgroundColor = isColorChanged ? '' : '#000';
            isColorChanged = !isColorChanged;
        }
 