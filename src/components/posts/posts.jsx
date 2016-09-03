var React = require("react");
var PostList = require("./post-list");
var Reflux = require("reflux");
var PostsStore = require("../../stores/posts-store");
var Actions = require("../../actions");


module.exports = React.createClass({
    mixins:[
        Reflux.listenTo(PostsStore,'onPostChange')
        ],
    getInitialState: function(){
        return{
            posts : []
        }

    },
    componentWillMount: function(){
        Actions.getPosts();
    },
    render:function(){
        return <div className="list-group">
        {this.renderContent()}

        </div>
    },
    renderPostLists:function(){

        return this.state.posts.map(function(post){
            return <PostList key={post.id} postData = {post} />
        });
    },
    renderContent:function(){
       return this.props.children || this.renderPostLists();
    },
    onPostChange:function(evt,postData){
       if(evt === 'change')
         this.setState({
                posts : postData
            })
    }
})