import React from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Provider, Card, Paragraph, Surface, Appbar } from "react-native-paper";
import * as Linking from 'expo-linking';

const songs = [
  { id: "1", title: "Sweater Weather", album: "I Love You", year: 2013, url: "https://www.youtube.com/watch?v=GCdwKhTtNNw" },
  { id: "2", title: "How", album: "I Love You", year: 2013, url: "https://youtu.be/L0OORjXAtxg?si=DEa8yRXeKvas7B_C" },
  { id: "3", title: "Afraid", album: "I Love You", year: 2013, url: "https://youtu.be/O83tqQpa9xk?si=gP9UOXXc1-XFWuh7" },
  { id: "4", title: "Everybody's Watching Me (Uh Oh)", album: "I Love You", year: 2013, url: "https://youtu.be/dMfWmyx1VLU?si=WlNt3AXIH7VKzyUw" },
  { id: "5", title: "Let It Go", album: "I Love You", year: 2013, url: "https://youtu.be/uQSV2dsyO2g?si=q92FM4Xf42S3MIcv" },
  { id: "6", title: "Alleyways", album: "I Love You", year: 2013, url: "https://youtu.be/qVwckL8Q3_Y?si=L5ddHaLMkgsx11VG" },
  { id: "7", title: "W.D.Y.W.F.M?", album: "I Love You", year: 2013, url: "https://youtu.be/Oq-xMg1xbic?si=M3sftk6L4hRafi4p" },
  { id: "8", title: "Flawless", album: "I Love You", year: 2013, url: "https://youtu.be/Cs9M0a5qYko?si=b0gDcz4aL_rlssBt" },
  { id: "9", title: "Female Robbery", album: "I Love You", year: 2013, url: "https://youtu.be/1wnrQ5qeWV4?si=FyqHF3Pi4ilgGGP9" },
  { id: "10", title: "Staying Up", album: "I Love You", year: 2013, url: "https://youtu.be/edr_NOQFcBw?si=HSxaXJh9C3ujM8IN" },
  { id: "11", title: "Float", album: "I Love You", year: 2013, url: "https://youtu.be/Bd2yNVan0sc?si=98XY4FTchNBmLspC" },
];

export default function ILoveYouScreen({ navigation }) {
  const handlePress = (url) => {
    Linking.openURL(url);
  };

  return (
    <Provider>
      <Surface style={styles.container}>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="I Love You Songs" />
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
