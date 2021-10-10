 function ResetAll(){
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("motherName").value = "";
        document.getElementById("fatherName").value = "";
        //document.getElementById("male").value = "";
        //document.getElementById("female").value = "";
        //document.getElementById("nic").value = "";
        //document.getElementById("passport").value = "";
        document.getElementById("Address").value = "";
        document.getElementById("ddlProvince").value = "";
        document.getElementById("cities").value = "";
        document.getElementById("dob").value = "";
        document.getElementById("ddlProducts").value = "";
        document.getElementById("email").value = "";
    
        resetGender();
    }


    function specifyprovince(){
        var province = document.getElementById("ddlProvince");
        if (val == "1") {
				document.getElementById("cities").value = "";
				return;
			}
    }


    

    var province = [{
            "id":1,
            "name":"Sindh"
        },
        {
            "id":2,
            "name":"Punjab"
        },
        {
            "id":3,
            "name":"Balochistan"
        },
        {
            "id":4,
            "name":"KPK"
        },
    ];

     var cities = [        
        {
            "id":1,
            "name":"Karachi",
            "provinceName":"Sindh"
        },
        {
            "id":2,
            "name":"Lahore",
            "provinceName":"Punjab"
        },
        {
            "id":3,
            "name":"Hyderabad",
            "provinceName":"Sindh"
        },
        {
            "id":4,
            "name":"Lahore",
            "provinceName":"Punjab"
        },
        {
            "id":5,
            "name":"Quetta",
            "provinceName":"Balochistan"
        },
        {
            "id":6,
            "name":"Peshawar",
            "provinceName":"KPK"
        },
        {
            "id":7,
            "name":"Islamabad",
            "provinceName":"Punjab"
        },
        {
            "id":8,
            "name":"Larkana",
            "provinceName":"Sindh"
        },
        {
            "id":9,
            "name":"Sukkur",
            "provinceName":"Sindh"
        },
        {
            "id":10,
            "name":"Abbotabad",
            "provinceName":"KPK"
        }
    ];

    function loadProvince(){

        //var province = ["Sindh", "Punjab", "KPK", "Balochistan","AJK"];

        ddl = document.getElementById("ddlProvince");

        //ddl.clear();

        for(var i=0; i < province.length; i++){
            var option = document.createElement("option");
            option.append(province[i].name);        
            ddl.insertBefore(option,ddl.lastChild);
        }
    }
    function LoadCities(province){

        ddl = document.getElementById("ddlCities");
        
        //Clear all the existing drowdown elements
        var length = ddl.options.length;
        for (i = length-1; i >= 0; i--) {
            //ddl.options[i] = null;
            ddl.remove(i);
        }
        
        for(var i=0; i < cities.length; i++){
            if(cities[i].provinceName == province){
                var option = document.createElement("option");            
                option.append(cities[i].name);        
                ddl.insertBefore(option,ddl.lastChild);
            }
        }

    }
    //JSON Objects
    var product1 = {
            "id":1,
            "name":"Computer",
            "price":10
        };
        var product2 = {
            "id":2,
            "name":"Laptop",
            "price":12
        };
    var products =  [product1,product2];
    
    function LoadProducts(){       
        var ddlProducts = document.getElementById("ddlProducts");

        //ddl.clear();

        for(var i=0; i < products.length; i++){
            var option = document.createElement("option");
            option.append(products[i].name);        
            ddlProducts.insertBefore(option,ddlProducts.lastChild);
        }
         
    }

    function resetGender() {
      for(var el = document.getElementsByName('grpGender'), i = el.length; i--;)
        el[i].checked=false;
    }

    /*
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/products", true);
    xhr.onload = function(){
        console.log(xhr.responseText);
    };
    xhr.send();
    */
    loadProvince();
    LoadProducts();
    LoadCities(null);
