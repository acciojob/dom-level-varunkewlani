//your JS code here. If required.
let abc=document.getElementById("level")
count=1
while (abc.previousElementSibling) 
{
	count++
	abc=abc.previousElementSibling	
}
alert("The level of the element is: " + count)