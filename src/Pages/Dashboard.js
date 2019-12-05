import React, {Component} from 'react';
import { Text, View, StyleSheet,FlatList,TouchableOpacity,Image } from 'react-native';
import _ from 'lodash';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      uniqueArray :[],
      listclick :true

    };
    this.renderData = this.renderData.bind(this);
    

  }

  
renderData({item,index,a}){
    // for(var values of item.category){
    //     var aaray =[];
    //     if(aaray.indexOf(values) === -1){
    //         aaray.push(values)
    //         console.log(aaray)
    //         console.warn(aaray)
    //     } 
    // }
  
return (
    <View >
        <TouchableOpacity style ={styles.flatItem} onPress ={()=>{this.props.navigation.navigate('List')}}>
    <Text>{item.category}}</Text>  
<Image
style={styles.Imageview}
source={require('../images/arrow.png')}  />
        </TouchableOpacity>

</View>)
}
    componentDidMount(){
        fetch ('http://underdev.unlimitedmovies.in/api/faqDetails', {

        
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
          if (responseData.status === 1){
            const val = responseData.data;
            this.setState({ datas: _.uniqBy(val, 'category')} );
        //   this.setState({datas:responseData.data})
        //  // this.setState({uniqueArray:datas.category})
        //     for(var values of this.state.datas){
       
        // if(this.state.uniqueArray.indexOf(values) === -1){
        //   this.state.uniqueArray.push(values)
        //     console.log(this.state.uniqueArray)
        //     console.warn(this.state.uniqueArray)
        // } 
    
          console.warn(uniqueArray)
    
          }else {
        this.setState({datas:[]})
          }
    });
    })
    }
   
  render() {
    return (
      <View style={styles.continer}>
                <View style={styles.heading}>
                <Text style={styles.font}> Most Common Categories </Text>
                </View>
                <View style={styles.item}>
                <FlatList
      data = {this.state.datas}
      renderItem={this.renderData}
      />
            </View>
            </View>
    );
  }
}
const styles = StyleSheet.create({
    continer:{
        flex:1,
        backgroundColor:'#E0E0E0'
    },
    heading:{
        marginTop:10,
        marginStart:10,
        marginBottom:10
    },
    font:{
        fontSize:13,
        color:'#545353'
    },
    item: {
            width:'100%',
            borderBottomWidth:1,
            borderBottomColor:'gray'
          },
    flatItem:{
        flex :1,
        flexDirection:'row',
        padding:10,
        margin :1,
        justifyContent:"space-between",
        backgroundColor :'#ffffff'
    },Imageview :{
        width : 30,
        height:30,
        tintColor:'#E0E0E0'

    }
})