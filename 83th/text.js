// By using promise

let makeRequest = (method, url, data) => {


    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        // Reguest  to URL
        xhr.open(method, url);
        xhr.setRequestHeader('Content-type', 'application/json');
        // To show in Console need to use between open and send Event
        xhr.onload = () => {
            let data = xhr.response;
            console.log(xhr.responseType);
            console.log(xhr.responseText);
            console.log(xhr.status);
            // console.log(JSON.parse(data));
        };
        // Send Data to API
        xhr.send(JSON.stringify(data))


    })
};

const getData = () => {
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
        .then((res) => console.log(res));
};
getData();