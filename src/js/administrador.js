window.addEventListener("load", function () {
  fetch("php/session.php")
    .then((response) => response.json())
    .then((data) => {
      if (Array.isArray(data)) {
        var nivel = data.map((item) => item.nivel);
        var nome = data.map((item) => item.nome);
        console.log(`Ola ${nome}, seu nivel e: ${nivel}`);

        if (nivel != "3") {
          window.location.replace("../index.html");
        }
      } else {
        window.location.replace("../index.html");
      }
    });
});
//Funções////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function enviarFormCar() {
  var categoria = document.getElementById("categoria").value; // Atribui o valor do input pelo id em uma variavel " variavel contem o mesmo nome do input "
  var modelo = document.getElementById("modelo").value;
  var marca = document.getElementById("marca").value;
  var cor = document.getElementById("cor").value;
  var quilometragem = document.getElementById("quilometragem").value;
  var cambio = document.getElementById("cambio").value;
  var passageiros = document.getElementById("passageiros").value;
  var arCondicionado = document.querySelector('input[name="ar-cond"]:checked').value;
  var airbag = document.querySelector('input[name="airbag"]:checked').value;
  var abs = document.querySelector('input[name="airbag"]:checked').value;
  var volumeCarga = document.getElementById("volume-carga").value;
  var preco = document.getElementById("preco_veiculo").value;
  var preco_veiculo = preco.replace(/[^0-9]/g, '')
  var descricao = document.getElementById("descricao").value;
  var input = document.getElementById("imagens"); //  pega imagens atribuida no input do tipo file

  var imagens = input.files; // Atribui imagens em um array

  var formData = new FormData(); // FormData e um metodo de armazenamemto para envio de arquivos para o lado do servidor
  formData.append("categoria", categoria); // armazena as variaveis na funcao FormData
  formData.append("modelo", modelo);
  formData.append("marca", marca);
  formData.append("cor", cor);
  formData.append("quilometragem", quilometragem);
  formData.append("cambio", cambio);
  formData.append("passageiros", passageiros);
  formData.append("arCondicionado", arCondicionado);
  formData.append("airbag", airbag);
  formData.append("abs", abs);
  formData.append("volumeCarga", volumeCarga);
  formData.append("preco_veiculo", preco_veiculo);
  formData.append("descricao", descricao);

  for (var i = 0; i < imagens.length; i++) {
    // laço de repeticao que percorre o array imagens e armazena na funcao FormData em formato de array
    var imagem = imagens[i];
    formData.append("imagens[]", imagem);
  }

  fetch("php/addVeiculos.php", {
    // funcao fetch() e damos os seguintes parametros 'addVeiculos.php' script do servidor
    method: "POST", // method: 'POST' que indica o tipo de envio para o servidor
    body: formData, // body: formData o corpo do envio que e todos os valores armazenado no FormData
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      // Exibi mensagens caso o servidor receba os dados
    })
    .catch((error) => {
      console.log(error);
      // exibe mensagens em caso de erro ao enviar os dados
    });
}
function enviarFormFunc() {
  var nome = document.getElementById("nome").value;
  var documento = document.getElementById("cpf").value;
  var telefone = document.getElementById("telefone").value;
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  var formData = new FormData();
  formData.append("nome", nome);
  formData.append("documento", documento);
  formData.append("telefone", telefone);
  formData.append("email", email);
  formData.append("senha", senha);

  fetch("php/addFuncionario.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      console.log(data); //exibi mensagem enviada do php
    })
    .catch((error) => {
      console.log(error); // exibe mensagem de erro enviada do php
    });
}
//exibir/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//-----------------------------------------------------------------------------------------
function exibirUsuarios() {
  selectedDiv = null
  const dadosDiv = document.getElementById("lista");

  fetch("php/listaUsuarios.php", { method: "GET" })
    .then((response) => response.json())
    .then((data) => {

      const lista = data.map(
        (item) => `
        <tr id='${item.idUsuario}' onclick='selecionaTabela(${item.idUsuario}, ${item.nivelAcess})'>
        <th scope="row">${item.idUsuario}</th>
        <td>${item.nome}</td>
        <td>${item.email}</td>
        <td>${item.telefone}</td>
        <td>${item.documento}</td>
        </tr>
        `
      );
      document.getElementById('nomeLista').innerHTML = "Lista de Usuarios"
      document.getElementById('tableT2').innerHTML = "Nome"
      document.getElementById('tableT3').innerHTML = "Email"
      document.getElementById('tableT4').innerHTML = "Telefone"
      document.getElementById('tableT5').innerHTML = "Documento"

      document.getElementById('barraP').innerHTML = `
<input class="form-control start-0" id='pesquisa' onkeyup="barraPesquisa('u')" type="search" placeholder="Search" aria-label="Search">
<button class="btn btn-outline-success">Search</button>
`
      document.getElementById('butoesADV').innerHTML = `
      <button class="btn btn-secondary btn-sm" id="buttonA" data-bs-toggle="modal" data-bs-target="#alterBackdrop" onclick="alterar()" disabled>Alterar</button>
      <button class="btn btn-danger btn-sm" id="buttonH" data-bs-toggle="modal" data-bs-target="#staticBackdrop" disabled>Excluir</button>
      `

      dadosDiv.innerHTML = lista.join("");
    })
    .catch((error) => {
      console.error("Erro ao buscar os dados dos usuários:", error);
      dadosDiv.innerHTML = "Nenhum registro encontrado";
    });
}

function alterar() {
  var div = document.getElementById("modalAlterar")
  fetch("php/listaUsuariosAlterar.php" + "?id=" + id, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {

      const lista = data.map((item) => {
        return `
        <form id='form-addFunc'>
        <div class="input-group mb-3  w-35 mx-auto">
          <i class="input-group-text fa-solid fa-user w-5"></i>
          <input type="text" id="nome" class="form-control" placeholder="Nome Completo"  aria-label="Nome Completo" value='${item.nome}' aria-describedby="basic-addon1"required>
        </div>
        <div class="input-group mb-3  w-35 mx-auto">
          <i class="input-group-text fa-solid fa-address-card w-5"></i>
          <input type="text" id="cpf" class="form-control" onkeydown="javascript: fMasc(this, mCPF)" maxlength="14" autocomplete="cpf"  placeholder="Documento" value='${item.documento}' aria-label="Documento" aria-describedby="basic-addons1"required>
        </div>
        <div class="input-group mb-3  w-35 mx-auto">
          <i class="input-group-text fa-solid fa-phone w-5"></i>
          <input type="text" id="telefone" class="form-control"  autocomplete="tel" onkeydown="fMasc(this, mTel)" placeholder="Telefone" maxlength="15" value='${item.telefone}' aria-label="Telefone" aria-describedby="basic-addons1"required>
        </div>
        <div class="input-group mb-3  w-35 mx-auto">
          <span class="input-group-text w-5">@</span>
          <input type="text" id="email" class="form-control"  placeholder="E-mail" autocomplete="new-email" aria-label="modelo" value='${item.email}' aria-describedby="basic-addons1"required>
        </div>
      </form>`;
      });
      document.getElementById("botaoAlterar").innerHTML = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
      <button class="btn btn-success mt-3 mb-4" id="btnEnviar" onclick='enviarUsuario(${id})' data-bs-dismiss="modal">Enviar</button> `
      div.innerHTML = "";
      div.innerHTML = lista.join("");

      // Desvincula o evento de clique após o primeiro clique
      document.getElementById("btnEnviar").removeEventListener("click", alterar);
    });
}
function barraPesquisa(tipo) {
  var query = document.getElementById('pesquisa').value

  var formData = new FormData();
  formData.append("query", query);
  formData.append("tipo", tipo);
  fetch("php/pesquisa.php", {
    method: "POST",
    body: formData,
  }).then(response => response.json())
    .then(data => {
      const dadosDiv = document.getElementById('lista')
      const lista = data.map(item => {
        var msg = item.msg
        if (msg == "Nenhum registro encontrado") {
          popup("Nenhum registro encontrado")
        } else {
          return `
        
        <tr id='${item.idUsuario}' onclick='selecionaTabela(${item.idUsuario})'>
        <th scope="row">${item.idUsuario}</th>
        <td class='item_usuario'>${item.nome}</td>
        <td class='item_usuario'>${item.email}</td>
        <td class='item_usuario'>${item.telefone}</td>
        <td class='item_usuario'>${item.documento}</td>
    </tr>
    `}
      });


      dadosDiv.innerHTML = lista.join('');


    }).catch(error => {


    });
}

function exibirFuncionarios() {
  selectedDiv = null
  const dadosDiv = document.getElementById("lista");

  fetch("php/listaFuncionarios.php", { method: "GET" })
    .then((response) => response.json())
    .then((data) => {

      const lista = data.map(
        (item) => `
          <tr id='${item.idUsuario}' onclick='selecionaTabela(${item.idUsuario},${item.nivelAcess})'>
          <th scope="row">${item.idUsuario}</th>
    <td class='item_usuario'>${item.nome}</td>
    <td class='item_usuario'>${item.email}</td>
    <td class='item_usuario'>${item.telefone}</td>
    <td class='item_usuario'>${item.documento}</td>
  </tr>
          `
      );
      document.getElementById('barraP').innerHTML = `
<input class="form-control start-0" id='pesquisa' onkeyup="barraPesquisa('f')" type="search" placeholder="Search" aria-label="Search">
<button class="btn btn-outline-success" onclick="barraPesquisa('f')">Search</button>`

      document.getElementById('nomeLista').innerHTML = "Lista de Funcionarios"
      document.getElementById('tableT2').innerHTML = "Nome"
      document.getElementById('tableT3').innerHTML = "Email"
      document.getElementById('tableT4').innerHTML = "Telefone"
      document.getElementById('tableT5').innerHTML = "Documento"
      document.getElementById('butoesADV').innerHTML = `
      <button class="btn btn-secondary btn-sm" id="buttonA" data-bs-toggle="modal" data-bs-target="#alterBackdrop" onclick="alterarFuncionario()" disabled>Alterar</button>
      <button class="btn btn-danger btn-sm" id="buttonH" data-bs-toggle="modal" data-bs-target="#staticBackdrop" disabled>Excluir</button>
      `
      dadosDiv.innerHTML = lista.join("")



    })
    .catch((error) => {
      console.error("Erro ao buscar os dados dos usuários:", error);
      dadosDiv.innerHTML = "Nenhum registro encontrado";
    });
}
function alterarFuncionario() {
  var div = document.getElementById("modalAlterar")
  fetch("php/listaAlterarFuncionario.php" + "?id=" + id, { method: "GET" })

    .then((response) => response.json())
    .then((data) => {

      const lista = data.map((item) => {
        return `
        <form id='form-addFunc'>
        <div class="input-group mb-3  w-35 mx-auto">
          <i class="input-group-text fa-solid fa-user w-5"></i>
          <input type="text" id="nome" class="form-control" placeholder="Nome Completo"  aria-label="Nome Completo" value='${item.nome}' aria-describedby="basic-addon1"required>
        </div>
        <div class="input-group mb-3  w-35 mx-auto">
          <i class="input-group-text fa-solid fa-address-card w-5"></i>
          <input type="text" id="cpf" class="form-control" onkeydown="javascript: fMasc(this, mCPF)" maxlength="14" autocomplete="cpf"  placeholder="Documento" value='${item.documento}' aria-label="Documento" aria-describedby="basic-addons1"required>
        </div>
        <div class="input-group mb-3  w-35 mx-auto">
          <i class="input-group-text fa-solid fa-phone w-5"></i>
          <input type="text" id="telefone" class="form-control"  autocomplete="tel" onkeydown="fMasc(this, mTel)" placeholder="Telefone" maxlength="15" value='${item.telefone}' aria-label="Telefone" aria-describedby="basic-addons1"required>
        </div>
        <div class="input-group mb-3  w-35 mx-auto">
          <span class="input-group-text w-5">@</span>
          <input type="text" id="email" class="form-control"  placeholder="E-mail" autocomplete="new-email" aria-label="modelo" value='${item.email}' aria-describedby="basic-addons1"required>
        </div>
      </form>`;
      });
      document.getElementById("botaoAlterar").innerHTML = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
      <button class="btn btn-success" id="btnEnviar" onclick='enviarFuncionario(${id})' data-bs-dismiss="modal">Enviar</button> `
      div.innerHTML = "";
      div.innerHTML = lista.join("");



      // Desvincula o evento de clique após o primeiro clique
      document.getElementById("btnEnviar").removeEventListener("click", alterarFuncionario);
    });
}
////////////Seleciona tabela para alteracoes ou deletar
var nivel
var id
var selectedDiv = null;

function selecionaTabela(idUser, nivelAcess) {
  var div = document.getElementById(idUser);
  console.log(div)

  if (div.classList.contains('table-active')) {
    div.classList.remove('table-active');
    selectedDiv = null;
    var buttonHab = document.getElementById("buttonH")
    var buttonHaa = document.getElementById("buttonA")
    buttonHaa.disabled = true
    buttonHab.disabled = true
    id = " "
    nivel = " "
    console.log(id)
  } else {

    if (selectedDiv !== null) {
      document.getElementById(selectedDiv).classList.remove('table-active');

    }
    var buttonHab = document.getElementById("buttonH")
    var buttonHaa = document.getElementById("buttonA")
    buttonHaa.disabled = false
    buttonHab.disabled = false
    div.classList.add('table-active');
    id = idUser
    nivel = nivelAcess
    selectedDiv = idUser;
    console.log(id)

  }
}

function enviarFuncionario(idUsuario) {

  var nome = document.getElementById('nome').value // Atribui o valor do input pelo id em uma variavel " variavel contem o mesmo nome do input " 
  var documento = document.getElementById('cpf').value
  var telefone = document.getElementById('telefone').value
  var email = document.getElementById('email').value

  var formData = new FormData()  // FormData e um metodo de armazenamemto para envio de arquivos para o lado do servidor 
  formData.append('nome', nome)  // armazena as variaveis na funcao FormData 
  formData.append('documento', documento)
  formData.append('telefone', telefone)
  formData.append('email', email)
  formData.append('idUsuario', idUsuario)
  formData.append('nivel', nivel)


  fetch('php/alterarFuncionario.php', {
    method: 'POST',
    body: formData
  }).then(response => response.text()).then(data => {
    console.log('Funcionário alterado', idUsuario, data)

  }).catch(error => {
    console.log('error', error)

  })
}


function exibirVeiculos() {
  const dadosDiv = document.getElementById("lista"); // Sera atribuido um elemento html do funcionarios.html pelo id 'lista'

  fetch("php/listaVeiculos.php", { method: "POST" }) // Comecamos chamando o metodo fetch() e damos os seguintes parametros 'listaVeiculos.php' Ele chama o aqrquivo php com o metodo 'GET' o arquivo php enviara um array no formato json
    .then((response) => response.json())
    .then((data) => {
      // Atribui o array json no array dataF

      const lista = data.map((item) => {
        // A funcao data.map() cria um novo array com os resultados do array enviado pelo arquivo php json, nele e criado novos elementos html e inserido os resultados por exemplo: "${item.modelo}" item e o objeto array e modelo e a cahve array, todo o bloco e atribuido a const lista
        return `
      <tr id='${item.id_veiculos}'>
        <th scope="row">${item.id_veiculos}</th>
        <td class='item_usuario'>${item.categoria}</td>
        <td class='item_usuario'>${item.marca}</td>
        <td class='item_usuario'>${item.modelo}</td>
        <td class='item_usuario'>${dolar(item.preco_veiculo)}</td>
      </tr>
        `;
      });

      document.getElementById('tableT2').innerHTML = "Categoria"
      document.getElementById('tableT3').innerHTML = "Marca"
      document.getElementById('tableT4').innerHTML = "Modelo"
      document.getElementById('tableT5').innerHTML = "Preco"

      document.getElementById('butoesADV').innerHTML = `
      <button class="btn btn-secondary btn-sm">Visualizar</button>
      <button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Excluir</button>
      `


      dadosDiv.innerHTML = lista.join(""); // inseri os elementos html no funcionario.html
      /* console.log(data) */
    })
    .catch((error) => {
      // exibi o erro no console do navegador
      console.error("Erro ao buscar os dados dos veículos:", error);
      document.getElementById("lista").innerHTML = "Nenhum registro encontrado";
    });
}

function alterarCarro(idVeiculo) {
  var div = document.getElementById("lista")
  div.innerHTML = `<div id='form-addCars'> 
  <input id='categoria' placeholder='categoria'> 
  <input id='modelo' placeholder='modelo'> 
   <input id='marca' placeholder='marca'>  
   <input id='cor' placeholder='cor'>  
   <input id='quilometragem' placeholder='quilometragem' maxlenght = '6'> 
   <input id='cambio' placeholder='cambio'> 
   <input id='passageiros' placeholder='qtd-passageiros'> 
   <input id='ar-condicionado' placeholder='tem ar-condicionado?'> 
   <input id='airbag' placeholder='tem airbag?'> 
   <input id='abs' placeholder='tem abs?'> 
   <input id='volume-carga' placeholder='volume de carga'> 
   <input id='preco_veiculos' placeholder='Preço'> 
   <input id='imagens' type='file' multiple accept='image/jpeg, image/png'> 
   <textarea name='descricao' id='descricao' cols='30' rows='10' placeholder='descricao veiculo'></textarea>
   <button id='btnEnviar' onclick='enviarFo(${idVeiculo})'>enviar</button>
   </div>`
}

//deleter//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function deletar() {
  idUser = id
  nivelAcess = nivel
  var formData = new FormData();
  formData.append("idUsuario", idUser);
  formData.append("nivelAcess", nivelAcess);

  fetch("php/deletaUsuario.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      console.log("usuario deletado");
      if (nivel == 2) {
        exibirFuncionarios()
        var buttonHab = document.getElementById("buttonH")
    buttonHab.disabled = true
      } else {
        exibirUsuarios()
      }

    })
    .catch((error) => {
      console.log("error", error);
    });

}

function enviarUsuario(idUsuario) {
  var nome = document.getElementById('nome').value // Atribui o valor do input pelo id em uma variavel " variavel contem o mesmo nome do input " 
  var documento = document.getElementById('documento').value
  var telefone = document.getElementById('telefone').value
  var email = document.getElementById('email').value

  var formData = new FormData()  // FormData e um metodo de armazenamemto para envio de arquivos para o lado do servidor 
  formData.append('nome', nome)  // armazena as variaveis na funcao FormData 
  formData.append('documento', documento)
  formData.append('telefone', telefone)
  formData.append('email', email)
  formData.append('idUsuario', idUsuario)
  formData.append('nivel', nivel)


  fetch('php/alterarUsuario.php', {
    method: 'POST',
    body: formData
  }).then(response => response.text()).then(data => {
    console.log('usuario alterado', idUsuario, data)

  }).catch(error => {
    console.log('error', error)

  })
}
//retornaHome/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function retornaHome() {
  window.location.replace("../index.html")
}
//mascara/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function dolar(e) {
  var num = parseInt(e, 10)
  var input = num
  var value = input

  value = (value / 100).toFixed(2).replace('.', ',')
  value = 'R$ ' + value
  input.value = value

  return value
}

//popup///////////
function popup(msg) {
  var myModal = new bootstrap.Modal(document.getElementById('meuModal'));
  document.getElementById('modalBody').innerHTML = msg
  myModal.show();
}



