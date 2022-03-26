const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = "mJCT83CZ1qhwFLLpERRxhfo3iSev0-jBGgS2xZAVqYs";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Helper Function to set attributes
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

//Links, photos
function displayPhotos() {
  photosArray.forEach((photo) => {
    //Creating <a>
    const item = document.createElement("a");

    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    //Create <img> for photo
    const img = document.createElement("img");

    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    //Put <img> inside <a>
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

//Get Photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {}
}

getPhotos();
