// basic store, not compleate

'use strict';
var Reflux = require('reflux');
var Actions = require('./actions');
var _info = {};

module.exports = Reflux.createStore({
    init: function() {
        this.listenTo(Actions.addActivity, this.onCreate);
        this.listenTo(Actions.editActivity, this.onEdit);
        this.listenTo(Actions.openModal, this.openModal);
    },
    /*
    trigger will trigger any watched template so I am passing things thru
    ojb = {
        elm: 'modal', elm is what element to trigger this on.
        template: '', template to load up, settings, add feeds, content and so on
        title: '', modal titile
    }
    */
    openModal: function(ojb) {
        this.trigger(ojb);
    },
    onCreate: function(info) {
        _info.activities.push(info);
        this.saveInfo();
        this.trigger(_info);
    },
    // called on edit save
    onEdit: function(info) {
        for(var i = 0; i < _info.length; i++) {
            if(_info[i]._id === info._id) {
                _info[i].lastEnd = info.lastEnd;
                _info[i].inP = info.inP;
                this.saveInfo();
                this.trigger(_info);
                break;
            }
        }
    },
    onSave: function(info) {
        _info = this.recalculate(_info);
        this.saveInfo();
        this.trigger(_info);
    },
    // called on load from jsx template
    getInfo: function() {
        return _info;
    },
    // called on note click to edit
    getInfoById: function(id) {
        for(var i = 0; i < _info.length; i++) {
            if(_info[i]._id === id) {
                return _info[i];
            }
        }
    }
});
