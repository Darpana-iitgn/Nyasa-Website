const activePage = window.location.pathname;
// console.log(activePage)
const navLinks = document.querySelectorAll('nav a').forEach(link =>{
    // console.log(link.hre);
    if(link.href.includes(`${activePage}`)){
        link.classList.add('activePage');
    }
})

// Get references to the card image and the popup elements
const cardImages = document.querySelectorAll('.newImgbox');
const imagePopup = document.getElementById('imagePopup');
const popupImage = document.getElementById('popupImage');
const body = document.body;

// Function to open the popup
function openPopup(imageSrc) {
  popupImage.setAttribute('src', imageSrc);
  imagePopup.style.display = 'block';
  body.classList.add('blurred-background');
}

// Function to close the popup
function closePopup() {
  imagePopup.style.display = 'none';
  body.classList.remove('blurred-background');
}

// Add click event listeners to all card images
cardImages.forEach(function(cardImage) {
  cardImage.addEventListener('click', function() {
    const imageSrc = this.querySelector('img').getAttribute('src');
    openPopup(imageSrc);
  });
});

// Add click event listener to close the popup when clicking on it
imagePopup.addEventListener('click', function() {
  closePopup();
});

// Prevent the click event on the popup itself from closing it
popupImage.addEventListener('click', function(event) {
  event.stopPropagation();
});





