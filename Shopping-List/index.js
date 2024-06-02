const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

const addInput = (e) => {
  e.preventDefault();

  const newItem = itemInput.value;

  if (newItem === '') {
    alert('Please add an item')
    return;
  }

  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));
  
  itemList.appendChild(li)
  itemInput.value = '';

  const button = createButton('remove-item btn-link text-red');
  li.appendChild(button);

  function createButton (classes){
    const button = document.createElement('button');
    button.className = classes
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon)
    return button;
  }

  function createIcon (classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
  }


}

itemForm.addEventListener('submit', addInput)