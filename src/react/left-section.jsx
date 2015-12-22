'use strict';
var React = require('react');
var Actions = require('../js/lib/actions');
var Store = require('../js/lib/stores');

module.exports = React.createClass({
    addFeed: function(e) {
        e.preventDefault();
        Actions.openModal({
            elm: 'modal',
            template: 'addfeed',
            title: 'Add news Feed'
        });
    },
    viewCategory: function(e) {
        e.preventDefault();
        var target = e.currentTarget;
        var feedLists = document.querySelectorAll('.feedList li');
        var state = (target.parentNode.classList.contains('active')) ? false : true;

        for (var i = 0; i < feedLists.length; i++) {
            feedLists[i].classList.remove('active');
        }
        if(state) {
            target.parentNode.classList.add('active');
        }
        console.log('cats, some action/call here');
    },
    viewFeedSource: function(e) {
        e.preventDefault();
        console.log('cats, some action/call here');
    },
    settings: function(e) {
        e.preventDefault();
        Actions.openModal({
            elm: 'modal',
            template: 'settings',
            title: 'Your Settings'
        });
    },
    render: function() {
        return (
            <section className="leftSection">
                <h1 className="mainTitle">FeedMe</h1>
                <div className="userInfo">
                    Hello {this.props.data.name}!
                </div>
                <ul className="feedList">
                    <li><a onClick={this.viewCategory} href="#">Feed Category 1</a>
                        <ul className="secondFeedList">
                            <li><a onClick={this.viewFeedSource} href="#">news feed</a></li>
                            <li><a onClick={this.viewFeedSource} href="#">news feed</a></li>
                            <li><a onClick={this.viewFeedSource} href="#">news feed</a></li>
                        </ul>
                    </li>
                    <li><a onClick={this.viewCategory} href="#">Feed Category 2</a>
                        <ul className="secondFeedList">
                            <li><a onClick={this.viewFeedSource} href="#">news feed</a></li>
                            <li><a onClick={this.viewFeedSource} href="#">news feed</a></li>
                            <li><a onClick={this.viewFeedSource} href="#">news feed</a></li>
                        </ul>
                    </li>
                    <li><a onClick={this.viewCategory} href="#">Feed Category 3</a>
                        <ul className="secondFeedList">
                            <li><a onClick={this.viewFeedSource} href="#">news feed</a></li>
                            <li><a onClick={this.viewFeedSource} href="#">news feed</a></li>
                            <li><a onClick={this.viewFeedSource} href="#">news feed</a></li>
                        </ul>
                    </li>
                    <li><a onClick={this.viewCategory} href="#">Feed Category 4</a>
                        <ul className="secondFeedList">
                            <li><a onClick={this.viewFeedSource} href="#">news feed</a></li>
                            <li><a onClick={this.viewFeedSource} href="#">news feed</a></li>
                            <li><a onClick={this.viewFeedSource} href="#">news feed</a></li>
                        </ul>
                    </li>
                </ul>
                <ul className="settings">
                    <li><a blass="btn" onClick={this.addFeed} href="#">Add Feed</a></li>
                    <li><a onClick={this.settings} href="#">Settings</a></li>
                </ul>
            </section>
        );
    }
});
