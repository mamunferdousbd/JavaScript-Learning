console.clear();
// Event --- onload(), onreeor()
// Properties ---response, responseText, responseURl, responseType,statusText
// Functions----

// const getData = () => {
//     const xhr = new XMLHttpRequest();

//     // Reguest  to URL
//     xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
//     // To show in Console need to use between open and send Event
//     xhr.onload = () => {
//         let data = xhr.response;
//         console.log(JSON.parse(data))
//     };
//     // Send Data to API
//     xhr.send();

//     xhr.onerror = () => {
//         console.log(`Error is Occured.`);
//     }
// }
// getData();

// Calling for a differnt type of url

let makeRequest = (method, url, data) => {

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

    xhr.onerror = () => {
        console.log(`Error is Occured.`);
    }
};

const getData = () => {
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
};
getData();

const sendData = () => {
    makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
    });
};
// sendData();

const updateData = () => {
    makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    });
};
// updateData();

const patchData = () => {
    makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
        title: 'This is changeed.',
    });
};
// patchData()

const deleteData = () => {
    makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');
};
// deleteData();