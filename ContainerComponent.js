import React, { useState } from 'react';
import { Component, Node } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Button,
    FlatList,
    Image
} from 'react-native';

export default function ContainerComponent(props) {
    return (<View>
        {/* <View style={styles.containerImage}
        ></View> */}




        <Image
            style={styles.containerImage}
            source={{ uri: props.videoThumbnail }} />
        <View style={styles.containerContent}>

            <Text style={{fontSize:17}} numberOfLines={2}>{props.videoTitle} </Text>
            
            <Text style={{fontSize:14,fontWeight:'bold'}} >{props.videoChannel}</Text>
                 {/* {props.videoId} */}
                {/* touchable opacity */}
           
        </View>
    </View>


    );
}


const styles = StyleSheet.create({
    containerImage: {
        marginLeft: 32,
        // marginLeft: '1%',
        // marginRight: 10,
        paddingHorizontal: 24,
        shadowColor: "#000",
        // elevation: 24,
        // shadowOffset: {
        //   width: 0,
        //   height: 12,
        // },
        // shadowOpacity: 0.58,
        // shadowRadius: 16.00,
        shadowColor: 'black',
        width: 330,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        height: 500,
        justifyContent: 'center',
        // backgroundColor: 'grey'
      },
      containerContent: {
        marginLeft: 32,
        marginTop: 12,
        marginBottom:50,
        width: 330,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        height:120,
        
        paddingHorizontal: 24,
        justifyContent: 'center',
        backgroundColor: 'grey',
        fontSize: 17,
        padding: 10,
        fontWeight: 'bold',
        alignItems: 'center'
        
      },
});