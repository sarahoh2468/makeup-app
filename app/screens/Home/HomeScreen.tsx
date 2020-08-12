import styles from "./styles";
import React, { Component } from "react";
import { Text, View } from "react-native";
import { RNNSearchBar } from "react-native-navigation-search-bar";
import { SearchBar } from "react-native-elements";

class HomeScreen extends Component {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    //SearchBar doesn't work :(
    return (
      <View style={styles.container}>
        <SearchBar />
        <Text>This is the HomeScreen.</Text>
      </View>
    );
  }
}

export default HomeScreen;
