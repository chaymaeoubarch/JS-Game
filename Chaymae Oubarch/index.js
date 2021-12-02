var button=document.getElementById('button');
var random= Math.floor (Math.random()*100)+1;
console.log(random);
var counter=0;
document.getElementById("button").addEventListener('click',function(){ 
var text=parseInt(document.getElementById('text').value);
var comments= document.getElementById("comments");
    if (text>random)
    {
        comments.innerText= "Oops Sorry!! Try A Smaller Number" ; counter +=1;
    }

    else if(text<random)
    {
        comments.innerText= " Oops Sorry!! Try A Greater Number" ; counter +=1;
        if (counter == 10)
        {counter = 1 ; comments.innerText= ("Game Over!");}
    }
    
    else if(text==random)
    {
        if(counter==3)
        {
            comments.innerText= "You Won After " + counter + " Times";
        }
        else{
            comments.innerText= "You Won After " + counter + " Times" ;
        }
    }
    });

