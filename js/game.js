let choice = 'O';

function animateChar(node) {
  if(choice==='X'){
    $(`.${node.id}.cross`).toggleClass('cross-shown')
  }
  if(choice==='O'){
    $(`.${node.id}.circle`).toggleClass('circle-shown')
  }
}