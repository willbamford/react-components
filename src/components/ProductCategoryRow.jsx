/** @jsx React.DOM */
define(function () {
    var ProductCategoryRow = React.createClass({
        render: function () {
            return (<tr><th colSpan="2">{this.props.category}</th></tr>);
        }
    });
    return ProductCategoryRow;
});