/**
 * @param  {number} interval (in milliseconds)
 */
function cycleBackgrounds(interval) {
  let index = 0

  const $imageEls = document.querySelectorAll('.container2 .slide') // Get the images to be cycled.

  setInterval(() => {
    // Get the next index.  If at end, restart to the beginning.
    index = index + 1 < $imageEls.length ? index + 1 : 0

    // Show the next
    $imageEls[index].classList.add('show')
	 
    // Find the previous.
    const previous = index - 1 < 0 ? $imageEls.length - 1 : index - 1;

    // Hide the previous
    $imageEls[previous].classList.remove('show')
  }, interval)
}
document.addEventListener("DOMContentLoaded", function() {
  cycleBackgrounds(1000);
});