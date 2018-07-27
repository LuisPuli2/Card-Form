$('[type="text"], [type="tel"]').on('blur', function (e) {
  if (e.target.value !== '') {
    e.target.className = 'input-filled';
  } else {
    e.target.className = '';
  }
});

// thanks to https://github.com/jessepollak/card
$('form').card({
  container: '.card-wrapper',
  width: 338
});