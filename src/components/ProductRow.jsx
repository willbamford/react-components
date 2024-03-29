/** @jsx React.DOM */
define(function () {
    var ProductRow = React.createClass({
        render: function () {
            var name = this.props.product.stocked ?
                this.props.product.name :
                <span style={{color: 'red'}}>{this.props.product.name}</span>;
            return (
                <tr>
                    <td>{name}</td>
                    <td>{this.props.product.price}</td>
                </tr>
            );
        }
    });
    return ProductRow;
});