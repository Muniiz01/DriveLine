<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>inicio</title>
    <link rel="stylesheet" href="../bootstrap/bootstrap-css/bootstrap.css">
    <link rel="stylesheet" href="home_style.css">
    <script src="../bootstrap/js/bootstrap.bundle.js"></script>
    <!-- Não -->
</head>

<body>

    <div class="barra_superior">
        <img src="../imagens/logo/slim-logo-png.png" width="11%">
        <!-- dropdown -->
        <div class="botoes">
            <div class="btn-group grupo1">
                <!-- dropdown feito com bootstrap depende do bootstrap.bundle.js para funcionar-->
                <button type="button" class="btn btn-lg btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Alugue-já
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item Economico" href="#">Economico</a></li>
                    <li><a class="dropdown-item SUV" href="#">SUV</a></li>
                    <li><a class="dropdown-item Conforto" href="#">Conforto</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <!--divisoria-->
                    <li><a class="dropdown-item Todos" href="#">Diversos</a></li>
                </ul>
            </div>
            <!-- fim do dropdown -->
            <div class="btn-group grupo2"> <!--btn, btn-lg e btn-dark são todas classes do bootstrap-->
                <button class="reservas_btn btn btn-lg"><a href="test.html">Minhas reservas</a></button>
                <button class="cadastro btn btn-dark btn-lg"><a href="../login/login.php">Entrar</a></button>
            </div>
        </div>
    </div>
    <!--fim barra superior -->

    <!-- slider -->
    <div class="slider_pai">
        <div class="elementos_slide">
            <!-- radios -->
            <input type="radio" name="radio-btn" id="radio1">
            <input type="radio" name="radio-btn" id="radio2">
            <input type="radio" name="radio-btn" id="radio3">
            <input type="radio" name="radio-btn" id="radio4">
            <!-- fim dos radios -->

            <!-- imagem -->
            <div class="slide primeiro">
                <img src="../imagens/slider/seguros.png" alt="imagem1">
            </div>
            <div class="slide segundo">
                <img src="../imagens/slider/economize.png" alt="imagem2">
            </div>
            <div class="slide terceiro">
                <img src="../imagens/slider/turismo.png" alt="imagem3">
            </div>
            <div class="slide quarto">
                <img src="../imagens/slider/economize.png" alt="imagem4">
            </div>
            <!-- fim das imagens -->
            <div class="navigation-auto">
                <div class="auto-btn1"></div>
                <div class="auto-btn2"></div>
                <div class="auto-btn3"></div>
                <div class="auto-btn4"></div>
            </div>
        </div>
        <!--  -->
        <div class="navegacao_manual">
            <label for="radio1" class="botao_manual"></label>
            <label for="radio2" class="botao_manual"></label>
            <label for="radio3" class="botao_manual"></label>
            <label for="radio4" class="botao_manual"></label>
        </div>
    </div>
    </div>
    <!-- /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
    <!-- fim do slider -->

    <!-- <H1 class="display-5 text-center" id="texto_categorias">Categorias:</H1> -->

    <!-- inicio do menu de categorias -->

    <div class="menu_de_categorias">
        <div class="categoria economico">
            <img src="../imagens/categorias/economia.png">
            <h3>Economico</h3>
            <p>Modelos que gastam menos combustivel e são baratos</p>
            <a class="btn btn-lg btn-primary" href="#">Selecionar</a>
        </div>
        <div class="categoria SUV">
            <img src="../imagens/categorias/SUV.png">
            <h3>SUV</h3>
            <p>Modelos utilitários e esportivos</p>
            <a class="btn btn-lg btn-primary" href="#">Selecionar</a>
        </div>
        <div class="categoria conforto">
            <img src="../imagens/categorias/conforto.png">
            <h3>Conforto</h3>
            <p>Modelos mais espaçosos e confortaveis para multiplas pessoas</p>
            <a class="btn btn-lg btn-primary" href="#">Selecionar</a>
        </div>
        <div class="categoria todos">
            <img src="../imagens/categorias/todos.png">
            <h3>Diversos</h3>
            <p>Inclui todos os modelos anteriores na sua busca</p>
            <a class="btn btn-lg btn-primary" href="#">Selecionar</a>
        </div>
    </div>
    <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
    <!-- footer -->
    <div class="rodape">

        <div class="texto_rodape">
            <p class="display-5">Contato</p>
            <p class="pequeno_texto">(47)99889-4766 <img src="../imagens/rodape/whatsapp.png" alt="whatsapp"></p>
        </div>
        <div class="texto_rodape">
            <p class="display-5">Redes sociais</p>
            <p class="display-5 subtitulo">Github</p>
            <a href="https://github.com/JhonnyAnthony" class="pequeno_texto">https://github.com/JhonnyAnthony<img src="../imagens/rodape/github.png" alt="github"></a>
            <br>
            <a href="https://github.com/Muniiz01" class="pequeno_texto">https://github.com/Muniiz01<img src="../imagens/rodape/github.png" alt="github"></a>
            <br>
            <a href="https://github.com/vitorSchuster" class="pequeno_texto">https://github.com/vitorSchuster<img src="../imagens/rodape/github.png" alt="github"></a>
        </div>
        
            <div class="copyright">
                <h1 class="display-5">DriveLine</h1>
                <p>Copyright 2024 todos os <br> direitos reservados</p>
            </div>
        </div>
        <!-- arquivo para os slider -->
        <script src="slider.js"></script>
        <!--  -->
</body>

</html>