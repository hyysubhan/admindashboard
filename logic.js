let noti = document.querySelector('.noitfy')

noti.addEventListener('click', function() {
    alert("No New Notification");
});
let msg = document.querySelector('.mail')

msg.addEventListener('click', function() {
    alert("No New Message");
});
// this funtion is for notify 
  let button = document.querySelector('.search-btn');
  let searchInputBox = document.querySelector('.search');

  button.addEventListener('click', function(){
    // Toggle the visibility
    if (searchInputBox.style.display === 'none') {
      searchInputBox.style.display = 'block';
    } else {
      searchInputBox.style.display = 'none';
    }
  });

