// reference: https://github.com/n0wa11/gfw_whitelist/blob/master/whitelist.pac
var proxy1 = "PROXY 192.168.31.2:1080";

var rules = [
  "2chcn.com",
  "ip.cn",
  "bangumi.bilibili.com",
  "weibo.com",
  ".qq.com"
  ];

function FindProxyForURL(url, host) {

  function isDomain(domain) {
    var host_length, domain_length;
    return ((domain[0] === '.') ? (host === domain.slice(1) || ((host_length = host.length) >= (domain_length = domain.length) && host.slice(host_length - domain_length) === domain)) : (host === domain));
  }

  function isInRule(callback) {
    for (var i=0; i<rules.length; i++) {
      if (callback(rules[i]) === true) {
        return true;
      }
    }
    return false;
  }

  if (isInRule(isDomain) == true) {
    return proxy1;
  } else {
    return "DIRECT";
  }
}