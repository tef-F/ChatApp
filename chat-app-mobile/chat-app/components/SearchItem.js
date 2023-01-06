import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Searchbar } from "react-native-paper";

const SearchItem = ({ props }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={styles.search}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
      />
    </View>
  );
};
export default SearchItem;
const styles = StyleSheet.create({
  search: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  searchBar: {
    height: 45,
    backgroundColor: "#F2F2F2",
    borderRadius: 100,
  },
});
