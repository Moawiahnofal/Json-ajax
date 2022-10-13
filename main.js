/*Name: Moawiah Nofal, 000875260

            Contructor name: Yendt Mark

            Date: 2022-08-08

            **Practicing Json and Ajax for assignment 6** 
            */

window.addEventListener("load", function(){

    



    // Send the request for the first button with no parameters.

    let firstButton = document.getElementById("btn-1");
    firstButton.addEventListener("click", function(event){

        let url = "https://csunix.mohawkcollege.ca/~adams/10259/a6_responder.php";
        console.log(url); // debug
        fetch(url, {credentials : "include"})
            .then(response => response.text())
            .then(success) //call success method to get the content

    });






    // Delete button1 after press it
    function deleteButton(){
        
        let buttons = document.getElementById("btn-1");
        buttons.style.display="none";
        
    }


 // Set the text for the first button
    function success(text) {
        deleteButton();
        let studentId = " #000875260 ";
        let name = "Moawiah Nofal,";
        let content = document.getElementById("display");
        content.innerHTML += "<h1>"+ name + studentId + text + "</h1>"; 
        
    }



 //  *********************************** Second Button************************************************************



          // Add preventDefault for first form

             document.forms.myForm.addEventListener("submit", function(event) {     
             event.preventDefault();
        });

        //Send json request with one parameter

        document.forms.myForm.btn2.addEventListener("click", function(event) {
	    
            let choice= document.forms.myForm.Option.value;
            let url = 'https://csunix.mohawkcollege.ca/~adams/10259/a6_responder.php?choice=' + choice;
            console.log(url); // debug
            fetch(url, { credentials: 'include' }) // send req using fetch
                .then(response => response.json())
                .then(success2) // call success2 method to get the content

        });
	

      
    

    // create success2 function to formate the content for button 2
    function success2(jsonData){
        let contentArea= document.getElementById("display-2");
	
        for(let i=0; i < jsonData.length; i++){
            
            
            innerDiv = document.createElement("div");
            contentArea.appendChild(innerDiv);
            innerDiv.innerHTML= "<h2>" + jsonData[i].series + "</h2>";
            innerDiv.innerHTML+= '<img src="' + jsonData[i].url + '"alt="images" ">';
            innerDiv.innerHTML+="<p>"+ jsonData[i].name + "<p>"
        }
        

         
    }




 //  *********************************** Third Button************************************************************

    // Add preventDefault for second form

	document.forms.formB.addEventListener("submit", function(event) {
      	 	event.preventDefault();
        });
	
	//Send json request with one parameter using Post method
  document.forms.formB.btn3.addEventListener("click", function(event) {
    let choice= document.forms.formB.Options.value;
    let params = "choice="+ choice;
    
    fetch('https://csunix.mohawkcollege.ca/~adams/10259/a6_responder.php', {
        method: 'POST',
        credentials: 'include',
        headers: { "Content-Type": "application/x-www-form-urlencoded" }, 
        body: params

    })
    .then(response => response.json())
    .then(success3) // call function success3 to get the content formate

});		
	

	

// create success2 function to formate the content for button 3
function success3(text){

        let table = document.getElementById("target");
		
		// Add the table headers
        let data= "<tr><th>series</th><th>name</th><th>link</th></tr>";
		
		console.log(JSON.stringify(text)); 
		
        for (let i = 0; i < text.length; i++) {
  
            rows = "<td>" + text[i].series + "</td>" + // create table rows
		   "<td>" + text[i].name + "</td>" +
		   "<td>" + text[i].url + "</td>";
					   
			data+= "<tr>" + rows + "</tr>";
			
        }
        table.innerHTML = data; // Add data to the html page
 }

});









