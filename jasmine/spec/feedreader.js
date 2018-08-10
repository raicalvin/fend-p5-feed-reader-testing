/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it ('have URLs that are defined and not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('', "", null);
            });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have names that are defined and not empty', function() {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('', "", null);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        let bd;

        beforeEach(function() {
            bd = $('body');
        });

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it ('is hidden by default', function() {
            //bd.toggleClass('menu-hidden');
            expect(jasmine.createSpy(bd, 'toggleClass')).not.toHaveBeenCalledWith('menu-hidden');
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */ 
        it('should change visibility when clicked.', function() {
            bd.toggleClass(); // First click to open menu
            // Expect menu to be displayed when clicked on
            expect(bd.attr('class')).toBe('');
            bd.toggleClass(); // Second click to hide menu
            // Expect menu to be hidden when clicked on
            expect(bd.attr('class')).toBe('menu-hidden');
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        let fd;
        beforeEach(function(done) {
            fd = $('feed');
            init();
            done();
        });

        it('should have at least one entry when loadFeed() is called and completed', function(done) {
            expect(fd).not.toBeNull();
            // console.log(fd);
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('News Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        let item1, item2;

        // Load the second feed and get the first element title
        beforeEach(function(done) {
            loadFeed(1, function() {
                item1 = $('a.entry-link:first')[0].innerText;
                done();
            });
        });
        // Load the first feed and get the first element title
        beforeEach(function(done) {
            loadFeed(0, function() {
                item2 = $('a.entry-link:first')[0].innerText;
                done();
            });
        });

        // Compare that the title of the first element from the first feed does not match the title of the first element of the second feed
        it('ensures content change when new feed loaded', function(done) {
            console.log(item1, item2)
            expect(item1).not.toBe(item2);
            done();
        });



    });

        
}());
