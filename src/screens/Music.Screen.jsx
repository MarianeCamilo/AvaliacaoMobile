import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Provider, Card, Paragraph, Surface, Appbar } from "react-native-paper";

// Lista de músicas da banda The Neighbourhood
const songs = [
  { id: "1", title: "Sweater Weather", album: "I Love You", year: 2013 },
  { id: "2", title: "Daddy Issues", album: "Wiped Out!", year: 2015 },
  { id: "3", title: "R.I.P. 2 My Youth", album: "Wiped Out!", year: 2015 },
  { id: "4", title: "The Beach", album: "Wiped Out!", year: 2015 },
  { id: "5", title: "Cry Baby", album: "Wiped Out!", year: 2015 },
];

export default function MusicScreen() {
  return (
    <Provider>
      <Surface style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="The Neighbourhood Songs" />
        </Appbar.Header>
        <FlatList
          data={songs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <Card.Title title={item.title} subtitle={`${item.album} (${item.year})`} />
              <Card.Content>
                <Paragraph>Album: {item.album}</Paragraph>
                <Paragraph>Year: {item.year}</Paragraph>
              </Card.Content>
            </Card>
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
