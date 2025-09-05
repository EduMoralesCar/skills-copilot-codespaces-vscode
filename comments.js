// Create web server
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

console.log();

console.log('Comments module loaded');

function Comments() {
    this.comments = [];
}

Comments.prototype.addComment = function(comment) {
    this.comments.push(comment);
};

Comments.prototype.getComments = function() {
    return this.comments;
};

module.exports = Comments;