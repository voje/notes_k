var data = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];

var TestDiv = React.createClass({
	render: function() {
		return (
			<div className="testDiv">
				Test
			</div>
		);
	}
});

/*
-product box
--query fields
--product table
---productCategory
---product
*/

var ProductBox = React.createClass({
	onChange: function(text, check) {
		console.log("derp");
		this.setState({
			searchText: text,
			check: check
		});
	},
	getInitialState: function() {
		return {
			searchText: "",
			stockCheck: false
		};
	},
	render: function() {
		return (
			<div className="productBox">
				<QueryFields searchText={this.state.searchText} stockCheck={this.state.stockCheck} onChange={this.onChange} />
				<ProductTable data={this.props.data} searchText={this.state.searchText} stockCheck={this.state.stockCheck} />
			</div>
		);
	}
});

var QueryFields = React.createClass({
	onChange: function() {
		this.props.onChange(
			this.refs.ref1,
			this.refs.ref2	
		);		
	},
	render: function() {
		return (
			<div className="queryFields">
				<form>
					<input 
						type="text" 
						placeholder="Search ..." 
						value={this.props.searchText}
						ref="ref1"
						onChange={this.handleChange}
					/>
					<p>
					<input 
						type="checkbox" 
						checked={this.props.stockCheck} 
						ref="ref2"
						onChange={this.handleChange}
					/>
						Only show products in stock.
					</p>
				</form>
			</div>
		);
	}
});

var ProductTable= React.createClass({
	render: function() {
		var currentCategory = "";
		var rows = [];
		var testProduct = {
			name: "test",
			price: 10,
			stock: true
		};
		this.props.data.forEach(function(product) {
			if (!product.stocked && this.props.stateCheck) {
				return;
			}
			if (product.category != currentCategory) {
				currentCategory = product.category;
				var tmp = <ProductCategory categoryName={product.category} key={product.category} />;
				rows.push(tmp);
			}
			rows.push( <Product product={product} key={product.name} /> );
		}.bind(this));
		return (
			<div className="productTable">
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
		);
	}
});

var ProductCategory = React.createClass({
	render: function() {
		return (
			<tr>
				<th colSpan="2">
					{this.props.categoryName}
				</th>
			</tr>
		);
	}
});

var Product = React.createClass({
	render: function() {
		var name = this.props.product.stocked ? 
			this.props.product.name : 
			<span style={{color: 'red'}}>
				{this.props.product.name}
			</span>;
		return (
			<tr className="product">
				<td>
					{name}
				</td>
				<td>
					{this.props.product.price}
				</td>
			</tr>
		);
	}
});

ReactDOM.render(
	<ProductBox data={data} />,
	document.getElementById("content")
);