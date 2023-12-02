window.addEventListener("scroll", () => {
  const sidebarIcons = document.querySelectorAll(".icon-link");

  const section1 = document.getElementById("ourservices");
  const section2 = document.getElementById("reviews");

  const sidebarRect = document
    .querySelector("#sidebar-icons")
    .getBoundingClientRect();

  // Check if sidebar overlaps with sections and change icon color
  if (checkOverlap(sidebarRect, section1?.getBoundingClientRect())) {
    sidebarIcons.forEach((icon) => icon.classList.toggle("dark-icons", true));
  } else {
    sidebarIcons.forEach((icon) => icon.classList.toggle("dark-icons", false));
  }
  if (checkOverlap(sidebarRect, section2?.getBoundingClientRect())) {
    sidebarIcons.forEach((icon) => icon.classList.toggle("dark-icons", true));
  } else {
    sidebarIcons.forEach((icon) => icon.classList.toggle("dark-icons", false));
  }
});

function checkOverlap(rect1, rect2) {
  return !(
    rect1?.right < rect2?.left ||
    rect1?.left > rect2?.right ||
    rect1?.bottom < rect2?.top ||
    rect1?.top > rect2?.bottom
  );
}
