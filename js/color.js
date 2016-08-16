function change() {
  $('.headColor').css({
    color: '#888',
    transition: 'color 5s'
  })
}

function defaultColor() {
  setTimeout(change, 5000),
    clearTimeout(change)
}

$('.headColor').hover(function() {
  $('.headColor').css({
    color:'#' + (Math.random() * 0xFFFFFF << 0).toString(16),
    transition: 'color 0.1s'
  })
  defaultColor()
});
