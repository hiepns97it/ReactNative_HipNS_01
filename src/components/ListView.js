import React, { Component } from 'react';
import {
    View, TextInput, StyleSheet, Alert, FlatList, Text, SectionList
} from 'react-native';
import PropTypes from 'prop-types';

export default class TestListView extends Component {
    constructor(props) {
        super(props);
        //const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        // this.state = {
        //     dataSource: ds.cloneWithRows(['Android', 'iOS', 'Java', 'Php', 'Hadoop',
        //         'Sap', 'Python', 'Ajax', 'C++',
        //         'Ruby', 'Rails', '.Net', 'Perl']),
        // };
    }

    UNSAFE_componentWillMount() {

    }

    render() {
        return (
            <View>
                {/* <ListView
                    dataSource={this.state.dataSource}
                    renderRow={
                        (rowData) =>
                            <Text style={{ fontSize: 20 }}>{rowData}</Text>}
                /> */}
                {/* <FlatList
                    data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                        { key: 'Dominic' },
                        { key: 'Jackson' },
                        { key: 'James' },
                        { key: 'Joel' },
                        { key: 'John' },
                        { key: 'Jillian' },
                        { key: 'Jimmy' },
                        { key: 'Julie' },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                /> */}
                <SectionList
                    sections={[
                        { title: 'D', data: ['Devin', 'Dan', 'Dominic'] },
                        { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
                    ]}
                    renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }

    componentDidMount() {

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})