const catsTitle = document.getElementById("catsTitle");

catsTitle.addEventListener("click", async function () {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    const imagesUrl = await response.json()
    const dogsContainer = document.getElementById("logic-container-dogs");

    dogsContainer.classList.add("hide-section");

    const catsContainer = document.getElementById('catsContainer');

    catsContainer.classList.remove('hide-section');

    imagesUrl.forEach(image => {

        const catsContainer = document.getElementById("catsContainer");

        const catsImage = document.createElement("img");
        catsImage.src = image.url;

        catsContainer.classList.add("cats-container");
        catsImage.classList.add("cats-images");

        catsContainer.appendChild(catsImage);


    });

})

// const respuesta = await fetch(URL_PRODUCTOS); //fetch para recibir los productos
// const productos = await respuesta.json();   //nueva variable para almacenar los productos en formato json
// return productos;