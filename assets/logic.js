
function toggleMenu() {
  var banner = document.getElementById('banner');
  if (banner.className == 'banner') {
    banner.className = 'banner expanded';
  } else {
    banner.className = 'banner';
  }
}
