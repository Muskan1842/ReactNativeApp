
//  https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=friends&key=[YOUR_API_KEY] HTTP/1.1
// npx react-native run-android
// AIzaSyBqHaxjs6fxLKX76_nkzB0xLUykgiDsIZQ

import React, { useState } from 'react';
import { Component, Node } from 'react';
import ContainerComponent from './ContainerComponent';
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

export default function App() {

  const [textInputValue, setTextInputValue] = useState('');
  const [cardData, setCardData] = useState([]);
  const [nextPgToken,setNextPgToken] = useState('');

  const nextPageData=()=>{
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&pageToken=${nextPgToken}&q=${textInputValue}&type=video&key=AIzaSyBqHaxjs6fxLKX76_nkzB0xLUykgiDsIZQ`)
    .then(response => response.json()).then(data => {
      setCardData([...cardData,...data.items])
      setNextPgToken(data.nextPageToken)
      console.log(nextPgToken)
    })
  }
// ${page}
  const fetchQuery = () => {
    console.log('Check Log')
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&pageToken=&q=${textInputValue}&type=video&key=AIzaSyBqHaxjs6fxLKX76_nkzB0xLUykgiDsIZQ`)
      .then(response => response.json()).then(data => {
        
        setCardData(data.items)
        setNextPgToken(data.nextPageToken)
        

      })
      console.log(nextPgToken)
  }
  return (
    <View style={styles.whole} >
      {/* style={styles.searchbar */}
      {/* <View style={styles.searchbar}> */}
      <TextInput
        style={styles.textInput}
        onChangeText={(val) => setTextInputValue(val)} />
      <View style={styles.searchButton}>
        <Button color='black'
          title='Search'
          onPress={() => fetchQuery()} />
        {/* </View> */}
      </View>

      <FlatList
        horizontal
        //  style= {styles.container}
        data={cardData}
        keyExtractor={(item) => item.id.videoId}
        renderItem={({ item }) => {
          return <ContainerComponent
            videoId={item.id.videoId}
            videoTitle={item.snippet.title}
            videoThumbnail={item.snippet.thumbnails.high.url}
            videoChannel={item.snippet.channelTitle}
          ></ContainerComponent>
        }}
        onEndReached={()=> nextPageData()}
        onEndReachedThreshold={0}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  flatlist: {
marginHorizontal: 32,
  },
  whole: {
    flex: 1,
    backgroundColor: 'cadetblue',
    alignItems: 'center'

  },

  searchbar: {
    flex: 1,
    flexDirection: 'row',
    width: '97%'
  },

  searchButton: {
    height: 45,
    padding: 5,
    borderBottomLeftRadius: 13,
    borderTopLeftRadius: 13,
    marginTop: '3%',
    marginRight: '5%',
  },

  textInput: {
    backgroundColor: 'aliceblue',
    fontWeight: '700',
    width: '83%',
    height: 45,
    // marginLeft: '5%',
    // marginRight: '5%',
    marginTop: '3%',
    // borderBottomRightRadius: 13,
    borderBottomLeftRadius: 13,
    // borderTopRightRadius: 13,
    borderTopLeftRadius: 13,
  },

  containerImage: {
    marginTop: 32,
    paddingHorizontal: 24,
    shadowColor: "#000",
    // elevation: 24,
    // shadowOffset: {
    //   width: 0,
    //   height: 12,
    // },
    // shadowOpacity: 0.58,
    // shadowRadius: 16.00,
    width: '80%',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    height: 500,
    justifyContent: 'center'
  },

  containerContent: {
    width: '80%',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    borderWidth: 1,
    height: 100,
    marginTop: 12,
    paddingHorizontal: 24,
    justifyContent: 'center'
  },

});


