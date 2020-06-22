import { pingPong2 } from './ping-pong-2';

$(document).ready(function() {
  $('#ping-pong-2-form').submit(function(event) {
    event.preventDefault();
    const goal = $('#goal').val();
    const output = pingPong2(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});