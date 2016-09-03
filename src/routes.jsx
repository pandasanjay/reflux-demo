var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;

var Main = require("./components/main");
var Posts = require("./components/posts/posts");
var Post = require("./components/posts/post");

module.exports = (function(){
    return <Router history={browserHistory}>
        <Route path="/" component={Main} >
            <Route path="posts" component={Posts} >
                <Route path=":id" component={Post} />
            </Route>
        </Route>
    </Router>
}());

  /*  <Route path="/posts" component={Posts} /> */