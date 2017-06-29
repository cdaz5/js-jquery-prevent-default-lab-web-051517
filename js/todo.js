$(document).ready(function(){
  submitForm()
});

function submitForm() {
  $('form').on('submit', (event) => {
    let input = $('#item').val();
    $('#list ol').append(`<li>${input}</li>`)
    event.preventDefault(event)
  })
}
// define functions here
