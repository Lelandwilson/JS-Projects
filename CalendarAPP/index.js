let menuVisible = true;

$(document).ready(function() {
  // Default load
  loadWeather();
  updateTimeDate();
  $("#titleSection").animate({ left: '10px' }, 500);

  // Update time every minute
  setInterval(updateTimeDate, 60000); // 60 * 1000 milliseconds = 1 minute

  function updateTimeDate() {
    const now = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dayName = days[now.getDay()];
    const day = now.getDate();
    const monthName = months[now.getMonth()];
    const hour = now.getHours();
    const minute = now.getMinutes();
    const ampm = hour >= 12 ? 'pm' : 'am';
    
    let hour12 = hour % 12;
    hour12 = hour12 ? hour12 : 12; // the hour '0' should be '12'
    
    const formattedDate = `${dayName} ${day} ${monthName} ${hour12}:${minute < 10 ? '0' : ''}${minute} ${ampm}`;
    $("#timeDate").text(formattedDate);
  }
  

  // Toggle menu
  $("#toggleMenu-icon").click(function() {
    const isSmallScreen = $(window).width() <= 768; // Or your breakpoint
    const smallMenuWidth = "120px";
    const largeMenuWidth = "180px";

    
    if (menuVisible) {
      // Hide menu
      $("#sideMenu").animate({ width: '0px' }, 500);
      $("#mainContent").animate({ marginLeft: '10px' }, 500);
      $("#titleSection").animate({ left: '10px' }, 500);
      $("#mainFooter").animate({ marginLeft: '10px' }, 500); 
      $("#sideMenu ul").css('max-height', '0');
      $(".footer-side").animate({ opacity: 0 }, 500, function() {
        $(this).css("display", "none");
      });
    } else {
      // Show menu
      const targetWidth = isSmallScreen ? smallMenuWidth : largeMenuWidth;
      $("#sideMenu").animate({ width: targetWidth }, 500);
      if (!isSmallScreen) {
        $(".footer-side").css("display", "block").animate({ opacity: 1 }, 500);
      }
      $("#mainContent").animate({ marginLeft: '200px' }, 500);
      $("#titleSection").animate({ left: `$(window).width() * 20) / 100px` }, 500);
      $("#mainFooter").animate({ marginLeft: '200px' }, 500);
      $("#sideMenu ul").css('max-height', 'calc(100vh - 55px)'); 
    }
 
    menuVisible = !menuVisible;
  });

  // Navigation Events
  $('#showWeather').click(loadWeather);
  $('#showCalendar').click(loadCalendar);
});

function loadWeather() {
  // Populate with weather view
  $("#mainContent").html("<!-- Weather HTML here -->");
}

function loadCalendar() {
  // Populate with calendar view
  $("#mainContent").html("<!-- Calendar HTML here -->");
}
