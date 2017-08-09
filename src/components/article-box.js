import React from 'react';
import Article from './article';
import ArticleSearch from './article-search';
import ArticlePageSelect from './article-page-select';
import jQuery from 'jquery';

export default class articleBox extends React.Component {

	constructor() {
		super();

		this.state = {
			articles: [],
			q: '',
			page: ''
		};
	}

	componentWillMount() {
		this._fetchArticles({
			'api-key': "c49c706a2a1d4f3793c2d09694645740"
		});
	}

	render() {
    	const ARTICLES = this._getArticles();
		return(			
			<div className="articleWrapper">
				<ArticleSearch
					fetchArticles={this._fetchArticles.bind(this)}
					setSearchQuery={this._setSearchQuery.bind(this)}
				/>
				{ARTICLES}
				<ArticlePageSelect
					fetchArticles={this._fetchArticles.bind(this)}
					searchQuery={this.state.q}
				/>
			</div>
		);
	}

	_setSearchQuery(search) {
		console.log(search);
		this.setState({
			q: search
		});
		console.log(this.state.q);
	}

	_getThumbnails(array) {
		if ( array.length !== 0 ) {
			return 'https://www.nytimes.com/' + array[0].url;
		} else {
			return '';
		}
	}

	_getPubDate(date) {
		const PUB_DATE = new Date(date).toDateString();
		const PUB_TIME = new Date(date).toLocaleTimeString()
		return PUB_DATE + ', ' + PUB_TIME;
	}

	_getArticles() {
		return this.state.articles.map((article) => {
			return <Article
				{...article}
				thumbnailURL={this._getThumbnails(article.multimedia)}
				publicationDate={this._getPubDate(article.pub_date)}
			/>
		});
	}

	_fetchArticles(parameters) {
		let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		url += '?' + jQuery.param(parameters);
		jQuery.ajax({
			method: 'GET',
			url: url,
			success: (articles) => {
				const CONTENT = articles.response.docs;
				console.log(CONTENT);
				this.setState({ articles: CONTENT })
			}
		});
	}

}

