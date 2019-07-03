import React, { Component } from 'react';
import { Text, View,TouchableOpacity,Image } from 'react-native';
import { Actions } from 'react-native-router-flux';



export default class PageTwo extends Component {

	    renderUser(){
            return this.props.data.map((list,index)=>(
                        <View key = {list.name}>
                        	<View style={{justifyContent: 'center',alignItems: 'center',margin:15}}>
                        	<Image style={{width:75,height:75,borderRadius:40}}
                        	source={{uri:list.path}} />
                        	</View>

                        	<View>
	                        	<View style = {styles.item}>
		                            <Text >Name:</Text>
		                            <Text >{list.name}</Text>
	                            </View>
	                            <View style = {styles.item}>
		                            <Text >Address:</Text>
		                            <Text >{list.address}</Text>
	                            </View>
	                            <View style = {styles.item}>
		                            <Text >Phone:</Text>
		                            <Text >{list.phone}</Text>
	                            </View>
	                        </View>
                        </View>
                ))
    }

    onPressBack() {
        Actions.user();
    }

    render() {
        return (
        <View style={{flex: 1}}>
	        <View>
				{this.renderUser()}
			</View>
			<View style={styles.viewStyle} >
			 <TouchableOpacity onPress={this.onPressBack.bind(this)}>
	        <Text style={styles.textStyle}>Back</Text>
	        </TouchableOpacity>
	        </View>
        </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
    },
    txtStyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  	item: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 10,
      borderColor: '#FFFFFF',
      borderWidth: 1,
      backgroundColor: '#FFFFFF',
      margin:10,
   },
   textStyle : {
        fontSize : 14,
        fontWeight:'bold',
        color:'#FFFFFF',

    },
   viewStyle : {   
        backgroundColor : '#0087C1',
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection:'row',
        height: 60,
        shadowColor : '#000',
        shadowOffset : { width:0, height: 2},
        shadowOpacity : 0.9,
        elevation:2,
        position:'relative'
    },
}