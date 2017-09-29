
/**
 * Check if the content for table cells are sorted asc / desc
 * @param  {String}   column    In which column does the content reside
 * @param  {String}   row       Starting from which row do want to check the content
 * @param  {String}   elem      Element selector for the table
 * @param  {String}   order     Assert how the content is ordered
 * @param  {Function} done      Function to execute when finished
 */

module.exports = (column, row, elem, order, done) => {

//determine if the elememt selected is indeed a table
if (browser.getTagName(elem) === "table"){

    //create array
    var orderArray = [];

    //fill array with values
        //set nr of row to start on (in case the table does not have a thead and the first row is used for headinggs)

    var startAtRow
    switch (row){
        case 'first' : {
                startAtRow = 1;
                break;
            }
            case 'second' : {
                startAtRow = 2;
                break;
            }
            case 'third' : {
                startAtRow = 3;
                break;
            }
            default: {
                startAtRow = 1;
            }
        }
    // console.log('startbij'+startAtRow)

        //determine which column in a table to get the values from

    switch (column){
        case 'first' : {
                column = 1;
                break;
            }
            case 'second' : {
                column = 2;
                break;
            }
            case 'third' : {
                column = 3;
                break;
            }
            case 'fourth' : {
                column = 4;
                break;
            }
            case 'fifth' : {
                column = 5;
                break;
            }
            default: {
                column = 1;
            }
        }

        //determine the nr of rows in the table for the loop that fills the array
    var test = browser.elements(elem + ' tr')
    var counted = test.value.length
    // console.log('count' + counted)

        //based on the nr of rows and where to start counting we can determine how many loops we need to in the for loop to fill the array
    var loops = counted - (startAtRow-1)
    // console.log('keer:'+loops)

    //push the values in the cells to the array
    var i
    for (i = 0; i < loops; i++){
        var newrow = ((startAtRow-1)+i)
        orderArray.push(browser.getText(elem + ' tr:nth-child('+newrow+') td:nth-child('+column+')').toLowerCase().replace(/ /g,""))
    }

     // console.log(orderArray)

    //check if values in array are sorted (asc/desc)
    if (order === 'asc') {
        // console.log('true')
        expect(expect(orderArray).to.be.ascending).to.be.true
    }
    else {
        // console.log('false')
        expect(expect(orderArray).to.be.descending).to.be.true
    }

    done();
    }

//if element is not a table
else{
    browser.getTagName(elem).should.equal('table')
    done();
    }
}
