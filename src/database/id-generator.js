import Artist from "../data/artist";

export let IdGenerator = {
    getArtistId: (artist) => {
        // Check if all necessary information are provided
        if (artist.name === undefined || artist.name === "") {
            return "undefined";
        }

        return artist.name
            .toLowerCase()
            .replace(/ und /g, "&")
            .replace(/ and /g, "&")
            .replace(/\$/g, "s")
            .replace(/€/g, "e")
            .replace(/¥/g, "y")
            .replace(/[^a-zA-Z0-9-&]/g, "");
    },
    getAlbumId: (album, artist) => {
        let title = "undefined";
        let year = "undefined";
        let artistId = "undefined";

        // Get the artist
        if (!artist && album.artist) {
            artistId = album.artist;
        }

        // Make sure artist has a valid id
        if (artist && artist.id) {
            artistId = artist.id;
        } else {
            artistId = IdGenerator.getArtistId(artist);
        }

        if (album && album.title) {
            title = album.title
                .replace(/\$/g, "s")
                .replace(/€/g, "e")
                .replace(/¥/g, "y")
                .replace(/[^a-zA-Z0-9-&]/g, "").toLowerCase();
        }

        if (album && album.year) {
            year = album.year;
        }

        return title + year + artistId;
    },

    getTrackId:
        (track, album, artist) => {
            let title = "undefined";
            let number = "undefined";
            let albumId = "undefined";

            // Get the album
            if (!album && track.album) {
                album = track.album;
            }

            // Make sure album has valid id
            if (album && album.id) {
                albumId = album.id;
            } else {
                // get the artist to generate id
                if (!artist && track.artist) {  // if album.artist is set, IdGenerator.getAlbumId will find it
                    artist = track.artist;
                }
                albumId = IdGenerator.getAlbumId(album, artist);
            }

            if (track && track.title) {
                title = track.title
                    .replace(/\$/g, "s")
                    .replace(/€/g, "e")
                    .replace(/¥/g, "y")
                    .replace(/[^a-zA-Z0-9-&]/g, "").toLowerCase();
            }

            if (track && track.number) {
                number = track.number;
            }

            return title + number + albumId;
        }

};