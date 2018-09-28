
class PostsService {

    constructor() {
        this.apiBaseUrl = 'https://jsonplaceholder.typicode.com/';
    }

    fetchAll() {
        let apiUrl = this.apiBaseUrl + 'posts/';

        return fetch(apiUrl).then(response => response.json());
    }

    fetchOne(postId) {
        let apiUrl = this.apiBaseUrl + 'posts/' + postId + '/';

        return fetch(apiUrl).then(response => response.json());
    }

}

export default PostsService;
