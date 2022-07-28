// Async Await

// For Get
 const makeRequest = async (config)=>{
     
    return await axios(config);
        
    
 };

 const getData = ()=>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1')
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
 };
 getData();

//  For POST
const sendRequest = async (config)=>{
     
    return await axios(config);
        
    
 };

 const sendData = ()=>{
    sendRequest({
        url:('https://jsonplaceholder.typicode.com/posts'),
        method: 'POST',
        data: JSON.stringify({
            title: 'POST',
            body: 'POST',
            userId: 1,
          }),

    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
 };
 sendData();


//  For POST
const putRequest = async (config)=>{
     
    return await axios(config);
        
    
 };

 const putData = ()=>{
    putRequest({
        url:('https://jsonplaceholder.typicode.com/posts/1'),
        method: 'PUT',
        data: JSON.stringify({
            id:1,
            title: 'PUT',
            body: 'PUT',
            userId: 1,
          }),

    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
 };
 putData();

//  Patch

const patchRequest = async (config)=>{
     
    return await axios(config);
        
    
 };

 const patchData = ()=>{
    patchRequest({
        url:('https://jsonplaceholder.typicode.com/posts/1'),
        method: 'PATCH',
        data: JSON.stringify({
            
            title: 'PATCH',
            
            
          }),

    })
    .then((res)=>console.log(res.data))
    .catch((err)=>console.log(err))
 };
 patchData();

