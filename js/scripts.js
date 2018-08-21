// Business logic
function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.price = function() {
  var basePrice = 10;
  if (this.movie === "Blindspotting") {
    basePrice += 2;
  }
  if (this.time < 4) {
    basePrice -= 1;
  }
  if(this.age >= 65) {
    basePrice -= 5;
  }
  return basePrice;
}

function resetForm () {
  // $("input:radio[name=movies]:checked").prop("checked", false);
  // $("#time").val("1");
  // $("#age-range").reset();
  $("#user-input").trigger("reset");
  $("#age-output").text("50");
}
// UI logic
var showAge = function() {
  var ageRange = $("#age-range").val();
  $("#age-output").text(ageRange);
}
$(document).ready(function() {
  $("#user-input").submit(function(event) {
    event.preventDefault();

    var movieChoice = $("input:radio[name=movies]:checked").val();
    console.log(movieChoice);
    var timeChoice = parseInt($("#time").val());
    var ageChoice = parseInt($("#age-range").val());
    var newTicket = new Ticket(movieChoice, timeChoice, ageChoice);
    var finalPrice = newTicket.price();
  //  $("#price").text(finalPrice);
    $(".movie-name").text(newTicket.movie);
    $(".movie-time").text(newTicket.time);
    $(".movie-price").text(finalPrice);
    $("#ticket").show();
    resetForm();
  });
});
