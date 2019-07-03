import React, { Component } from 'react';
import { Text, View, TouchableOpacity,ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
 
export default class PageOne extends Component {
    constructor(props){
    super(props);
    this.state={
        Users:[
        {id:"User 1",profile:[{name:"Name 1",address:"Coimbatore",phone:"9976559207",path:"https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"}]}, 
        {id:"User 2",profile:[{name:"Name 2",address:"Tirupur",phone:"9276559205",path:"https://content-static.upwork.com/uploads/2014/10/01073435/profilephoto5.jpg"}]},
        {id:"User 3",profile:[{name:"Name 3",address:"Erode",phone:"9876559207",path:"https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_badcrop.jpg"}]},
        {id:"User 4",profile:[{name:"Name 4",address:"Coimbatore",phone:"9976559207",path:"https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"}]}, 
        {id:"User 5",profile:[{name:"Name 5",address:"Tirupur",phone:"9276559205",path:"https://content-static.upwork.com/uploads/2014/10/01073435/profilephoto5.jpg"}]},
        {id:"User 6",profile:[{name:"Name 6",address:"Erode",phone:"9876559207",path:"https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_badcrop.jpg"}]},
        {id:"User 7",profile:[{name:"Name 7",address:"Coimbatore",phone:"9976559207",path:"https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"}]}, 
        {id:"User 8",profile:[{name:"Name 8",address:"Tirupur",phone:"9276559205",path:"https://content-static.upwork.com/uploads/2014/10/01073435/profilephoto5.jpg"}]},
        {id:"User 9",profile:[{name:"Name 9",address:"Erode",phone:"9876559207",path:"https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_badcrop.jpg"}]},
        {id:"User 10",profile:[{name:"Name 10",address:"Coimbatore",phone:"9976559207",path:"https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"}]}, 
        {id:"User 11",profile:[{name:"Name 11",address:"Tirupur",phone:"9276559205",path:"https://content-static.upwork.com/uploads/2014/10/01073435/profilephoto5.jpg"}]},
        {id:"User 12",profile:[{name:"Name 12",address:"Erode",phone:"9876559207",path:"https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_badcrop.jpg"}]},
        {id:"User 13",profile:[{name:"Name 13",address:"Coimbatore",phone:"9976559207",path:"https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"}]}, 
        {id:"User 14",profile:[{name:"Name 14",address:"Tirupur",phone:"9276559205",path:"https://content-static.upwork.com/uploads/2014/10/01073435/profilephoto5.jpg"}]},
        {id:"User 15",profile:[{name:"Name 15",address:"Erode",phone:"9876559207",path:"https://content-static.upwork.com/uploads/2014/10/02123010/profilephoto_badcrop.jpg"}]}
        ],
    };
    }

    listClick(name) {
      Actions.profile({ data: name });
   }

    renderUser(){
            return this.state.Users.map((list,index)=>(
                <TouchableOpacity 
                    key = {list.id}
                    //onPress={()=>{alert(stock.title)}}
                    id={list.id}
                    onPress = {() => {this.listClick(list.profile)}}>
                        <View key = {list.id} style={styles.item}>
                            <Text >
                            {list.id}
                            </Text>
                        </View>
                </TouchableOpacity>
                ))
    }

    render() {
        return (

        <View style={styles.container}>
            <View style = {styles.viewStyle}>
                    <Text style = {styles.textStyle}>User Page</Text>
                </View>


        <ScrollView>
            {this.renderUser()}
        </ScrollView>

        </View>
        );
    }

}

const styles = {
    container: {
        flex: 1,
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
        textStyle : {
        fontSize : 14,
        fontWeight:'bold',
        color:'#FFFFFF',

    },
     item: {
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      margin:5,
      borderColor: 'black',
      borderWidth: 1,
      backgroundColor: '#FFFFFF'
   },
}