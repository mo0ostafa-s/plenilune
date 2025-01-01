function handleTickInit(tick) {
  var counter = Tick.count.down("2025-01-18T12:00:00+02:00");

  counter.onupdate = function (value) {
    tick.value = value;
  };

  counter.onended = function () {
    tick.root.style.display = 'none';
    document.querySelector('.tick-onended-message').style.display = 'block';
  };
}
