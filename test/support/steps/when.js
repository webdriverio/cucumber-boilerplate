/**
 * when steps
 */

module.exports = function() {

        // TODO change element <-> action
    this.when(/^I (click|doubleclick) on the (link|button|element) "$string"$/, function (type, element, action, done) {
            var elem = type === 'den Link' ? '=' + element : element,
                method = action === 'klicke' ? 'click' : 'doubleClick';
            browser[method](elem, this.noError).call(done);
        })

        // TODO change element <-> action
        .when(/^I (add|set) "$string" to the inputfield "$string"$/, function (text,obsolete,element,method,done) {
            var command = method === 'hinzufüge' ? 'addValue' : 'setValue';
            browser[command](element, text, this.noError).call(done);
        })

        .when(/^I clear the inputfield "$string"$/, function(element,done) {
            browser.clearElement(element, this.noError).call(done);
        })

        .when(/^I drag element "$string" to element "$string"$/, function (source,destination,done) {
            browser.dragAndDrop(source,destination,this.noError).call(done);
        })

        .when(/^I submit the form "$string"$/, function (form, done) {
            browser.submitForm(form,this.noError).call(done);
        })

        .when(/^I wait on element "$string"( for \d+ms max)*$/, function (elem,ms,done) {
            browser.waitFor(elem,parseInt(ms,10),this.noError).call(done);
        })

        .when(/^I pause for \d+ms$/, function (ms,done) {
            browser.pause(ms,this.noError).call(done);
        })

        .when(/^I set a cookie "$string" with the content "$string"$/, function(name,content,done) {
            browser.setCookie({name: name, value: content},this.noError).call(done);
        })

        .when(/^I delete the cookie "$string"$/, function(name,done) {
            browser.deleteCookie(name,this.noError).call(done);
        });

}