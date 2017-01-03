var express = require('express')
var app = express()
var afterLoad=require('after-load')

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello!' })
})

/*app.get('/', function (req, res) {
  res.send('Hello World!')
})*/

app.listen(1337, function () {
  console.log('listening on port 1337')
})

app.get('/search/:domain', function (req, res){
  var googleArr = googleScan(req.params.domain)
  
  virusTotal(req.params.domain)
  //res.send(googleArr.toString())
  res.render('search', {poops:googleArr})
  //res.send(googleArr[0])
  /*domainUser = `https://www.google.com/search?q=site%3A*.${req.params.domain}`;
  res.send(domainUser)
  var html = afterLoad(domainUser)
  //var html=afterLoad('https://www.google.com/search?q=site%3A*.blizzard.com')
  var $=afterLoad.$(html);
  
  console.log($('cite').length)
  
  for (var i=0; i<$('cite').length; i++) {
    console.log($('cite')[i].children[0].data)
  }*/
})

function googleScan(domain) {
  domainUser = `https://www.google.com/search?q=site%3A*.${domain}`;
  var html = afterLoad(domainUser)
  //var html=afterLoad('https://www.google.com/search?q=site%3A*.blizzard.com')
  var $=afterLoad.$(html);
  console.log($('cite').length)
  
  var array = [] 
  for (var i=0; i<$('cite').length; i++) {
    //console.log($('cite')[i].children[0].data)
    array.push($('cite')[i].children[0].data)
  }
  return array
};

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
