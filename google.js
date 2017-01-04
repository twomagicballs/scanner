var afterLoad=require('after-load')

module.exports = {
  subdomainScan: function (domain) {
    domainUser = `https://www.google.com/search?q=site%3A*.${domain}`;
    var html = afterLoad(domainUser)
    var $=afterLoad.$(html);
    console.log($('cite').length)
  
    var array = []
    for (var i=0; i<$('cite').length; i++) {
      //console.log($('cite')[i].children[0].data)
      array.push($('cite')[i].children[0].data)
    }
    return array
  },

  numResults: function (domain) {
    domainUser = `https://www.google.com/search?q=site%3A*.${domain}`;
    var html = afterLoad(domainUser)
    var $=afterLoad.$(html);
    console.log($('#resultStats').text())
  }
};
