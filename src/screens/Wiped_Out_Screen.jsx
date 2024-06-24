import React from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Provider, Card, Paragraph, Surface, Appbar } from "react-native-paper";
import * as Linking from 'expo-linking';

const songs = [
  { id: "12", title: "Daddy Issues", album: "Wiped Out!", year: 2015, url: "https://www.youtube.com/watch?v=_lMlsPQJs6U" },
  { id: "13", title: "R.I.P. 2 My Youth", album: "Wiped Out!", year: 2015, url: "https://www.youtube.com/watch?v=vKH-rcO6PA8" },
  { id: "14", title: "The Beach", album: "Wiped Out!", year: 2015, url: "https://www.youtube.com/watch?v=DujKJ1OaLQE" },
];

export default function Wiped_Out_Screen({ navigation }) {
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  return (
    <Provider>
      <Surface style={styles.container}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Wiped Out! Songs" />
        </Appbar.Header>
        <FlatList
          data={songs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item.url)}>
              <Card style={styles.card}>
                <Card.Title title={item.title} subtitle={`${item.album} (${item.year})`} />
                <Card.Content>
                  <Paragraph>Album: {item.album}</Paragraph>
                  <Paragraph>Year: {item.year}</Paragraph>
                </Card.Content>
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
