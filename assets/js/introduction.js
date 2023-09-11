
prepareTooltips();

function prepareTooltips() {
  const toolTip = document.querySelectorAll(".tooltip");
  toolTip.forEach(function (tool) {

    const span = prepereTooltip(tool);
    if (tool.dataset.tooltipType === "text") {
      createTooltipText(span, tool.dataset.tooltipContent)
    } else {
      createTooltipImage(span, tool.dataset.tooltipContent);
    }
  });
}

function prepereTooltip(tool) {
  const link = document.createElement("a");
  link.setAttribute("href", tool.dataset.url);
  link.appendChild(tool.firstChild);
  tool.appendChild(link);

  const span = document.createElement("span");
  tool.appendChild(span);

  return span;
}

function createTooltipText(spanEl, content) {
  spanEl.textContent = content;
  spanEl.classList.add("tooltip__box", "tooltip__box--text");
}

function createTooltipImage(spanEl, content) {
  const img = document.createElement("img");
  spanEl.appendChild(img);
  img.setAttribute("src", content);
  spanEl.classList.add("tooltip__box", "tooltip__box--image");
  img.classList.add("tooltip__image");
}