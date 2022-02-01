import React from 'react';
import {
    StyleSheet,View,Image,Text,FlatList,ImageBackground
} from 'react-native' ;
import * as images from './image/map';
import { moderateScale } from './common/constants';

class Home extends React.Component{
    constructor()
    {
        super();
        this.state={
            data:[
                {
                    "name": "King Burger    ",
                    "photo": images.bur_king,
                    "rate": "4.8 (108 Rating)",
                    "islocal": true,
                },
                {
                    "name": "Salad Bar        ",
                    "photo": images.salad_image,
                    "rate": "4.8 (108 Rating)",
                    "islocal": true,
                },
                {
                    "name": "Stack House   ",
                    "photo": images.stack_image,
                    "rate": "4.8 (108 Rating)",
                    "islocal": true,
                },
                {
                    "name": "Queen Burger   ",
                    "photo": images. bur_queen,
                    "rate": "4.8 (108 Rating)",
                    "islocal": true,
                },
            ]
        }
    }
    renderCard = (item) => {
        return (
            <View style={styles.vmSubView}>
                <View style={styles.vmChildView1}>

                    <View style={styles.vmChildSub1}>
                        <Image style={styles.imageview}
                            source={item.islocal ? item.photo : { uri: item.photo }}></Image>
                    </View>

                    <View style={styles.vmChildSub2}>
                        <Text style={styles.tvName}>{item.name}</Text>
                        <Text style={styles.tvRate}>{item.rate}</Text>
                    </View>

                </View>
            </View>
               )
             }

    render(){
        return(
            <View style={styles.vmMainView}>
               
                    <ImageBackground source={images.res_img} style={styles.image}>
                        <Text style={styles.tvHeader}>{" American\n Restaurants"}</Text>
                        <Text style={styles.tvHeader1}>{"   36 palces"}</Text>
                    </ImageBackground>
               
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => this.renderCard(item)}
                    // keyExtractor={item => item.name}
                    keyExtractor={(item, index) => index}
                />
                
            </View>
        )
    }
}
const styles=StyleSheet.create({

    vmMainView:{
        flex:1,
    },

    vmSubView:{
        flexDirection: "row",
        backgroundColor: "#2f2f37",
        padding: 10,
    },

    vmChildView1:{
        flexDirection: "row",
        padding: 10,
        flex: 1,
        backgroundColor: "#3b3b45",
        borderRadius: 4,
        shadowOpacity: 0.5,
        elevation: 5,
        shadowColor: "#000",
    },
    vmChildSub1:{
        

    },
    tvName:{
        paddingLeft: 15,
        color: "white",
        fontSize:20
    },
    tvRate: {
        marginTop: 9,
        paddingLeft: 15,
        color: '#adadb8',
        fontSize: 15,
    },

    imageview: {
        height: 80,
        width: 90,
        borderRadius: 3,

    },
    image: {
        resizeMode: "center",
        height:moderateScale(300),
        justifyContent: "flex-end",
        paddingBottom: 25,
    },
    tvHeader: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft:10,

    },
    tvHeader1: {
        color: "white",
        fontSize: 20,

    },
})
export default Home;