//makes pairs of list items and then hides the second item unil the first list
//item is clicked then it shows the next list item in the pair


function getElement(tag) {
    var x=document.getElementsByName(tag)[0];
    var y = x.parentNode
    if (y.style.display=='block'){
        y.style.display='none'
    }else{
		y.style.display='block'     
		}
    }


    function list() {
        var questions = document.getElementById('questions');
        var elements = questions.getElementsByTagName('li');
               var index = 1 
        for (var i=0; i < elements.length; i+=2){
            var element = elements[i]; 
            element.innerHTML = "<a href='javascript:getElement(" + index + ")'>" + element.innerHTML + "</a>"
            index = index + 1
			element.style.listStyleType = 'none'
        } 
        var index = 1
        for (var i=1; i < elements.length; i+=2){
            var element = elements[i]; 
            element.innerHTML = "<a name='" + index + "' id='" + index + "'></a>" + element.innerHTML 
            index = index + 1
                 element.style.padding = '0px 0px 10px 20px' //adds an indent to the answer
                       element.style.listStyleType = 'none' //removes the bullet points
            element.style.display = 'none' //hide answer element
        }       
     }


window.onload = list; 
