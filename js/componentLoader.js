// this load the navbar component in the html page.
fetch("./components/navbar.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("share-nav").innerHTML = data;
  });

// experimented if specific how to check if specidfic page loads
// not a good practice to mix, but uses jquery to append html
fetch("./components/footer.html")
  .then((res) => res.text())
  .then((data) => {
    $("#footernav").html(data);
    //document.getElementById("footernav").innerHTML = data;
  });
