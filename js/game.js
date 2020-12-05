anime.timeline({loop: false})
  .add({
    targets: '.ml15 .word',
    scale: [0,1],
    opacity: [0,1],
    duration: 800,
  }).add({
    targets: '.ml15',
    opacity: 0,
    duration: Infinity,
    delay: 1000
  });
let choice = 'O';

  function fillCell(node){
      let innerHtml = `<div class="cell">${choice}</div>`;
    node.innerHTML = innerHtml;
  }