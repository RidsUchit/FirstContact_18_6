import React from 'react';
import { StyleSheet, View, FlatList, Image, Text, TouchableOpacity } from 'react-native';
import { AntDesign,FontAwesome } from '@expo/vector-icons';

const data = [
  {
    id: '1',
    username: 'John Ortner',
    imageSource: require('../../assets/11.jpg'),
    caption: 'Mothers Day Giveaway At Grosvenor Place',
    likes: 12,
    comments: 22,
    avatar: require('../../assets/john.jpg')
  },
  {
    id: '2',
    username: 'Barbara Kundig',
    imageSource: require('../../assets/12.jpg'),
    caption: 'May 2023 V5 FC Community Newsletter',
    likes: 102,
    comments: 78,
    avatar: require('../../assets/bk.png')
  },
  {
      id: '3',
      username: 'Steven Cooke',
      imageSource: require('../../assets/eom.png'),
      caption: 'Employee of the Month - March 2023',
      likes: 88,
      comments: 45,
      avatar: require('../../assets/steven.png')
    },
  // Add more post objects here
];

const Feed = () => {
  const renderPost = ({ item }) => {
    return (
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Image
            source={item.avatar}
            style={styles.avatar}
          />
          <Text style={styles.username}>{item.username}</Text>
        </View>
        <Image source={item.imageSource} style={styles.image} />
        <View style={styles.postFooter}>
        <Text style={styles.caption}>{item.caption}</Text>
        

          
          <View style={styles.interactions}>

          <TouchableOpacity style={styles.iconContainer}>
        <AntDesign name="heart" size={24} color="#D70040" style={styles.icon} />
          <Text style={styles.interaction}>{item.likes} </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
        <FontAwesome name="comment-o" size={24} color="#3BA7DC" style={styles.icon_comment} />
          <Text style={styles.interaction}>{item.comments}</Text>
        </TouchableOpacity>

             
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderPost}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postContainer: {
    marginBottom: 16,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
    marginLeft:8
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  postFooter: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  caption: {
    fontSize: 16,
    marginBottom: 8,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  interactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  interaction: {
    fontSize: 14,
    color: '#777',
  },
  icon: {
    marginRight: 5,
  },
  icon_comment:{
marginLeft:10,
marginRight: 5
  },
});

export default Feed;
