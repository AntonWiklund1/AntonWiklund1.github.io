const nav__items = document.querySelectorAll("a.nav__item");
function ActiveLink() {
  nav__items.forEach((item) => {
    item.classList.remove("active");
    this.classList.add("active");
  });
}
nav__items.forEach((item) => {
  item.addEventListener("click", ActiveLink);
});


document.addEventListener('DOMContentLoaded', function() {
  var xpClick = document.querySelector('.xpClick');
  var xpShowDiv = document.querySelector('.xpShowDiv');
  
  xpClick.addEventListener('click', function() {
    xpShowDiv.classList.add('xpShow');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var profileClick = document.querySelector('.profileClick');
  var profileShowDiv = document.querySelector('.profileShowDiv');
  
  profileClick.addEventListener('click', function() {
    profileShowDiv.classList.add('profileShow');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var auditClick = document.querySelector('.auditClick');
  var auditShowDiv = document.querySelector('.auditShowDiv');
  var auditShowDiv2 = document.querySelector('.auditShowDiv2');
  
  auditClick.addEventListener('click', function() {
    auditShowDiv.classList.add('auditShow');
    auditShowDiv2.classList.add('auditShow2');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var xpClick = document.getElementById('xpClick');
  xpClick.addEventListener('click', function() {
    var items = document.getElementsByClassName('xpHide');
    Array.from(items).forEach(function(item) {
      item.style.display = 'none';
    });

    var itemsShowXp = document.getElementsByClassName('xpShow');
    Array.from(itemsShowXp).forEach(function(itemShowXp){
      itemShowXp.style.display = 'block'; 
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var profileClick = document.getElementById('profileClick');
  profileClick.addEventListener('click', function() {
    var items = document.getElementsByClassName('profileHide');
    Array.from(items).forEach(function(item) {
      item.style.display = 'none';
    });

    var itemsShowProfile = document.getElementsByClassName('profileShowDiv');
    Array.from(itemsShowProfile).forEach(function(itemShowProfile){
      itemShowProfile.style.display = 'block'; 
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var auditClick = document.getElementById('auditClick');
  auditClick.addEventListener('click', function() {
    var items = document.getElementsByClassName('auditHide');
    Array.from(items).forEach(function(item) {
      item.style.display = 'none';
    });

    var itemsShowAudit = document.getElementsByClassName('auditShowDiv');
    Array.from(itemsShowAudit).forEach(function(itemShowAudit){
      itemShowAudit.style.display = 'block'; 
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var auditClick = document.getElementById('attemptsClick');
  auditClick.addEventListener('click', function() {
    var items = document.getElementsByClassName('attemptsHide');
    Array.from(items).forEach(function(item) {
      item.style.display = 'none';
    });

    var itemsShowAudit = document.getElementsByClassName('attemptsShowDiv');
    Array.from(itemsShowAudit).forEach(function(itemShowAudit){
      itemShowAudit.style.display = 'block'; 
    });
  });
});

const reloadDiv = document.getElementById('reloadDiv');

// Add a click event listener to the div
reloadDiv.addEventListener('click', function() {
  // Reload the page
  location.reload();
});