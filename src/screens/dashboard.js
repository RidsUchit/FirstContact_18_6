import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import axios from "axios";
import InfiniteScrollView from "react-native-infinite-scroll-view";

const dashboard1 = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const fetchMoreData = async () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://api.example.com/data?page=${page}`
      );
      const newData = response.data;

      setData((prevData) => [...prevData, ...newData]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      // Handle error
    }

    setIsLoading(false);
  };

  return (
    <View>
      <Text>dashboard</Text>
    </View>
  );
};
export default dashboard1;
