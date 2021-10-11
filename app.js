// hard-coded data for test
let data = [
    {
        "id" : 1 ,
        "name" : "Masoud" ,
        "family" : "Tabatabaei" ,
        "city" : "Esfahan" ,
        "country" : "Iran"
    } ,
    {
        "id" : 2 ,
        "name" : "Amir" ,
        "family" : "Salehi" ,
        "city" : "Esfahan" ,
        "country" : "Iran"
    } ,
    {
        "id" : 3 ,
        "name" : "Mohsen" ,
        "family" : "Ghasemi" ,
        "city" : "Tehran" ,
        "country" : "Iran"
    }
];


document.addEventListener("DOMContentLoaded", function() {
    tableLoading(".myTable" , 5 , 3);
    // simulate fetch data from server by hard-coded data with 5 seconds delay
    setTimeout(function(){
        fetchTableData(".myTable" , data);
    }, 5000);
});

// fetch data
function fetchTableData(tableElem , data) {
    let tableBody = document.querySelector(tableElem + " tbody");
    tableBody.innerHTML = "";

    for(let i=0 ; i < data.length ; i++) {
        let row = `
            <tr>
                <td>${data[i]["id"]}</td>
                <td>${data[i]["name"]}</td>
                <td>${data[i]["family"]}</td>
                <td>${data[i]["city"]}</td>
                <td>${data[i]["country"]}</td>
            </tr>
        `;

        tableBody.insertAdjacentHTML('beforeend', row);
    }
}

// render table placeholder
function tableLoading(tableElem , columnsNumber , rowNumbers){
    let tableBody = document.querySelector(tableElem + " tbody");

    console.log(tableBody);
    
    tableBody.innerHTML = "";
    for(let i=1 ; i<= rowNumbers ; i++){
        let td = "";
        let tr = `<tr>`;
        for(let j=1 ; j <= columnsNumber ; j++){
            td += `<td><span style="width:70%; height:20px; background-color:#eee; border-radius:4px; display:inline-block;"></span></td>`;
        }
        tr += `${td}</tr>`;
        
        tableBody.insertAdjacentHTML('beforeend', tr);
    }
}