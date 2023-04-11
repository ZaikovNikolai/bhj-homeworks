const hasTooltips = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltips.forEach(tooltips => {
  let tooltip = document.createElement('div');
  tooltip.textContent = tooltips.getAttribute('title');
  tooltip.classList.add('tooltip');
  tooltip.style.position = "absolute";
  tooltip.style.left = `${tooltips.getBoundingClientRect().left}px`;
 

  tooltips.addEventListener('click', (event) => {
    event.preventDefault();
    tooltips.insertAdjacentElement('afterEnd', tooltip);
    if (tooltips.className == 'has-tooltip') {
      tooltip.classList.toggle('tooltip_active')
    } 
  })
})
    
