function createTooltipText(tool) {
  const span = document.createElement("span");
  tool.appendChild(span);
  return span;
}
function createTooltipImage(span, tool) {
  if (tool.dataset.tooltipType === "text") {
    span.textContent = tool.dataset.tooltipContent;
    span.classList.add("tooltip__box", "tooltip__box--text");
  } else {
    const img = document.createElement("img");
    span.appendChild(img);
    img.setAttribute("src", tool.dataset.tooltipContent);
    span.classList.add("tooltip__box", "tooltip__box--image");
    img.classList.add("tooltip__image");
  }
}
function prepareTooltip() {
  const toolTip = document.querySelectorAll(".tooltip");
  toolTip.forEach(function (tool) {
    const link = document.createElement("a");
    link.setAttribute("href", tool.dataset.url);
    link.appendChild(tool.firstChild);
    tool.appendChild(link);
    const span = createTooltipText(tool);
    createTooltipImage(span, tool)
    console.log(span)
  });
}
// prepareTooltip()