'use strict';
var React = require('react');
var Actions = require('../js/lib/actions');
var Store = require('../js/lib/stores');

module.exports = React.createClass({
    addFeed: function(e) {
        e.preventDefault();
        Actions.openModal({
            elm: 'modal',
            type: 'addFeed',
            content: null
        });
    },
    viewCategory: function(e) {
        e.preventDefault();
        console.log('cats, some action/call here');
    },
    settings: function(e) {
        e.preventDefault();
        console.log('load settings in modal');
    },
    render: function() {
        return (
            <section className="leftSection">
                <h1 className="mainTitle">FeedMe</h1>
                <div className="userInfo">
                    Hello {this.props.data.name}!
                </div>
                <ul className="feedList">
                    <li><a onClick={this.viewCategory} href="#">Feed Category</a></li>
                    <li><a onClick={this.viewCategory} href="#">Feed Category</a></li>
                    <li><a onClick={this.viewCategory} href="#">Feed Category</a></li>
                    <li><a onClick={this.viewCategory} href="#">Feed Category</a></li>
                </ul>
                <ul className="settings">
                    <li><a blass="btn" onClick={this.addFeed} href="#">Add Feed</a></li>
                    <li><a onClick={this.settings} href="#">Settings</a></li>
                </ul>
            </section>
        );
    }
});
