import React, { Component } from 'react';
import {
    Text, View, StyleSheet, Image,
    Button, Modal, Alert, TouchableHighlight, ScrollView, FlatList
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

export default class popup_screen extends Component {
    constructor(props) {
        super(props); {
            this.state = {
                arooay: [],
                modalVisible: false,
                final: [],
                val3: [],
                showTimings: [],
                pricetag: '',
                languageCom: [],
                daysList: [],

            }
        }
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    componentDidMount() {
        fetch('http://underdev.unlimitedmovies.in/api/settings', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'token': '75871bfd8bc606859f291fdbb1322cf2c71f6594cd4528960cba651e5b551e563227b8a9ff0b6dcc9402415621d13d0a'
            })
        }).then(response => {
            response.json().then(responseData => {
                //console.log('test',responseData)
                if (responseData.status === 1) {
                    const val = responseData.data;
                    const theatreList = val.features.chennai[0]
                    const val3 = theatreList.SelectedTheaterList
                    const time = theatreList.TimeOptions

                    this.setState({ final: val3 })
                    this.setState({ showTimings: time })
                    this.setState({ languageCom: theatreList.LanguageListData })
                    this.setState({ daysList: theatreList.wdwe_option })


                } else {
                    this.setState({ datas: [] })
                    console.warn("error")
                }
            });
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={this.state.modalVisible}>

                    <View style={styles.viewstyle}>
                        <ScrollView style={{ flex: 1 }}>
                            <View style={styles.headerView}>
                                <View style={{ flex: 0.8 }}>
                                    <Text style={styles.text}>All as you Want </Text>
                                    <Text style={styles.text2}>Watch any movie in all our list theateres, across languages, any time of week </Text>
                                </View>
                                <View style={{ flex: 0.2 }}>
                                    <TouchableHighlight
                                        style={styles.button1}
                                        onPress={() => { this.setModalVisible(!this.state.modalVisible); }}>
                                        <Image style={{ tintColor: 'gray' }}
                                            source={require('../images/down.png')}
                                        />
                                    </TouchableHighlight>
                                </View>
                            </View>

                            <View style={styles.line}></View>
                            <View style={{ flex: 0.1, flexDirection: "row", marginTop: 10, marginBottom: 10 }}>
                                <View style={{ flex: 0.3 }}>
                                    <Text style={styles.darktext}>Validity</Text>
                                </View>
                                <View style={{ flex: 0.7 }}>
                                    <Text style={styles.lighttext}>30 Days</Text>
                                </View>
                                {/* <Text style={styles.darktext}>Validity</Text>
                            <Text style={styles.lighttext}>30 Days</Text> */}
                            </View>
                            <View style={styles.line}></View>
                            <View style={{ flex: 0.3, flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
                                <View style={{ flex: 0.3 }}>
                                    <Text style={styles.darktext}>Theatres</Text>

                                </View>
                                <View style={{ flex: 0.7 }}>
                                    {this.state.final.map((item, key) => (
                                        <Text style={styles.lighttext}>{item.name + "," + item.area_name}</Text>
                                    ))}
                                </View>

                            </View>
                            <View style={styles.line}></View>

                            <View style={{ flex: 0.1, flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
                                <View style={{ flex: 0.3 }}>
                                    <Text style={styles.darktext}>Days</Text>
                                </View>
                                <View style={{ flex: 0.7 }}>
                                    {/* <Text style={styles.lighttext}>All Days</Text> */}
                                    {this.state.daysList.map((item, key) => (

                                        <Text style={styles.lighttext}>{item.Detail}</Text>
                                    ))}
                                </View>
                            </View>
                            <View style={styles.line}></View>
                            <View style={{ flex: 0.2, flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
                                <View style={{ flex: 0.3 }}>

                                    <Text style={styles.darktext}>Shows</Text>
                                </View>
                                <View style={{ flex: 0.7 }}>

                                    {this.state.showTimings.map((item, key) => (
                                        <Text style={styles.lighttext}>{item.Detail}</Text>
                                    ))}
                                </View>
                                {/* <FlatList></FlatList>  */}
                            </View>
                            <View style={styles.line}></View>
                            <View style={{ flex: 0.2, flexDirection: 'row', marginTop: 10, marginBottom: 10 }}>
                                <View style={{ flex: 0.3 }}>
                                    <Text style={styles.darktext}>Languages</Text>
                                </View>
                                <View style={{ flex: 0.7 }}>
                                    {this.state.languageCom.map((item, key) => (
                                        <Text style={styles.lighttext}>{item.slug}</Text>
                                    ))}
                                </View>
                            </View>
                            <View style={styles.line}></View>
                        </ScrollView>

                        <TouchableOpacity style={styles.btn1}>
                            <Text style={styles.btn1_txt}>Get a Duolo Pass                                                {this.state.pricetag.couple}</Text>
                        </TouchableOpacity>
                        <LinearGradient colors={['#D40033', '#3D39F3']}
                            style={styles.linearGradient}>
                            <Text style={styles.buttonText}>
                                Get a Solo Pass
                            </Text>
                        </LinearGradient>
                    </View>
                </Modal>
                <View style={styles.banner}>
                </View>
                <View style={styles.button}>
                <TouchableOpacity style ={styles.button_Weekendplan}></TouchableOpacity>
                <TouchableOpacity></TouchableOpacity>

                <Button title="show  Popup" onPress={() => { this.setModalVisible(true); }} />

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0E0E0'
    },
    banner: {
        flex: 0.5,
    }, headerView: {
        flex: 0.2,
        flexDirection: "row",
        padding: 5
    },
    button: {
        flex: 0.5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center"
    },
    button1: {
        position: 'absolute',
        height: 40,
        width: 40,
        right: 15,
        top: 15,
        backgroundColor: '#E5E5E5',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewstyle: {
        marginTop: 60,
        backgroundColor: '#ffffff',
        flex: 1,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        marginRight: 5,
        marginLeft: 5,
        padding: 10,
        shadowColor: "#000"
    },
    text: {
        fontSize: 20,
        color: '#D04AFF',
        fontWeight:'normal',
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        lineHeight: 20

    },
    text2: {
        fontSize: 12,
        color: '#333333',
        fontWeight:'normal',
        fontWeight:'normal',
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        lineHeight: 18
    },
    line: {
        borderBottomColor: '#BCBCBC',
        borderBottomWidth: 1,
    },
    darktext: {
        fontSize: 12,
        fontFamily: 'Manrope',
        color: 'black'

    }, lighttext: {
        marginLeft: 0,
        fontSize: 12,
        fontFamily: 'Manrope',
        fontWeight:'normal',
        fontStyle:'normal',
        lineHeight:20,
        color: 'gray',
    },
    btn1: {
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#55AEF9'
    },
    btn1_txt: {
        textAlign: 'left',
        paddingLeft: 30,
        paddingRight: 10,
    },
    btn2: {
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#D890F9',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#55AEF9'
    },
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        marginTop: 5,
        borderRadius: 5
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },button_Weekendplan:{
        width:'100%',
        height:'45',
        backgroundColor:'green'
    },
})