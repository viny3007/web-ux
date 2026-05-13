const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="${new URL('./header.css', import.meta.url).href}">
    <header class="topo">
        <div class="logo">
            🎓 <span>GRAD<span class="way">WAY</span></span>
        </div>

        <input type="text" placeholder="Pesquisar..." class="search">

        <div class="acoes">
            <button class="btn"> <a href="cadastro.html">Entrar</a> </button>
            <button class="btn destaque">Cadastre-se agora</button>
        </div>
    </header>
`;