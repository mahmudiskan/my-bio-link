/**
 * Untuk Membuat Link bisa Copy
 */

const actionLink = document.querySelectorAll(".link-card .link-action");

actionLink.forEach((action) => {
  action.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(action.parentElement.getAttribute("href"));

    /**
     * Untuk Memunculkan Toast Notification
     */
    document.getElementById("toast").innerHTML = `
        <div class="toast-container">
            <p>✅ Link <strong> ${action.parentElement.innerText} </strong> Berhasil Disalin!</p>
        </div>
    `;

    /**
     * Untuk Menghilangkan Toast Notification
     */

    setTimeout(() => {
      document.querySelector("#toast .toast-container").classList.add("toast-gone");
    }, 300);

    setTimeout(() => {
      document.querySelector("#toast .toast-container").remove();
    }, 2000);
  });
});

/**
 * Untuk Mengganti Icon Sosmed saat Di Hover
 */

document.querySelectorAll(".sosmed i").forEach((sosmed) => {
  sosmed.addEventListener("mouseenter", () => {
    sosmed.classList.remove("ph");
    sosmed.classList.add("ph-fill");
  });

  sosmed.addEventListener("mouseleave", () => {
    sosmed.classList.remove("ph-fill");
    sosmed.classList.add("ph");
  });
});

/**
 * Animasi Bergerak saat Scroll
 */

document.addEventListener("scroll", (e) => {
  document.querySelector(".bg-text-animation").style.transform = `translateX(${window.scrollY / 3}px)`;
});
