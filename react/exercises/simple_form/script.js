
var HelloWrapper = React.createClass({
	getInitialState: function() {
		return({
			userName: "unknown"
		});
	},
	onChange: function(newTxt) {
		this.setState({
			userName: newTxt
		});
	},
	render: function() {
		return(
			<div>
				<HelloHeader txt={this.state.userName} />
				<MyForm txt={this.state.userName} onChange={this.onChange} />
			</div>
		);
	}
});

var HelloHeader = React.createClass({
	render: function() {
		return(<h1>HELLO, {this.props.txt}!!!</h1>);
	}
});

var MyForm = React.createClass({
	onChange: function() {
		this.props.onChange(this.refs.input1.value);
	},
	render: function() {
		var vvv = this.props.txt == "unknown" ? "" : this.props.txt;
		return(
			<form>
				<p>Insert your name here: <input ref="input1" type="text" placeholder="unknown" value={vvv} onChange={this.onChange} /> </p>
			</form>
		);
	}
});

ReactDOM.render( <HelloWrapper />, document.getElementById("content") );