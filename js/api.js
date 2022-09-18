const ul = document.querySelector('ul');


fetch ('https://restcountries.com/v3.1/all')
  .then((res)=>res.json())
  .then((data)=>{
       let li = "";
       data.map((c)=>(
           li += `<li> ${c.name.common} </li>`
       ))
       ul.innerHTML = li;
  })