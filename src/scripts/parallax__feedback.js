const parallax = document.querySelector('.parallax__feedback');
const layers = parallax.children;

function moveLayersDependsOnScroll(wScroll) {

  Array.from(layers).forEach(layer => {

    const divider = layer.dataset.speed;
    const strafe = wScroll * divider / 55;

    layer.style.transform = `translateY(-${strafe}%)`;
  });
}

window.addEventListener("scroll", e => {
  const wScroll = window.pageYOffset;
  moveLayersDependsOnScroll(wScroll);
});