export function SorceryAnimation() {
  const animatedDiv = document.getElementById("wandsvg");
  const blankStarDiv = document.querySelectorAll(".blankStar");
  const filledStarDiv = document.querySelectorAll(".filledStar");
  animatedDiv!.classList.remove("rotate-0");
  animatedDiv!.classList.add("rotate-6");
  setTimeout(() => {
    animatedDiv!.classList.remove("rotate-6");
    animatedDiv!.classList.add("-rotate-12");
  }, 300);
  setTimeout(() => {
    animatedDiv!.classList.remove("-rotate-12");
    animatedDiv!.classList.add("rotate-0");
  }, 600);
  blankStarDiv.forEach((item) => {
    setTimeout(() => {
      item.classList.add("animate-[spin_0.5s_linear_infinite]");
    }, 600);
    setTimeout(() => {
      item.classList.remove("animate-[spin_0.5s_linear_infinite]");
      item.classList.add("hidden");
    }, 1100);
    setTimeout(() => {
      item.classList.remove("hidden");
    }, 1000 * 30);
  });
  filledStarDiv.forEach((item) => {
    setTimeout(() => {
      item.classList.remove("hidden");
      item.classList.add("animate-[spin_0.5s_linear_infinite]");
    }, 1100);
    setTimeout(() => {
      item.classList.remove("animate-[spin_0.5s_linear_infinite]");
    }, 1600);
    setTimeout(() => {
      item.classList.add("hidden");
    }, 1000 * 30);
  });
}
