/*
-CommentsBox
	-CommentList
		-Comment
	-CommentForm
*/

var data = [
	{id: 1, author: "Pete Hunt", text: "This is one comment"},
	{id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentBox = React.createClass({
	getInitialState: function() {
		return(
			{data: []}
		);
	},
	getDataFromServer: function() {
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(server_data) {
				this.setState({data: server_data});
			}.bind(this)
		});
	},
	componentDidMount: function() {
		this.getDataFromServer();
		setInterval(this.getDataFromServer, this.props.intervalTime);	
	},
	handleCommentSubmit: function(comment) {
		$.ajax({
			url:this.props.url,
			dataType: 'json',
			type: 'POST',
			data: comment,
			success: function(data) {
				this.state.data = data;
				//getDataFromServer(); //also works, I supposer it's slower.
			}
		});
	},
	render: function() {
		return (
			<div className="commentBox">
				<h1>CommentBox header</h1>
				<CommentList data={this.state.data} />
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
			</div>
		);
	}
});

var CommentList = React.createClass({
	render: function() {
		var mapped = this.props.data.map(function(c) {
			return (
				<Comment author={c.author} id={c.id} text={c.text} />		
			);
		});
		return (
			<div className="commentList">
				{mapped}
			</div>
		);
	}	
});

var Comment = React.createClass({
	render: function() {
		return (
			<div className="comment">
				<h3>{this.props.id} :: {this.props.author}</h3>
				{this.props.text}
			</div>	
		);
	}	
});

var CommentForm = React.createClass({
	getInitialState: function() {
		return (
			{author: "", text: ""}
		);
	},
	handleAuthorChange: function(event) {
		this.setState({author: event.target.value });
	},
	handleTextChange: function(event) {
		this.setState({text: event.target.value });
	},
	handleSubmit(event) {
		event.preventDefault();
		var author = this.state.author.trim();
		var text = this.state.text.trim();
		if(!author || !text)
			return;

		this.props.onCommentSubmit({author: author, text: text });
		this.setState({author: "", text: "" });
	},
	render: function() {
		return(
			<form className="commentForm" onSubmit={this.handleSubmit}>
				<h2>New Comment</h2>
				<input
					type="text"
					placeholder="author"
					value={this.state.author}
					onChange={this.handleAuthorChange}
				/>
				<input
					type="text"
					placeholder="comment"
					value={this.state.text}
					onChange={this.handleTextChange}
				/>
				<input type="submit" value="Post" />
			</form>	
		);
	}	
});

//React.renderDOM(<component1>, goesInHere);

ReactDOM.render(
	<CommentBox url="/api/comments" intervalTime={2000} />,	//put this
	document.getElementById('content') //in here
);