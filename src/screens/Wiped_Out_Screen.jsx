import React from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Provider, Card, Paragraph, Surface, Appbar } from "react-native-paper";
import * as Linking from 'expo-linking';

const songs = [
  { id: "12", title: "Daddy Issues", album: "Wiped Out!", year: 2015, url: "https://www.youtube.com/watch?v=_lMlsPQJs6U" },
  { id: "13", title: "R.I.P. 2 My Youth", album: "Wiped Out!", year: 2015, url: "https://www.youtube.com/watch?v=vKH-rcO6PA8" },
  { id: "14", title: "The Beach", album: "Wiped Out!", year: 2015, url: "https://www.youtube.com/watch?v=DujKJ1OaLQE" },
  { id: "15", title: "Wiped Out!", album: "Wiped Out!", year: 2015, url: "https://youtu.be/Z3UCVQIjAJ8?si=zfw10Prjax_0P8IQ" },
  { id: "16", title: "Single", album: "Wiped Out!", year: 2015, url: "https://youtu.be/9H7Aj8pLQMQ?si=Rd5jLnUkcX6ACN7Z" },
  { id: "17", title: "Cry Baby", album: "Wiped Out!", year: 2015, url: "https://youtu.be/mzhBCQ22_UA?si=mUPMAVxmE39J-ZDH" },
  { id: "18", title: "Prey", album: "Wiped Out!", year: 2015, url: "https://youtu.be/2IE3T9mcqyM?si=pY6Gt9xqX3tQoiOO" },
  { id: "19", title: "Baby Came Home 2 / Valentines", album: "Wiped Out!", year: 2015, url: "https://youtu.be/c0V3OKDigeY?si=VEsW795CrmFwhCHz" },
  { id: "20", title: "Ferrari", album: "Wiped Out!", year: 2015, url: "https://youtu.be/Nbi7CXHzbrQ?si=-owZdy67CxoRkqjF" },
  { id: "21", title: "Greetings From Califournia", album: "Wiped Out!", year: 2015, url: "https://youtu.be/IH0Jb2yWpDA?si=68xV084NQuk_0i3J" },
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
