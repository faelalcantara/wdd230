let imagesToLoad = document.querySelectorAll('img[data-src]');


const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  }
}


const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px"
}


if('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((images, observer) => {
    images.forEach((img) => {
      if(img.isIntersecting) {
        loadImages(img.target);
        observer.unobserve(img.target);
      }
    });
  }, imgOptions);

  imagesToLoad.forEach(img => {
    observer.observe(img)
  })
} else {
  imagesToLoad.forEach(img => {
    loadImages(img);
  });
}
