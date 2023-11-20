const medinfo = document.querySelectorAll(".medinfo");

medinfo.forEach((expandable) => {
  expandable.addEventListener("click", () => {
    expandable.classList.toggle("expanded");
  });
});

medinfo.addEventListener =
  ("click",
  function () {
    console.log("Clicked the Medinfo Card");
    medinfo.classList.toggle("expanded");
  });

$(document).ready(function () {
  $("#search").on("input", function () {
    // Get the value of the search input and convert it to lowercase
    var searchTerm = $(this).val().toLowerCase();

    // Iterate over each element with the class "medinfo"
    $(".medinfo").each(function () {
      // Get the text content of the child element with the class "medname" and convert it to lowercase
      var medNameText = $(this).find(".medname").text().toLowerCase();

      // Log the lowercase text content to the console for debugging
      console.log(medNameText);

      // Check if the search term is present in the text content of the child element
      if (medNameText.indexOf(searchTerm) > -1) {
        // If present, show the parent element with class "medinfo"
        $(this).show();
      } else {
        // If not present, hide the parent element with class "medinfo"
        $(this).hide();
      }
    });
  });
});