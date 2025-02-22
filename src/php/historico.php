<?php
// Conectar ao banco de dados
require_once('conexaoDb.php');
$con = conexaoDb();
session_start();


// Verificar se o termo de pesquisa foi enviado via método POST
if ($_SERVER["REQUEST_METHOD"]=="POST") {
  
    $idUser =  $_SESSION['idUser'];
    $idVeiculo = $_POST["idVeiculo"];

    

    $sql = "INSERT INTO historico(data_registro, idVeiculos, idUsuarios) VALUES (NOW(), $idVeiculo, $idUser)";

    $con->query($sql);
}
if ($_SERVER["REQUEST_METHOD"]=="GET") {
    
    $sql = "SELECT
    h.data_registro AS data_registro,
    u.nome AS nome,
    u.email AS email,
    v.modelo AS modelo
FROM
    historico h
JOIN
    usuarios u ON h.idUsuarios = u.id_usuario
JOIN
    veiculos v ON h.idVeiculos = v.id_veiculos
ORDER BY
    h.data_registro DESC;";

   $resultado = $con->query($sql);
   if($resultado->num_rows > 0){
    while($linha = $resultado->fetch_assoc()){
        $dadosHistorico[] = array(
            'data' => $linha['data_registro'],
            'modelo' => $linha['modelo'],
            'nome' => $linha['nome'],
            'email' => $linha['email']
        );
    }
   }
   echo json_encode($dadosHistorico);
}


?>
