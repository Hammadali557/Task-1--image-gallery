const images = [
    "https://picsum.photos/id/1015/800/500",
    "https://picsum.photos/id/1025/800/500",
    "https://picsum.photos/id/1035/800/500",
    "https://picsum.photos/id/1045/800/500",
    "https://picsum.photos/id/1055/800/500"
  ];
  
  let currentIndex = 0;
  
  function openModal(index) {
    currentIndex = index;
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-img").src = images[currentIndex];
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("modal-img").src = images[currentIndex];
  }
  
  function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("modal-img").src = images[currentIndex];
  }
  