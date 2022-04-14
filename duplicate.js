function removeduplicate(str,n)
{
    let count=0;
 for (let i=0; i<n; i++)
 { let j=0;
    for( j=0;j<i;j++)
    {
        if(str[i]==str[j])
        {
            break;
        }
    }
    if(j==i)
    {
        str[count++]=str[i];
    }
 }
 return str.join("").slice(str,count);
}
let str="abcadeecfb".split("");
let n=str.length;
console.log(removeduplicate(str,n));


console.log("_______________________________")


console.log("Character Count")

let test = "abcadeecfb";
countusingmap( test ,count);
function count( str , outp_map )
{
for( let i = 0 ;i < str.length ;i++)
{
	let k = outp_map.get(str[i]);
	outp_map.set(str[i], k+1) ;
}
}
function countusingmap( test , callback )
{
	let mapcount = new Map();
	for( let i = 0 ;i < test.length;i++)
	{
	mapcount.set(test[i], 0);
	}
    callback( test ,mapcount);
	for( let [ key ,value] of mapcount)
{
   console.log(key+ "=" +value);
}
}
