// Async and await
console.clear();
/**********************
 * Getting a resource
 ************************/
const makeRequest = async (url)=>{
   const res = await fetch(url);
   if(!res.ok){
    const meg = `Error: ${res.status}`;
     throw new Error(meg);
   }
   const data =res.json();
   return data;
}

const getData =() =>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1')
    .then((res)=>console.log(res))
    .catch((err)=> console.log(err))
};
getData();

/**********************
 * Creating a resource
 ************************/
 const createRequest = async (url,config)=>{
    const res = await fetch(url,config);
    if(!res.ok){
     const meg = `Error: ${res.status}`;
      throw new Error(meg);
    }
    const data =res.json();
    return data;
 }

 const sendData =() =>{
    createRequest('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title: 'Sending Data ',
            body: 'Sending Data',
            userId: 1,
            }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((res)=>console.log(res))
    .catch((err)=> console.log(err))
};
sendData();

/**********************
 * Updating a resource
 ************************/
 const updateRequest = async (url,config)=>{
    const res = await fetch(url,config);
    if(!res.ok){
     const meg = `Error: ${res.status}`;
      throw new Error(meg);
    }
    const data =res.json();
    return data;
 }

 const updateData =() =>{
    updateRequest('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'PUT',
        body: JSON.stringify({
            title: 'Updating Data ',
            body: 'Updating Data',
            userId: 1,
            }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((res)=>console.log(res))
    .catch((err)=> console.log(err))
};
updateData();
/**********************
 * Patching a resource
 ************************/
 const patchRequest = async (url,config)=>{
    const res = await fetch(url,config);
    if(!res.ok){
     const meg = `Error: ${res.status}`;
      throw new Error(meg);
    }
    const data =res.json();
    return data;
 }

 const patchData =() =>{
    patchRequest('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'PATCH',
        body: JSON.stringify({
            title: 'Patching Data ',
            }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((res)=>console.log(res))
    .catch((err)=> console.log(err))
};
patchData();
/**********************
 * Deleting a resource
 ************************/
 const deleteRequest = async (url,config)=>{
    const res = await fetch(url,config);
    if(!res.ok){
     const meg = `Error: ${res.status}`;
      throw new Error(meg);
    }
    const data =res.json();
    return data;
 }

 const deleteData =() =>{
    deleteRequest('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'DELETE',
    })
    .then((res)=>console.log(res))
    .catch((err)=> console.log(err))
};
deleteData();
 