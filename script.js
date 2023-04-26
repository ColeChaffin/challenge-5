// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {

    $(function () {
    
      $('.saveBtn').on('click', function () {
    var description = $(this).siblings('.description').val();
    var blockId = $(this).closest('.time-block').attr('id');
    
    localStorage.setItem(blockId, description)
      
    
      var currentHour = dayjs().hour();
      $(".time-block").each(function() {
        
        var hour = parseInt($(this).attr("id").split("-")[1])
      
        
        if (hour < currentHour) {
          $(this).addClass("past");
        } else if (hour === currentHour) {
          $(this).addClass("present");
        } else {
          $(this).addClass("future");
        }
      });
    });
      // TODO: Add code to apply the past, present, or future class to each time
      // block by comparing the id to the current hour. HINTS: How can the id
      // attribute of each time-block be used to conditionally add or remove the
      // past, present, and future classes? How can Day.js be used to get the
      // current hour in 24-hour time?
      //
      // TODO: Add code to get any user input that was saved in localStorage and set
      // the values of the corresponding textarea elements. HINT: How can the id
      // attribute of each time-block be used to do this?
    });
    
    var currentDate = new Date();
    var formattedDate = currentDate.toLocaleDateString('en-us', {
      weekday: 'long',
      month: 'long',
      day:'numeric',
      year: 'numeric',
    });
    
    $('#currentDay').text(formattedDate);
    });
    