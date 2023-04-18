const onNameClick = function () {
  //  console.log('got into function')
  //   $('#message').text('Welcome to the moon.')
  //   $('#message').css('background-Color', 'blue')
  //   setTimeout(() => $('#message').text(''), 3000)
  //   $('.container').addClass('animated rollOut');
  //   $('#welcomePage').addClass('animated rollIn')
  }

const addHandlers = () => {
    // $('#nextView').on('click', onMoonClick)
  }

  $(() => {
    addHandlers()
  })

  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

