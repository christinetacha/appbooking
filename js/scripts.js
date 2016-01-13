$(document).ready(function() {
  $("form").submit(function(event) {
    var Name = $("#inputName1").val();
    var appointmentDate = $("#inputDate1").val();
    var StartTime = $("#inputStartTime1").val();
    var EndTime = $("#inputEndTime1").val();

    $("#clientName").text(Name);
    $("#clientDate").text(appointmentDate);
    $("#clientStartTime").text(StartTime);
    $("#clientEndTime").text(EndTime);

    $(".confirmation").show();
    $("form").hide();

    event.preventDefault();
  })
})
