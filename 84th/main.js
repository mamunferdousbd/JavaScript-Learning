console.clear();
/*=============================
Getting  a resource
=============================*/
/*
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
        if(!res.ok ){
            const message = `Error: ${res.status}`
            throw new Error(message)
        }
        return res.json();
    })
    .then((res) => console.log(res))
    .catch((err)=>console.log(err)); 
*/


/*=================================
Creating a resource
=================================*/
// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method:"POST",
//     body: JSON.stringify({
//         title: 'This is the API Calling by fetch for creating a resource ',
//         body: 'Fatch Creating a resorce POST',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
// })
// .then((res)=> {
//     if(!res.ok){
//         const msg = `${res.status}`;
//         throw new Error(msg);
//     }
//     return res.json();
// })
// .then((res)=>console.log(res));

/*=================================
Updating a resource
=================================*/
// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method:"PUT",
//     body: JSON.stringify({
//         id:1,
//         title: 'This is the API Calling by fetch for Updating a resource ',
//         body: 'Fatch Creating a resorce PUT',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
// })
// .then((res)=> {
//     if(!res.ok){
//         const msg = `${res.status}`;
//         throw new Error(msg);
//     }
//     return res.json();
// })
// .then((res)=>console.log(res));

/*=================================
Patching a resource
=================================*/

// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method:"PATCH",
//     body: JSON.stringify({
//         title: 'This is the API Calling by fetch for Patching a resource ',
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
// })
// .then((res)=> res.json(res))
/*
Error handeling
{
    if(!res.ok){
        const msg = `${res.status}`;
        throw new Error(msg);
    }
    return res.json();
})
 */

// .then((res)=>console.log(res));

/*=================================
Deleting a resource
=================================*/
// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'DELETE',
// })
// .then((res)=> res.json())
// .then((res)=>console.log(res))