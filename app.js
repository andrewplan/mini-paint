$(document).ready(function(){

  var boxes = $('.box');
  var color = 'white';
  var colors = 'red blue green yellow white'

  boxes.on('click', function(){
    $(this).addClass( color );
  });
  boxes.on('dblclick', function(){
    $(this).removeClass( colors );
  });

  $('#reset').on('click', function(){
    boxes.removeClass( colors );
  });

  $('#red').on('click', function() {
    color = 'red';
  });
  $('#blue').on('click', function() {
    color = 'blue';
  });
  $('#green').on('click', function() {
    color = 'green';
  });
  $('#yellow').on('click', function() {
    color = 'yellow';
  });
  $('#white').on('click', function() {
    color = 'white';
  });




});
