 function displayTime(){
  
      var time = new Date();
      var hours = time.getHours();
      var minutes = time.getMinutes();
      var seconds = time.getSeconds();
      var meridiem = "AM";
      if (hours >= 12) {
        meridiem = "PM";
      }
      if (hours > 12) {
        hours = hours - 12;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      } 
      var curentTime = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    
      document.getElementById('DigitalClock').innerText = curentTime;
      setTimeout(displayTime, 1000);
    };
    displayTime();