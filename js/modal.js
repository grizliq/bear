(function () {
  function closeModal(modal) {
    modal.classList.remove("is-open");
  }

  function openModal(modal) {
    modal.classList.add("is-open");
  }

  document.querySelectorAll("[data-lb-modal]").forEach(function (modal) {
    modal.querySelectorAll("[data-lb-modal-close]").forEach(function (el) {
      el.addEventListener("click", function () {
        closeModal(modal);
      });
    });
  });

  document.querySelectorAll("[data-lb-modal-open]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var id = btn.getAttribute("data-lb-modal-open");
      var modal = document.getElementById(id);
      if (modal) openModal(modal);
    });
  });

  window.lbOpenModal = function (id) {
    var modal = document.getElementById(id);
    if (modal) openModal(modal);
  };
})();
