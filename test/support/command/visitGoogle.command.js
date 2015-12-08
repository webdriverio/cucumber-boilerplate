module.exports = function () {
  this.browser.addCommand("visitSearchEngine", function(website, options) {
    var callback = arguments[arguments.length - 1];

      return this.url(website).call(callback)
  });

}