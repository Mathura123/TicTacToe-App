let choice = 'X';
function animateChar(node) {
  if(choice==='X'){
    $(`.${node.id}.cross`).toggleClass('cross-shown')
  }
  if(choice==='O'){
    $(`.${node.id}.circle`).toggleClass('circle-shown')
  }
}
function onAboutClick(){
  window.location = site_properties.about_page;
}
function getRules(){
  window.location = site_properties.rules_page;
}