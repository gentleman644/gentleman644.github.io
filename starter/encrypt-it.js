/*
 * This is an encryption file that will encrypt the text-to-encrypt 
 */
(function() {
  console.log("Window loaded!");

  const resetButton = document.getElementById("reset");
  const encryptButton = document.getElementById("encrypt-it");
  const cipherType = document.getElementById("cipher-type");
  const textArea = document.getElementById("input-text");
  const resultArea = document.getElementById("result");
  window.addEventListener("load", init);
  
  function init() {
    resetButton.onclick = handleRest;
    encryptButton.onclick = handleEncrypt;
  }

  /**
   * This will handle the rest button when pressed on
   */
  function handleRest(){
    textArea.value = "";
    resultArea.textContent = "";

  }

  /**
   * This will handle the encryption button when pressed on
   */
  function handleEncrypt(){
    switch (cipherType.value){
      case "shift":
        shiftCipher().then((results)=>writeResult(results));
        break;
    }
  }

  /**
   * Handles the shift cipher sequence and will return the new text that has been
   * encrypted
   */
  async function shiftCipher() {
    let text = textArea.value.toLowerCase();
    let result = textArea.value.split("");
    for(let i = 0; i < text.length; i++){
      if (text[i] == 'z'){
        result[i] = String.fromCharCode(result[i].charCodeAt(0) - 25);
      }else if(text[i] > 'a' && text[i] < 'z'){
        result[i] = String.fromCharCode(result[i].charCodeAt(0) + 1);
      }
      
    }
    return result.join("");
  }

  /**
   * writes the given text into the result paragraph box
   */
  function writeResult(result){
    resultArea.textContent = result;
  }
})();
