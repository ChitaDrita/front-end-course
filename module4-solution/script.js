(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var name of names) {
    var firstLetter = name[0].toLowerCase();

    if (firstLetter == 'j') {
      byeSpeaker.speak(name);
    } else {
      helloSpeaker.speak(name);
    }
  }
})();
