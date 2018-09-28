
class AlbumsService {

    constructor() {
        this.apiBaseUrl = 'https://jsonplaceholder.typicode.com/';
    }

    fetchAll() {
        let apiUrl = this.apiBaseUrl + 'albums/';

        return fetch(apiUrl).then(response => response.json());
    }

    fetchOne(albumId) {
        let apiUrl = this.apiBaseUrl + 'albums/' + albumId + '/';

        return fetch(apiUrl).then(response => response.json());
    }

}

export default AlbumsService;
