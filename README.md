# Web App: Feed Reader Testing

## Project Information

### About

This project utilizes the JavaScript testing framework, Jasmine, to write a series of tests used in the development of a web application that reads and displays RSS feeds. This project is for my Front-End Developer Nanodegree from Udacity.

## Getting Started

### Downloading

You can download the repository from GitHub using the Git command:

```
git clone https://github.com/raicalvin/fend-p5-feed-reader-testing
```

### Running

The Jasmine testing framework is already implemented in the project. Simply open `index.html` and the tests will run automatically.

### Testing

The Jasmine testing framework was utilized for this project to test various functionalities of the program, as listed below:

1. The `allFeeds` object was looped through to ensure that it had a valid name and valid URL for each feed entry
2. The side menu was tested to ensure it was hidden by default when the application first opened and that it changed visibility when the menu icon was clicked
3. The initial entries in a feed should have at least one entry when loaded
4. The news feed selection changes to a different list when a different feed is clicked

## Code Examples

The following code example is a test written to ensure that there is at least one entry when a news feed is loaded. The onLoad() function is asynchronous and utilizes the special done() callback function to allow the test spec to run once the asynchronous work is complete.

```javascript
describe('Initial entries', function() {

        let fd; // hold the feed

        beforeEach(function(done) {
            fd = $('feed');
            init(); // loads the articles for the feed
            done(); // asynchronous work required to be done before spec call
        });

        it('should have at least one entry when loadFeed() is called and completed', function(done) {
            expect(fd).not.toBeNull();
            done();
        });

    });
```

## Built With

* [Jasmine](https://jasmine.github.io/) - JavaScript Testing Framework

## Authors

- Calvin S Rai - *Developer* - [GitHub](https://github.com/raicalvin)

## Resources

The initial project folder and assets were provided by [Udacity](https://github.com/udacity/frontend-nanodegree-feedreader)

## Reference

- Jasmine - *Documentation for Jasmine Testing Framework* - [Documentation](https://jasmine.github.io/)

## Contact

My name is Calvin! :]

Check out my other work here on [GitHub](https://github.com/raicalvin).

You can also reach me by [email](mailto:raicalvin@gmail.com)!
