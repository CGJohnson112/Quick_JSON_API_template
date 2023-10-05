//console.log("Hello world");

//fetch('https://fakestoreapi.com/products').then((data) =>{

//this gets the JSON from the data file included 
fetch('http://localhost/Quick_JSON_API_template/data.json').then((data) =>{
    //console.log(data);
    return data.json();///converted to object
}).then((objectData) => {
    //console.log(objectData[0].title);
    let tableData = "";
    objectData.map((values) => {
//tableData += shows alll data from API
tableData+= 
        `<tr>
            <td>${values.id}</td>
            <td>${values.title}</td>
            <td>${values.description}</td>
            <td>${values.price}</td>
            <td>${values.rating.rate}</td>
            <td><img src="${values.image}" /></td>
        </tr>`;
       
    });
    document.getElementById("table_body").innerHTML = tableData;
   
}).catch((err) => {
    console.log(err);
});







