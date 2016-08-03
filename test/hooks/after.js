var AfterHook = module.exports = function (done) {
    this.browser.end().then(function(){
        done();
    });
};