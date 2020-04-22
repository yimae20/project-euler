var child_process = require('child_process');

var child = child_process.fork('./child');

setTimeout(function () {
  console.log('Timeout');
  process.exit(1);
}, 5000);

child.on('message', function (msg) {
  console.log(msg);
});

child.send({ start: 1000000 });
