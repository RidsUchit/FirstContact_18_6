import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const Post = ({ username, imageSource, caption, onPressLike }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>{username}</Text>
      </View>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.footer}>
        <TouchableOpacity onPress={onPressLike}>
          <Text style={styles.likeButton}>Like</Text>
        </TouchableOpacity>
        <Text style={styles.caption}>{caption}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  username: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeButton: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  caption: {
    marginLeft: 5,
  },
});

export default Post;
