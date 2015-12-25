module.exports = function (form, done) {
    this.browser
        .submitForm(form)
        .call(done);
};
