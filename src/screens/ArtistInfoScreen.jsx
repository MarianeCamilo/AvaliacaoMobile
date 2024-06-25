import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

function ArtistInfoScreen() {
    const [artistName, setArtistName] = useState('');
    const [artistInfo, setArtistInfo] = useState(null);
    const [error, setError] = useState(null);

    const handleInputChange = (text) => {
        setArtistName(text);
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.get(`https://api.deezer.com/search?q=artist:"${artistName}"`);

            if (response.data.data.length > 0) {
                setArtistInfo(response.data.data[0].artist);
                setError(null);
            } else {
                setArtistInfo(null);
                setError(`Artista "${artistName}" não encontrado.`);
            }
        } catch (error) {
            console.error('Erro ao buscar informações do artista:', error);
            setError('Erro ao buscar informações do artista.');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Digite o nome do artista"
                value={artistName}
                onChangeText={handleInputChange}
            />
            <Button title="Buscar" onPress={handleSubmit} />

            {error && <Text style={styles.error}>{error}</Text>}

            {artistInfo && (
                <View style={styles.infoContainer}>
                    <Text style={styles.infoTitle}>Informações sobre o artista {artistInfo.name}:</Text>
                    <Text>Número de fãs: {artistInfo.nb_fan}</Text>
                    <Text>Link para o perfil: <Text style={styles.link} onPress={() => Linking.openURL(artistInfo.link)}>{artistInfo.name}</Text></Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    error: {
        color: 'red',
        marginTop: 8,
    },
    infoContainer: {
        marginTop: 16,
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

export default ArtistInfoScreen;
