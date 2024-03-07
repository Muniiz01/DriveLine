
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
    <link rel="stylesheet" href="../bootstrap/bootstrap-css/bootstrap.css">
    <link rel="stylesheet" href="login_style.css">
    <script src="senha.js"></script>
</head>

<body>
    <!-- inicio da tela -->
    <form class="tela_login" method="POST">
        <div class="img-logo">
            <img src="../imagens/logo/logo-png.png" width="70%">
        </div>
        <!-- texto -->
        <p class="display-5 text-center" id="login_texto">Login</p>
        <!-- </div> -->

        <!-- inputs  -->
        <!-- input email -->
        <div class="input-group" id="input-group-email">
            <input type="text" required>
            <span>E-mail</span>
        </div>
        <!-- input senha -->
        <div class="input-group" value="" id="input-group-senha">
            <input type="password" id="senha" required>
            <span>Senha</span>
            <input class="ver" type="checkbox" onclick="mostrarSenha()">
        </div>
        <!--  -->

        <!-- alias "ctrl" + ";" comenta tb -->
        <!-- botoes -->
        <!-- botao esqueceu a senha -->
        <div class="div_esqueceu">
            <a href="#" id="botao_esqueceu_senha">esqueceu a senha?</a>
        </div>

        <!-- botoes finais enviar e cadastrar-se -->
        <div class="botoes_enviar_cadastrar">
            <button id="enviar" class="btn btn-primary btn-lg">Enviar</button>
            <a id="cadastro" href="../cadastro/cadastro.html">não possui conta?</a>

        </div>
    </form>
    <!-- fim da tela login -->
    <div class="home text-center">
        <a href="../home/index.php">voltar a página inicial</a>
    </div>
</body>

</html>
