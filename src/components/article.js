import React from 'react';

export default class Article extends React.Component {

	render() {
		return(
			<div className="article">
				<h3 className="article__title">
					{this.props.headline.main}
				</h3>
				<h4 className="article__date">
					{this.props.publicationDate}
				</h4>
				<img className="article__thumbnail" src={this.props.thumbnailURL} alt=""/>
				<p className="article__excerpt">
					{this.props.snippet}
				</p>
				<a className="article__link" target="_blank" href={this.props.web_url}>Read More</a>
			</div>
		)
	}
}