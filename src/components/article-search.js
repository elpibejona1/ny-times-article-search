import React from 'react';

export default class ArticleSearch extends React.Component {

	render() {

		return(
			<form
			className="appSearch"
			id="appSearch"
			onSubmit={this._articleSearch.bind(this)} >
				<input
					type="text"
					className="appSearch__input"
					ref={(input) => this._search = input}
				/>
				<button className="appSearch__button" form="appSearch" type="submit">Search</button>
			</form>
		)

	}


	_articleSearch(event) {
		event.preventDefault();
		const SEARCH = this._search.value;

		this.props.fetchArticles({
			'api-key': "c49c706a2a1d4f3793c2d09694645740",
			'q': SEARCH
		})
		this.props.setSearchQuery(SEARCH);
	}
}