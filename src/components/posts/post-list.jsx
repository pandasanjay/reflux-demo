var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

module.exports = React.createClass({
    render:function(){
        return <div className="list-group-item">
            <Link to={"posts/"+this.props.postData.id} >{this.props.postData.title}</Link>
        </div>
    }
})