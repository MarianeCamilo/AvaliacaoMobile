import React from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Provider, Card, Paragraph, Surface, Appbar } from "react-native-paper";
import * as Linking from 'expo-linking';

const songs = [
  { id: "22", title: "Nervous", album: "Hard To Imagine", year: 2018, url: "https://www.youtube.com/watch?v=XTDH7gSqwiQ" },
  { id: "23", title: "Compass", album: "Hard To Imagine", year: 2018, url: "https://youtu.be/j56dEcq7ryo?si=Bu9uBdLHU84vus31" },
  { id: "24", title: "24/7", album: "Hard To Imagine", year: 2018, url: "https://youtu.be/pEue3Tchdvc?si=7wSXZiYyTPnAEart" },
  { id: "25", title: "Sadderdaze", album: "Hard To Imagine", year: 2018, url: "https://youtu.be/ALwoKots_sg?si=EVt4_E1WKM1L7UVP" },
  { id: "26", title: "", album: "Hard To Imagine", year: 2018, url: "https://www.youtube.com/watch?v=XTDH7gSqwiQ" },
  { id: "27", title: "", album: "Hard To Imagine", year: 2018, url: "https://www.youtube.com/watch?v=XTDH7gSqwiQ" },
  { id: "28", title: "", album: "Hard To Imagine", year: 2018, url: "https://www.youtube.com/watch?v=XTDH7gSqwiQ" },
  { id: "29", title: "", album: "Hard To Imagine", year: 2018, url: "https://www.youtube.com/watch?v=XTDH7gSqwiQ" },
  { id: "30", title: "", album: "Hard To Imagine", year: 2018, url: "https://www.youtube.com/watch?v=XTDH7gSqwiQ" },
  { id: "31", title: "", album: "Hard To Imagine", year: 2018, url: "https://www.youtube.com/watch?v=XTDH7gSqwiQ" },
  { id: "32", title: "", album: "Hard To Imagine", year: 2018, url: "https://www.youtube.com/watch?v=XTDH7gSqwiQ" },
];

export default function Hard_To_Imagine_Screen({ navigation }) {
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  return (
    <Provider>
      <Surface style={styles.container}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Hard To Imagine Songs" />
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
