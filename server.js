var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function () {
    console.log('Server running on 8080...');
});
//# sourceMappingURL=server.js.map

var watson = require('watson-developer-cloud');

var conversation = new watson.ConversationV1({
  username: '2533be81-69d0-4bd8-8cd8-f47913eb8810',
  password: 'qNZcHksmxsqh',
  version_date: '2018-02-16'
});
