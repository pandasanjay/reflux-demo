var React = require("react");
var Reflux = require("reflux");
var PostsStore = require("../../stores/posts-store");
var Actions = require("../../actions");



module.exports = React.createClass({
     mixins:[
        Reflux.listenTo(PostsStore,'onPostChange')
        ],
    getInitialState: function(){
        return{
            post : {}
        }

    },
    componentWillMount:function(){
        Actions.getPostById(this.props.params.id);
    },
    render : function(){
        var post = this.satate.post;
        return <h1 className="text-center">{post.title}</H1>;
    },
    onPostChange:function(evt, post){
        if(evt === 'post_update')
        this.setState({post:post});
    }
})