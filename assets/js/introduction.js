const toolTip = document.querySelectorAll(".tooltip");

if (toolTip) {
  toolTip.forEach(function (tool) {
    const link = document.createElement("a");
    const span = document.createElement("span");
    link.setAttribute("href", tool.dataset.url);
    span.setAttribute(tool.dataset.tooltipType, tool.dataset.tooltipType);
    link.appendChild(tool.firstChild);
    tool.appendChild(link);
    tool.appendChild(span);
    if (span.hasAttribute(tool.dataset.tooltipType)) {
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
  });
}
