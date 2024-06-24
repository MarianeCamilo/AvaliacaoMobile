import React from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Provider, Card, Surface, Appbar } from "react-native-paper";

const albums = [
  { id: "1", title: "I Love You", year: 2013 },
  { id: "2", title: "Wiped Out!", year: 2015 },
  { id: "3", title: "Hard To Imagine", year: 2018 },
];

export default function AlbumsScreen({ navigation }) {
  const handlePress = (album) => {
    navigation.navigate("Songs", { album });
  };

  return (
    <Provider>
      <Surface style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="The Neighbourhood Albums" />
        </Appbar.Header>
        <FlatList
          data={albums}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item)}>
              <Card style={styles.card}>
                <Card.Title title={item.title} subtitle={`Year: ${item.year}`} />
              </Card>
            </TouchableOpacity>
          )}
        />
      </Surface>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  card: {
    margin: 10,
  },
});
