
let list=document.getElementById("list");
list.addEventListener("click", sellItem);


window.addEventListener("DOMContentLoaded", (event) => {
  getData();   
  });


 async function getData(){
    try{
    const res = await axios.get("http://localhost:3000/");
    for(let i =0; i< res.data.length;i++)
    {
        let str =`ID:${res.data[i].id} Name: ${res.data[i].name}  Price: ${res.data[i].price} Quantity: ${res.data[i].quantity} `
        showData(str,res.data[i].id);
    }

    }
    catch(error){
        console.log(error);
    }

}


window.addEventListener("submit", (event)=>{
    event.preventDefault();
    
     let obj= {
         name:document.getElementById('name').value,
         price:document.getElementById('price').value,
         quantity:document.getElementById('quantity').value
     };
     sendData(obj).then(()=>{getData();});

  });



async function sendData(obj){
    try{
    const res = await axios.post("http://localhost:3000/add-item",obj); 
    if(res.status==201)
    {window.location.reload();}

    }
    catch(error){
        console.log(error);
    }

}



function sellItem(e)
{
    if(e.target.classList.contains("btn"))
{
    if(confirm("Do you want to sell this item"))
    {   
        let qty= e.target.getAttribute("id");
        let li=e.target.parentElement;
        let id = li.getAttribute("id");
        qnty=1;
        sellItems(Number(id),li, Number(qty));  
    }

}
}



async function sellItems(id,li,qty){
    try{
       
    const res = await axios.put("http://localhost:3000/update-quantity/"+id+"/"+qty);
    if(res.status==201)
    {

    window.location.reload();
    }
   
    }
    catch(error){
        console.log(error);
    }

}



function showData(str,id)
    {
       
        let li=document.createElement("li");  
        li.setAttribute("id",id);    
        li.appendChild(document.createTextNode(str));

        let btn1=document.createElement("Sell");
        btn1.className="btn";
        btn1.setAttribute("type","button");
        btn1.setAttribute("id",1); 
        btn1.appendChild(document.createTextNode("Sell 1")); 
        li.appendChild(btn1);

        let btn2=document.createElement("Sell");
        btn2.className="btn";
        btn2.setAttribute("type","button");
        btn2.setAttribute("id",2); 
        btn2.appendChild(document.createTextNode("Sell 2")); 
        li.appendChild(btn2);

        let btn3=document.createElement("Sell");
        btn3.className="btn";
        btn3.setAttribute("type","button");
        btn3.setAttribute("id",3); 
        btn3.appendChild(document.createTextNode("Sell 3")); 
        li.appendChild(btn3);
       
        list.appendChild(li);
        
    }