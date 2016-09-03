var React = require("react");
var ReactRouter = require("react-router");

var Link = ReactRouter.Link;

module.exports = React.createClass({
    render: function(){
        return <nav className="navbar navbar-default">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <Link className="navbar-brand" to="/">ReFluxDemo</Link>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                      <li className=""><Link to="/posts">Posts</Link></li>

                    </ul>
                  </div>
                </nav>

    }
})