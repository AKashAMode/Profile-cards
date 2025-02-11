import html2canvas from "html2canvas";

const downloadCard = (elementId, fileName) => {
  const element = document.getElementById(elementId);
  const buttons = element.querySelectorAll("button");


  buttons.forEach((btn) => btn.style.opacity = "0");

  html2canvas(element, {
    useCORS: true,
    backgroundColor: null,
    scrollX: false,
    scrollY: false,
    scale: window.devicePixelRatio,
  }).then((canvas) => {
    
    buttons.forEach((btn) => btn.style.opacity = "1");

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = fileName;
    link.click();
  });
};

export default downloadCard;


