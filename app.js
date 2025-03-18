let friendsList = []

function adicionarAmigo() {
  let novoAmigo = document.querySelector('.input-name').value;

  if (novoAmigo === '') {
    alert("Por favor, insira um nome.")
    return
  }

  friendsList.push(novoAmigo);
  clearSpace()
  updateList()
}

function clearSpace() {
  let inputClear = document.querySelector("input");
  inputClear.value = "";
}

function updateList() {
  let newFriend = document.getElementById('listaAmigos')
  newFriend.innerHTML = '';

  friendsList.forEach((friend) => {
    let li = document.createElement('li');
    li.textContent = friend
    newFriend.appendChild(li)
  })
}


