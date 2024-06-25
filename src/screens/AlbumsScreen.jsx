import React from "react";
import { View, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Provider, Card, Surface, Appbar } from "react-native-paper";

const albums = [
  { id: "1", title: "I Love You", year: 2013, screen: "ILoveYouScreen" },
  { id: "2", title: "Wiped Out!", year: 2015, screen: "WipedOutScreen" },
  { id: "3", title: "Hard To Imagine", year: 2018, screen: "HardToImagineScreen" },
];

navigation.navigate('ILoveYouScreen');
navigation.navigate('WipedOutScreen');
navigation.navigate('HardToImagineScreen');


export default function AlbumsScreen({ navigation }) {
  const handlePress = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <Provider>
      <Surface style={styles.container}>
        <Appbar.Header>
          <Appbar.Content title="The Neighbourhood Albuns" />
        </Appbar.Header>
        <FlatList
          data={albums}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item.screen)}>
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
