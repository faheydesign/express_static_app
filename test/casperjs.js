casper.test.begin("Site is up and running", 1, function(test) {
  casper.start('http://localhost:3000/', function() {
    test.assertHttpStatus(200);
  }).run(function() {
    test.done();
  });
});
