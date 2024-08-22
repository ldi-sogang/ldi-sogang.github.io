var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');
var popup = document.getElementById('imagePopup');
var popupImage = document.getElementById('popupImage');
var popupCaption = document.getElementById('popupCaption');
var closeBtn = document.getElementsByClassName('close')[0];
var images = document.getElementsByClassName('gallery-image');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}


for (var i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        popup.classList.remove('d-none');
        popupImage.src = this.src;
        popupCaption.innerHTML = this.alt;
    }
}

// Close popup when close button or outside of popup is clicked
closeBtn.onclick = function() {
    popup.classList.add('d-none');
}
popup.onclick = function(event) {
    if (event.target == popup) {
        popup.classList.add('d-none');
    }
}
