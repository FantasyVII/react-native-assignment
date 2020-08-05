import * as React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, SafeAreaView } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { requestAPIData } from '../actions/Actions';

const { width, height } = Dimensions.get('window')

function FlatListItem(props) {
    return (
        <View style={{ flex: 1, backgroundColor: 'lightgray', marginBottom: height * 0.02 }}>
            <Text style={styles.titleText}>{props.title}</Text>
            <Text style={styles.bodyText}>{props.body}</Text>
        </View>
    )
}

function Listing(props) {

    props.requestAPIData()

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={props.myData}
                renderItem={(item) => <FlatListItem title={item.item.title} body={item.item.body} />}
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        marginBottom: height * 0.01,
        fontSize: (width + height) * 0.015,
        fontWeight: 'bold'
    },
    bodyText: {
        fontSize: (width + height) * 0.012
    }
});


const mapStateToProps = state => ({ myData: JSON.parse(state) })

const mapDispatchToProps = dispatch => bindActionCreators({ requestAPIData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Listing);