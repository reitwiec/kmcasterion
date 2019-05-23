window.onload = function() {
  var card = document.getElementsByClassName("card");
  for (var i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function() {
      this.classList.toggle("flipped");
    });
  }

  //if i remove the code from here onwards, each card will flip when clicked. otherwise
  //some cards are not flipped on clicking

  var x = window.matchMedia("(max-width: 632px)");
  onSizeChange(x);
  x.addListener(onSizeChange);

  function onSizeChange(x) {
    if (x.matches) {
      // If media query matches
      for (var i = 0; i < card.length; i++) {
        card[i].style.zIndex = i + 1;
        card[i].parentElement.style.top = -90 * i + "px";
      }
      var k = 0;
      for (var i = 0; i < card.length; i++) {
        card[i].addEventListener("click", separateCards);

        card[i].addEventListener("click", function(e) {
          if (k == 0) {
            var num = parseInt(e.path[1].dataset.key) - 1;
            card[num].scrollIntoView({
              behavior: "instant",
              block: "center",
              inline: "nearest"
            });
            k = 1;
          }
        });
      }
    }
  }

  function separateCards() {
    for (var i = 0; i < card.length; i++) {
      card[i].parentElement.style.top = 50 * i + "px";
      card[i].style.boxShadow = "10px 10px 20px black";
    }
  }
};

window.smoothScroll = function(target) {
  var scrollContainer = target;
  do {
    //find scroll container
    scrollContainer = scrollContainer.parentNode;
    if (!scrollContainer) return;
    scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do {
    //find the top of target relatively to the container
    if (target == scrollContainer) break;
    targetY += target.offsetTop;
  } while ((target = target.offsetParent));

  scroll = function(c, a, b, i) {
    i++;
    if (i > 30) return;
    c.scrollTop = a + ((b - a) / 30) * i;
    setTimeout(function() {
      scroll(c, a, b, i);
    }, 20);
  };
  // start scrolling
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
};
