var React = require("react");
var Header = require("./header");

module.exports = React.createClass({
    render: function(){
        return <div>
           <Header />
           <div className="container-fluid">
            {this.props.children}
           </div>
        </div>
    }
})