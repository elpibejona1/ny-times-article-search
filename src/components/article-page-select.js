import React from 'react';

export default class ArticlePageSelect extends React.Component {
	constructor() {
		super();

		this.state = {
			prevClassName: 'pageSelect__link pageSelect__link--prev hidden',
			page: 0
		}
	}

	render() {
		return(
			<div className="pageSelect">
				<a id="prev" className={this.state.prevClassName} 		href="#"
					onClick={this._prevPage.bind(this)}>
					<i className="fa fa-angle-left" aria-hidden="true"></i> Prev
				</a>
				<a id="next" className="pageSelect__link pageSelect__link--next"
					href="#"
					onClick={this._nextPage.bind(this)}>
					Next <i className="fa fa-angle-right" aria-hidden="true"></i>
				</a>
			</div>
		)
	}

	_nextPage(event) {
		event.preventDefault();
		const NEXT_PAGE = this.state.page + 1;

		if (NEXT_PAGE === 1) {
			this.setState({
				prevClassName: 'pageSelect__link pageSelect__link--prev'
			})
		}

		this.setState({
			page: NEXT_PAGE
		});

		if (this.props.searchQuery !== '') {
			this.props.fetchArticles({
				'api-key': "c49c706a2a1d4f3793c2d09694645740",
				'page': NEXT_PAGE,
				'q': this.props.searchQuery,
			})
		} else {
			this.props.fetchArticles({
				'api-key': "c49c706a2a1d4f3793c2d09694645740",
				'page': NEXT_PAGE
			})
		}
	}

	_prevPage(event) {
		event.preventDefault();
		const PREV_PAGE = this.state.page - 1;
		
		if (PREV_PAGE === 0) {
			this.setState({
				prevClassName: 'pageSelect__link pageSelect__link--prev hidden'
			})
		}

		this.setState({
			page: PREV_PAGE
		});
		if (this.props.searchQuery !== '') {
			this.props.fetchArticles({
				'api-key': "c49c706a2a1d4f3793c2d09694645740",
				'page': PREV_PAGE,
				'q': this.props.searchQuery,
			})
		} else {
			this.props.fetchArticles({
				'api-key': "c49c706a2a1d4f3793c2d09694645740",
				'page': PREV_PAGE
			})
		}
	}
}