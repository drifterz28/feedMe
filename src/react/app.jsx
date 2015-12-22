'use strict';
var React = require('react');
var Actions = require('../js/lib/actions');
var Store = require('../js/lib/stores');

var LeftSection = require('./left-section.jsx');
var MainSection = require('./main-section.jsx');
var Modal = require('./modal.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        var name = this.props.name;
        var userId = this.props.userId;
        return {
            name: name,
            userId: userId
        };
    },
    onChange: function(actionObj) {
        console.log('appjs ', actionObj);
    },
    componentDidMount: function() {
        this.unsubscribe = Store.listen(this.onChange);
    },
    componentWillUnmount: function() {
        this.unsubscribe();
    },
    render: function() {
        return (
            <div>
                <LeftSection data={this.state}/>
                <MainSection />
                <Modal />
            </div>
        );
    }
});
