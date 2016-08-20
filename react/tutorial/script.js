/*
--tableContainer
----searchArea
----listArea
*/

var data = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

var TableContainer = React.createClass({
	getInitialState: function() {
		return ({
			searchText: "",
			boxChecked: false
		});
	},
	handleChange: function(input1, input2) {
		this.setState({
			searchText: input1,
			boxChecked: input2
		});
	},
	render: function() {
		return (
			<div id="table-container">
				<SearchArea searchText={this.state.searchText} boxChecked={this.state.boxChecked} handleChange={this.handleChange} />
				<ListArea products={this.props.products} searchText={this.state.searchText} boxChecked={this.state.boxChecked} />
			</div>
		);
	}
});

var SearchArea = React.createClass({
	hanChange: function() {
		this.props.handleChange(this.refs.ref1.value, this.refs.ref2.checked);
	},
	render: function() {
		return (
			<form>
				<input ref="ref1" type="text" placeholder="Search item..." value={this.props.searchText} onChange={this.hanChange} />
				<p>Show only in-stock items. <input ref="ref2" type="checkbox" checked={this.props.boxChecked} onChange={this.hanChange} /></p>
			</form>
		);
	}
});

var ProductsRow = React.createClass({
	render: function() {
		var stl = { color: "black" };
		if (!this.props.product.stocked) {
			stl.color = "red";
		}
		return (
			<tr style={stl}>
				<td>{this.props.product.name}</td>
				<td>{this.props.product.price}</td>
			</tr>
		);
	}
});

var ListArea = React.createClass({
	render: function() {
		var displayedElements = [];
		this.props.products.forEach(function(e) {
			if ( e.name.indexOf(this.props.searchText)===-1 || (this.props.boxChecked && !e.stocked) ) {
				return;
			}
			displayedElements.push(<ProductsRow key={e.name} product={e} />);
		}.bind(this));
		return (
			<table>
				<tbody>
				<tr>
					<th>Product name</th>
					<th>Product price</th>
				</tr>
				{displayedElements}
				</tbody>
			</table>
		);
	}
});

ReactDOM.render(
	<TableContainer products={data} />,
	document.getElementById("container")
);