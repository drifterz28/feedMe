'use strict';
var React = require('react');
var Actions = require('../js/lib/actions');
var Store = require('../js/lib/stores');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            displayState: 'closed'
        };
    },
    onChange: function(actionObj) {
        if(actionObj.elm === 'modal') {
            this.setState({
                displayState: 'open',
                title: actionObj.title
            });

            console.log('modal ', actionObj.template);
        }
    },
    componentDidMount: function() {
        this.unsubscribe = Store.listen(this.onChange);
    },
    componentWillUnmount: function() {
        this.unsubscribe();
    },
    closeModal: function() {
        this.setState({
            displayState: 'closed'
        });
    },
    render: function() {
        return (
            <div className={'mainModal ' + this.state.displayState}>
                <header>
                    <h2 className="modalTitle">{this.state.title}</h2>
                    <div className="closeModal" onClick={this.closeModal}>X</div>
                </header>
                <div className="modalContent">
                    Test modal
                </div>
            </div>
        );
    }
});
