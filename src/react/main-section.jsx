'use strict';
var React = require('react');
var Actions = require('../js/lib/actions');
var Store = require('../js/lib/stores');

var FeedItem = React.createClass({
    showContent: function() {
        Actions.openModal({
            elm: 'modal',
            template: 'content',
            title: 'some article'
        });
    },
    render: function() {
        return (
            <div onClick={this.showContent} className="feedItem">
                <img src="http://lorempixel.com/300/300/city/1/" />
                <div className="feedTitle">
                    <span className="title">See something cool here</span>
                    <span className="feedSource">Some site</span>
                </div>
            </div>
        );
    }
});


module.exports = React.createClass({
    render: function() {
        return (
            <section className="mainSection">
                <FeedItem/>
            </section>
        );
    }
});
