// src/ArtistInfo.js
import React, { useState } from 'react';
import axios from 'axios';

function ArtistInfo() {
    const [artistName, setArtistName] = useState('');
    const [artistInfo, setArtistInfo] = useState(null);
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        setArtistName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Digite o nome do artista"
                    value={artistName}
                    onChange={handleInputChange}
                />
                <button type="submit">Buscar</button>
            </form>

            {error && <p>{error}</p>}

            {artistInfo && (
                <div>
                    <h2>Informações sobre o artista {artistInfo.name}:</h2>
                    <p>Número de fãs: {artistInfo.nb_fan}</p>
                    <p>Link para o perfil: <a href={artistInfo.link} target="_blank" rel="noopener noreferrer">{artistInfo.name}</a></p>
                </div>
            )}
        </div>
    );
}

export default ArtistInfo;
