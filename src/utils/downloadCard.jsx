
import html2canvas from "html2canvas";

const downloadCard = (elementId, fileName) => {
  const element = document.getElementById(elementId);

  html2canvas(element, {
    useCORS: true,
    backgroundColor: null, // Keeps background transparent
    scrollX: false,
    scrollY: false,
    scale: window.devicePixelRatio,
  }).then((canvas) => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = fileName;
    link.click();
  });
};

export default downloadCard;






