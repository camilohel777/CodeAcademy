/* finds myName in the string text */
var text ="blah blah blah Camilo blah blah blah blah Camilo blah blah blah blah blah Camilo";
var myName ="Camilo";
var hits =[];

for (var i = 0; i < text.length; i++)
{
    if(text[i] === "C")
    {
        for(var j = i; j < myName.length + i; j++)
        {
            hits.push(text[j]);
        }
    }
    
}

if(hits[0] != 'C')
{
    console.log("Your name wasn't found!");
}
else
{
    console.log(hits);   
}
