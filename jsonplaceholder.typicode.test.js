const request = require('supertest')
const url = 'https://jsonplaceholder.typicode.com'

describe('https://jsonplaceholder.typicode.com', function() {

// https://jsonplaceholder.typicode.com/posts/1/comments
it('GET /posts/1/comments responds with json', function(done) {
    request(url)
    .get('/posts/1/comments')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, done);
});

it('POST /posts/1/comments responds with json', function(done) {
    request(url)
    .post('/posts/1/comments')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(201)
    .end(function(err, res) {
        if (err) return done(err);
        done();
    });
});

it('GET /posts/1/comments check response content', function(done) {
    let entry = {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        }

    request(url)
    .get('/posts/1/comments')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
                if (err) {
                    return done(err)
                } else {
                console.log(res.body[0])
                expect(res.body[0]).toStrictEqual(entry)
                done()
                }
        });
});

// https://jsonplaceholder.typicode.com/albums/1/photos 
it('responds with json', function(done) {
    request(url)
        .get('/albums/1/photos')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    // https://jsonplaceholder.typicode.com/users/1/albums
    it('responds with json', function(done) {
    request(url)
        .get('/posts/1/comments')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    // https://jsonplaceholder.typicode.com/users/1/todos
    it('responds with json', function(done) {
    request(url)
        .get('/users/1/todos')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    // https://jsonplaceholder.typicode.com/users/1/posts
    it('responds with json', function(done) {
    request(url)
        .get('/users/1/posts')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
    
});


