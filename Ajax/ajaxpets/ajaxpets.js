/**
 * A webpage for fetching cute pet photos. Puppies (the best) or
 * kitties will be populated on the page after the user selects their desired
 * pet type.
 */
(function() {
  "use strict";
  console.log("Window loaded!");

  window.addEventListener("load", init);
  const ajax = "https://courses.cs.washington.edu/courses/cse154/webservices/pets/ajaxpets.php";
  
  /**
   * TODO: What do we need to initialize?
   */
  function init() {
    // TODO
    let radios = qsa("input[name='animal']");
    radios.forEach(radio => {
      radio.addEventListener("change", makeRequest);
    });
  }
  /**
   * TODO: Fetch data from the CSE 154 ajax pets api!
   */
  function makeRequest() {
    // TODO
    console.log("makeRequest");
    let animal = "?animal="+this.value;
    fetch(ajax + animal)
      .then(checkStatus)
      .then(response => response.text())
      .then(text => {
        return text.split("\n"); // or split by space, etc.
      })
      .then((img)=>showImages(img))
      .then(console.log);
  }

  /**
   * TODO: Implement any other functions you need
  */
  function showImages(images){
    clearImages();
    console.log(images);
    images.forEach(img => {
      console.log("making image");
      fetch(img)
        .then(checkStatus)
        .then(response => response.json())
        .then((val) => {
          let imgArea = document.createElement("img");
          imgArea.src = val;
          imgArea.alt = "adorable friend";
          id("pictures").appendChild(imgArea);
        })
        .then(console.log);
    });
  }

  function clearImages(){
    let imgs = qsa("#pictures img");
    for (let i = 0; i < imgs.length; i++) {
      imgs[i].remove();
    }
  }

  /* ------------------------------ Helper Functions  ------------------------------ */

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} res - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
  async function checkStatus(res) {
    if (!res.ok) {
      throw new Error(await res.text());
      
    }
    console.log("its ok");
    return res;
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qs(query) {
    return document.querySelector(query);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();
