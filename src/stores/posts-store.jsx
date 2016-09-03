var Api = require("../utils/api");
var Reflux = require("reflux");
var Actions = require("../actions");

module.exports = Reflux.createStore({
    listenables : [Actions],
    getPosts : function(){
        return Api.get('/posts').then(function(posts){
            this.posts = posts;
            this.trigger('change',this.posts);
        }.bind(this))
    },
    getPostById : function(id){
         return Api.get('/posts/'+id).then(function(post){
            this.post = post;
            this.trigger('post_update',this.post);
        }.bind(this))
    }
})