//Debouncing
//Debouncing ensures that a function is executed only after a certain delay has passed since the last event.

function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  
  // Example usage
  const search = debounce((query) => {
    console.log("Searching for:", query);
  }, 500);
  
  document.getElementById("searchBox").addEventListener("input", (e) => {
    search(e.target.value);
  });


//Throttling
//Throttling ensures that a function is executed at most once every specified interval,
// no matter how many times the event occurs.

function throttle(func, limit) {
    let lastCall = 0;
    return function(...args) {
      const now = Date.now();
      if (now - lastCall >= limit) {
        lastCall = now;
        func.apply(this, args);
      }
    };
  }
  
  // Example usage
  const logScroll = throttle(() => {
    console.log("Scrolling at", window.scrollY);
  }, 200);
  
  window.addEventListener("scroll", logScroll);