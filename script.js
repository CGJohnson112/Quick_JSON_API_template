//console.log("Hello world");

//fetch('https://fakestoreapi.com/products').then((data) =>{

//this gets the JSON from the data file included 
fetch('http://localhost/Quick_JSON_API_template/data.json').then((data) =>{
    console.log(data);
    return data.json();///converted to object
}).then((objectData) => {
    
    //states number of entries
    console.log(objectData.length + " entries");
    
    let tableCount = objectData.length;

    let tableData = "";
    objectData.map((values) => {
//tableData += shows alll data from API




tableData+= 
        `<tr>
            <td>${values.id}</td>
            <td>${values.title}</td>
            <td>${values.description}</td>
            <td>${values.price}</td>
            <td id="numberRate"  style="color: red">${values.rating.rate}</td>
            <td><img src="${values.image}" /></td>
        </tr>`;

    
       
    });
    document.getElementById("table_body").innerHTML = tableData;
    document.getElementById("demo").innerHTML = tableCount + "  Entries today";

    //changes color of table count text if it meets criteria
    if (tableCount == 19) {
        document.getElementById('demo').style.color = 'pink';
    }



}).catch((err) => {
    console.log(err);
});








