(function(window) {
  var helloSpeaker = {}; // Create helloSpeaker object

  var speakWord = "Hello"; // Define speakWord variable

  // Attach speak method to helloSpeaker object
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  // Expose helloSpeaker to the global scope
  window.helloSpeaker = helloSpeaker;
})(window);
