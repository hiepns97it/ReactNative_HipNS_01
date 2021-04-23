import React, { Component } from 'react';
import {
    View, TextInput, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

export default class TestTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "hiepns"
        }
    }

    UNSAFE_componentWillMount() {

    }

    render() {
        return (
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    placeholder="useless placeholder"
                    keyboardType="numeric"
                />
            </View>
        );
    }

    componentDidMount() {

    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});