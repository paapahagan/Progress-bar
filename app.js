let progress = document.getElementById("progress");

window.onscroll = function () {
  updateProgress();
};

function updateProgress() {
  let scrollPosition =
    document.documentElement.scrollTop || document.body.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scrolled = (scrollPosition / height) * 100;
  progress.style.width = `${scrolled}%`;
}
