import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import HTML from "react-native-render-html";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isEndReached, setIsEndReached] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://fcbackapi.netlify.app/.netlify/functions/api/posts/1?page=${page}&pageSize=10`
      );
      const newData = await response.json();

      if (newData.length > 0) {
        setData((prevData) => [...prevData, ...newData]);
        setPage((prevPage) => prevPage + 1);
      } else {
        setIsEndReached(true);
      }

      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };
  // Function to handle the FlatList's onEndReached event
  const handleEndReached = () => {
    if (!isLoading && !isEndReached) {
      fetchData();
    }
  };

  const renderPost = ({ item }) => {
    return (
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Image
            source={{
              uri: `https://mgfcuploads.s3-ap-southeast-1.amazonaws.com/fcintranet/ProfileImages/${item.UserImage}`,
            }}
            style={styles.avatar}
          />
          <Text style={styles.username}>{item.UserName}</Text>
        </View>
        {item.PostImage && (
          <Image
            source={{
              uri: `https://mgfcuploads.s3-ap-southeast-1.amazonaws.com/fcintranet/Blogs/${item.PostImage}`,
            }}
            style={styles.image}
          />
        )}
        <View style={styles.postFooter}>
          <Text style={styles.captionTitle}>{item.Post}</Text>

          <HTML
            source={{ html: item.Content }}
            contentWidth={Dimensions.get("window").width}
          />

          <View style={styles.interactions}>
            <TouchableOpacity style={styles.iconContainer}>
              <AntDesign
                name="heart"
                size={24}
                color="#D70040"
                style={styles.icon}
              />
              <Text style={styles.interaction}>{item.Likes} </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
              <FontAwesome
                name="comment-o"
                size={24}
                color="#3BA7DC"
                style={styles.icon_comment}
              />
              <Text style={styles.interaction}>{item.Comments}</Text>
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
        renderItem={renderPost}
        key={(item) => item.id}
        keyExtractor={(item) => item.id}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={isLoading ? <ActivityIndicator /> : null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  postContainer: {
    marginBottom: 16,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
    marginLeft: 8,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  image: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
  },
  postFooter: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
  captionTitle: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 16,
    marginBottom: 8,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  interactions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  interaction: {
    fontSize: 14,
    color: "#777",
  },
  icon: {
    marginRight: 5,
  },
  icon_comment: {
    marginLeft: 10,
    marginRight: 5,
  },
});

export default Dashboard;
