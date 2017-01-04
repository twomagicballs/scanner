var express = require('express')
var app = express()
var google = require('./google')

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello.' })
})

/*app.get('/', function (req, res) {
  res.send('Hello World!')
})*/

app.listen(1337, function () {
  console.log('listening on port 1337')
})

app.get('/search/:domain', function (req, res){
  var r = google.numResults(req.params.domain)
  
  var googleArr = google.subdomainScan(req.params.domain)
  res.render('search', {poops:googleArr, r:r})
})

function virusTotal(domain) {
  domainUser = `https://www.virustotal.com/en/domain/${domain}/information/`
  var html = afterLoad(domainUser)
  var $=afterLoad.$(html)
  console.log($('#observed-subdomains a'))
  console.log($('#observed-subdomains a').length)
  for (var stuff in $('#observed-subdomains a')){
    console.log($('#observed-subdomains a')[stuff])
  }
}
