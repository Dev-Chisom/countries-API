const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
})

document.onreadystatechange = function() { 
    if (document.readyState !== "complete") { 
        document.querySelector( 
          "body").style.visibility = "hidden"; 
        document.querySelector( 
          "#loader").style.visibility = "visible"; 
    } else { 
        document.querySelector( 
          "#loader").style.display = "none"; 
        document.querySelector( 
          "body").style.visibility = "visible"; 
    } 
}; 



const getCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all/')
.then(resp => resp.json())
.then((data)=> {

    console.log(data)
    let res = '';


    for(i in data){
        res += '<tr>';
        res += '<td>' +i+ '</td>';
        res +='<td>' +data[i].name+'</td>';
        res +='<td>' +data[i].capital+'</td>';
        res +='<td>' +data[i].population+'</td>';
        res +='<td><ol>'
        for(j in data[i].borders){
            res+= '<li>' +data[i].borders[j]+'</li>'
        }
                '</ol></td>';
                // res +='<td>' +data[i].flag+'</td>';
         res +='<td><img src="'+data[i].flag+'" style="width: 200px; height: 150px; object-fit: contain;" ></td>';
        res += '</tr>'
    }
    document.getElementById('result').innerHTML = res;
}
    
    )
    .catch(error => {
        console.log('There is an error in getting your data:', error);
    });
}

getCountries();
