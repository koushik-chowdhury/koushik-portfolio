document.addEventListener("DOMContentLoaded", function() {
    // Check if the device width is less than or equal to 768px (common breakpoint for tablets and phones)
    if (window.innerWidth <= 768) {
      showToast();
    }
    
    function showToast() {
      var toast = document.getElementById("toast");
      toast.classList.add("show");
      
      // Hide the toast after 5 seconds
      setTimeout(function() {
        toast.classList.remove("show");
      }, 7000);
    }
  });
  