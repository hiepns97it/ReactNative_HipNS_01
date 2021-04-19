import React, { Component } from 'react';
import {
    Text, Touchable, TouchableOpacity, View
} from 'react-native';
import PropTypes from 'prop-types';

export default class HiepNS extends Component {
    constructor(props) {
        super(props);
        //this.test = this.test.bind(this);
    }

    UNSAFE_componentWillMount() {

    }

    clickMe() {
        console.log('hiepns click');
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => { this.clickMe() }}>
                    <Text>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    componentDidMount() {

    }
}

HiepNS.propTypes = {
    title: PropTypes.string
}