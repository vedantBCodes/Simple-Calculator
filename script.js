var temp='';

function checkForLastCharacter(num) 
{                                  
    //This function will put a restriction on entering a more than one consecutive operator
    //It will check if the last entered character was an operator or not . If yes then it will not take any operator just after that
    var opr=['+','-','*','/','.','%','='];
    var lastChar=temp[temp.length-1];
    if(opr.includes(num))
    {
        if(opr.includes(lastChar))
        {
            alert("Invalid Input")
        }
        else
        {
            temp=temp+num;
        }
    }
    else
    {
        temp=temp+num;
    }
}
    function display(num){

        checkForLastCharacter(num);
      var x=document.getElementById("dis");
      x.setAttribute('value',temp);
    }

    function clearAll()
    {
       temp='';
      var y=document.getElementById("dis");
      y.setAttribute('value',temp);
    }

    function deleteOne()
    {
       temp=temp.slice(0,-1);
      var y=document.getElementById("dis");
      y.setAttribute('value',temp);
    }

    function evaluateX()
    {
      var z=document.getElementById("dis");
      var temp2=z.getAttribute('value');
      temp=eval(temp2);
      z.setAttribute('value',temp);
    }

   