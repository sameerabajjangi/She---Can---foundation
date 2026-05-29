document.getElementById("joinForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("successMessage").style.display = "block";

    this.reset();
});