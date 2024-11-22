// GET POST PUT DELETE

//GET

//fetch('https://api.kanye.rest')
//.then(res => res.json())
//.then(data => console.log(data))

// GET dummy post

//fetch('https://jsonplaceholder.typicode.com/posts/1')
  //  .then(res => res.json())
    //.then(data => console.log(data))


let lesHeaders = {
    'Content-Type': 'application/json'
}
let leBodyEnJavaScript= {
    title: "le titre de l'article",          // POST
    body: "bla bla bla bla patati patata",
    userId: 21
}

let unAutreBodyEnJavaScript = {
    title: "un autre article2",              // PUT
    body:"Il était une fois",
    userId: 21
}

let troisièmeArticle = {
    title: "un troisième article 3",
    body: "je suis le troisième article",    // PATCH
    userId:21
}


let leBodyEnJSON = JSON.stringify(leBodyEnJavaScript)   //POST

let bodyJson = JSON.stringify(unAutreBodyEnJavaScript) // PUT

let troisièmeEnJSON = JSON.stringify(troisièmeArticle) //PATCH


let boutonGet= document.querySelector('.boutonGet')

boutonGet.addEventListener('click', faitUnFetch)


//--------------Methode POST-------------------------------------------------------------------

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers: lesHeaders,
    body: leBodyEnJSON
})
    .then(res => res.json())
    .then(data => console.log(data))

// permet de transmettre une info qui doit etre enregistrer dans le server







//-----------Methode PUT---------------------------------------------

fetch ('https://jsonplaceholder.typicode.com/posts/21',{
    method : 'PUT',
    headers: lesHeaders,
    body: bodyJson
})
    .then(res => res.json())
    .then(data => console.log(data))


//PUT, remplace les données par celle qui sont envoyées dans la requête.
// elle supprime les anciennes données pour mettre les nouvelles
//On veut utiliser PUT quand on veut tout remplacer







//---------------Methode PATCH----------------------------------------

fetch('https://jsonplaceholder.typicode.com/posts/21', {
    method : 'PATCH',
    headers: lesHeaders,
    body: troisièmeEnJSON
})
    .then(res => res.json())
    .then(data => console.log(data))

//La méthode PATCH d'une requête HTTP applique des modifications partielles à la ressource.
// on utilise PATCH pour faire quelque MAJ







//------------Methode DELETE ----------------------------

fetch('https://jsonplaceholder.typicode.com/posts/21',{
    method: 'DELETE',
});

// on utilise DELETE pour supprimer une info qu'on a envoyer dans le server

//---------------------------------------------------------


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))

// elle est utilisé pour recupérer une ressource via une requette HTTP

//--------------------------------------------------------



function faitUnFetch(){

    fetch('https://BLINKY.ESDLYON.DEV')
        .then(res => res.json())
        .then(data => console.log(data))
}





