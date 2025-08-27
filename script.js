<script>
  document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {
      let details = card.querySelector(".product-details");
      details.classList.toggle("show");
    });
  });
</script>
