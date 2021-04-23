import React, { Component } from 'react';
import {
    Text, TouchableOpacity, View
} from 'react-native';


export default class TestState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            so: 999
        }
    }

    onClickMe() {
        this.setState({
            so: this.state.so + 1
        })
    }

    render() {
        return (
            <View>
                <Text>{this.state.so}</Text>
                <TouchableOpacity onPress={() => { this.onClickMe() }}>
                    <View style={{ width: 200, height: 20, backgroundColor: 'red' }}>

                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}