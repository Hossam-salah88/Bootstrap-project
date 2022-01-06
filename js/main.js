// ==================== Progress Section ================
const progressSection = document.querySelector(".progress_section");
const progressBar = document.querySelectorAll(".progress-bar");

ScrollOut({
  targets: ".progress_section",
});

window.addEventListener("scroll", function () {
  if (progressSection.dataset.scroll == "in") {
    progressBar.forEach((el) => {
      let valueNew = el.getAttribute("aria-valuenow");
      el.style.width = valueNew + "%";
      let counterSpan = el.parentElement.parentElement.querySelector(
        ".progres-value span"
      );
      let timer = this.setInterval(() => {
        if (Number(counterSpan.textContent) < valueNew) {
          counterSpan.textContent = Number(counterSpan.textContent) + 1;
        } else {
          clearInterval(timer);
        }
      }, 500);
    });
  } else {
    progressBar.forEach((el) => {
      el.style.width = 0 + "%";
      el.parentElement.parentElement.querySelector(
        ".progres-value span"
      ).textContent = 0;
    });
  }
});

// ======================= filter items ========================

const filterListItems = document.querySelectorAll(".list-group li");
const filterItems = document.querySelectorAll(".fliter-item a");

filterListItems.forEach((el) => {
  el.addEventListener("click", () => {
    let activeItem = document.querySelector(".list-group li.active");
    activeItem.classList.remove("active");
    el.classList.add("active");
    let filteredValue = el.dataset.filter;
    filterItems.forEach((item) => {
      if (item.classList.contains(filteredValue)) {
        item.classList.add("active");
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
        item.classList.remove("active");
      }
    });
  });
});

// ========================== Light Gallary =================
lightGallery(document.getElementById("lightgallery"), {});
