let newarray = [
  {
    item:"hey",
    date:'15/07/2024',
   },
   {
    item:"hello",
    date:'16/07/2024',
  } 
];

AddItems();

let addTodo = () => {
  let inputElement = document.querySelector("#todoinput").value;
  let dateElement = document.querySelector('#tododate').value;

  //   console.log(inputElement);
  newarray.push({item:inputElement,date:dateElement});
    console.log(newarray);
  document.querySelector("#todoinput").value = "";
  document.querySelector("#tododate").value = "";

  AddItems();
};

function AddItems() {
  let element = document.querySelector(".todocontainer");
  //   element.innerHTML = " ";

  let newHtml = " ";
  for (let i = 0; i < newarray.length; i++) {
    // element.innerHTML = element.innerHTML + newarray[i] + "<br>";
    // let item = newarray[i].item;
    // let date = newarray[i].date;
    // let {item,date} = newarray[i];
    newHtml += `
    
    <span>${newarray[i].item}</span>
    <span>${newarray[i].date}</span>
    <button id="delete" class="dlt"  onclick='newarray.splice(${i},1);AddItems();' >Delete</button>
    `;
  
    
  }
  element.innerHTML = newHtml;
}
