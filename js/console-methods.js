// Info: Let user know script is running.
console.info("The script is running");

var $form, width, height, area;
$form = $("#calculator");

// On blur event
$("form input[type='text']").on("blur", function()
{
  // Warn: let the user know what they entered
  console.warn("You entered " + this.value);
});

// When form is submitted.
$("#calculator").on("submit", function(e)
{
  e.preventDefault();

  width = $("#width").val();
  height = $("#height").val();

  area = width * height;
  // Error: show area
  console.error(area);

  $form.append("<p class='result'>" + area + "</p>");
});
