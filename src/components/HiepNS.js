import React, { Component } from 'react';
import {
    Text, View
} from 'react-native';
import PropTypes from 'prop-types';

export default class HiepNS extends Component {
    constructor(props) {
        super(props);
    }

    UNSAFE_componentWillMount() {

    }

    render() {
        return (
            <Text>{this.props.title}</Text>
        );
    }

    componentDidMount() {

    }
}

HiepNS.propTypes = {
    title: PropTypes.string
}