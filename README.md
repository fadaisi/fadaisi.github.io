<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>FADAISI.EXE</title>
  <style>
    :root{
      --bg:#f4f4f1;
      --paper:#efefec;
      --white:#ffffff;
      --mid:#d9d9d4;
      --gray:#9a9a94;
      --black:#000000;
      --red:#d81919;
      --shadow:4px 4px 0 rgba(0,0,0,.14);
    }

    *{box-sizing:border-box}

    html,body{
      margin:0; height:100%; width:100%;
      overflow:hidden; background:var(--bg);
      font-family:Tahoma, "MS Sans Serif", Arial, sans-serif;
    }

    /* Efeito de Scanline (Monitor Antigo) */
    body::before{
      content:""; position:fixed; inset:0;
      background: repeating-linear-gradient(0deg, rgba(0,0,0,.03) 0 1px, transparent 1px 4px);
      pointer-events:none; z-index:999;
    }

    .screen{
      position:relative; width:100vw; height:100vh;
      display:none; overflow: hidden;
      background: linear-gradient(180deg, rgba(255,255,255,.7), rgba(244,244,241,.9));
    }
    .screen.active{display:block}

    /* Cabeçalhos Estabilizados */
    .page-label{
      position:absolute; left:3vw; top:2vh;
      font-size: clamp(30px, 6vw, 54px);
      font-family:"Arial Black", sans-serif; z-index:100;
    }
    .page-sub{
      position:absolute; left:3vw; top: clamp(75px, 11vh, 90px);
      font-size: clamp(10px, 1.2vw, 13px); font-family:monospace;
      z-index:100; background:rgba(255,255,255,0.7);
      padding:5px; border:1px solid #ccc; max-width: 85vw;
    }

    /* Janelas Win95 - Usando % para não sumirem da tela */
    .win95{
      position:absolute; width: clamp(210px, 20vw, 270px);
      background:var(--mid); border:2px solid;
      border-color: var(--white) var(--black) var(--black) var(--white);
      box-shadow: var(--shadow); z-index:10;
    }
    .win95 .titlebar{
      background:linear-gradient(90deg, #000, #444); color:#fff;
      padding:3px 8px; font-size:11px; font-weight:bold;
      display:flex; justify-content:space-between;
    }
    .win95 .titlebar.red{ background:linear-gradient(90deg, #800, var(--red)); }
    .win-btn{ width:16px; height:14px; background:var(--mid); border:1px solid #000; font-size:9px; display:flex; align-items:center; justify-content:center; }

    .win95 .body{ padding:12px; font-size:12px; line-height:1.2; min-height: 100px; }
    .win95 .body b{ display:block; font-size:18px; font-family:"Arial Black"; text-transform:uppercase; margin-bottom: 4px; }
    .statusbar{ margin-top:8px; border:1px solid var(--gray); background:#eee; padding:2px 4px; font-size:10px; font-family:monospace; }

    /* Botão Estrela */
    .star-btn{
      position:absolute; width: clamp(110px, 15vw, 150px); height: clamp(110px, 15vw, 150px);
      background:#fff200; clip-path:polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
      border:none; cursor:pointer; color:var(--red); font-weight:900; font-family:"Arial Black";
      z-index:200; transition: 0.2s; display: flex; align-items: center; justify-content: center; text-align: center;
    }
    .star-btn:hover{ transform: scale(1.1) rotate(-5deg); }

    /* Figuras da Colagem (Página 2) */
    .figure{ position:absolute; width:20vw; min-width: 160px; z-index:5; cursor:pointer; }
    .figure img{ width:100%; mix-blend-mode:multiply; pointer-events: none; }

    /* Página 3 - Dossier */
    .page3-wrap{ position:absolute; inset:0; padding: 150px 5% 100px; overflow-y:auto; z-index:5; }
    .page3-grid{ display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:20px; }
    .card{ background:var(--paper); border:2px solid #000; padding:20px; box-shadow: var(--shadow); }
    .gallery-item{ background:#fff; border:1px solid #000; padding:5px; transform: rotate(var(--rot, 0deg)); margin-bottom: 10px; }
    .gallery-item img{ width:100%; filter: grayscale(1); }

    /* Ajuste Mobile */
    @media (max-width: 768px) {
      .screen { overflow-y: auto; }
      .win95 { position: relative !important; left: auto !important; top: auto !important; margin: 110px auto 20px !important; width: 90%; }
      .page-label { font-size: 28px; position: fixed; background: var(--bg); width: 100%; padding-bottom: 10px; }
      .star-btn { position: fixed; bottom: 15px; right: 15px; width: 90px; height: 90px; font-size: 11px; }
    }
  </style>
</head>
<body>

  <section id="page1" class="screen active">
    <h1 class="page-label">FADAISI.EXE</h1>
    <div class="page-sub">body as technology / matter remembers / hair as system</div>

    <div class="win95" style="left:5%; top:20%; z-index:20;">
      <div class="titlebar red"><span>Virus Alert</span><div class="win-btn">X</div></div>
      <div class="body"><b>FADAISI</b>the body is not separate from the system.<div class="statusbar">critical status</div></div>
    </div>

    <div class="win95" style="left:35%; top:12%; z-index:15;">
      <div class="titlebar"><span>Message.exe</span><div class="win-btn">X</div></div>
      <div class="body"><b>DEV</b>organized code / unstable image.<div class="statusbar">loaded</div></div>
    </div>

    <div class="win95" style="left:12%; top:55%; z-index:18;">
      <div class="titlebar red"><span>Scan Data</span><div class="win-btn">X</div></div>
      <div class="body"><b>DATA</b>query / structure / signal.<div class="statusbar">scanning...</div></div>
    </div>

    <div class="win95" style="left:65%; top:25%; z-index:12;">
      <div class="titlebar"><span>Identity.sys</span><div class="win-btn">X</div></div>
      <div class="body"><b>YAWO</b>corpo como arquivo online.<div class="statusbar">active</div></div>
    </div>

    <button class="star-btn" style="right:5%; bottom:8%;" data-go="page2">PAGE 2</button>
  </section>

  <section id="page2" class="screen">
    <h1 class="page-label">COLLAGE</h1>
    <div class="page-sub">hover to move / technology also feels</div>

    <div class="figure" style="left:10%; top:25%;" data-home-x="10" data-home-y="25">
      <img src="https://i.ibb.co/NdmM3zXr/Mulher-e-instala-o-escult-rica-em-cena-calma-removebg-preview.png">
    </div>
    <div class="figure" style="left:42%; top:30%;" data-home-x="42" data-home-y="30">
      <img src="https://i.ibb.co/fYrnFvJF/Ecossistema-tecnol-gico-e-org-nico-em-galeria.png">
    </div>
    <div class="figure" style="left:72%; top:22%;" data-home-x="72" data-home-y="22">
      <img src="https://i.ibb.co/wFFfKCkb/Gemini-Generated-Image-yl3meoyl3meoyl3m.png">
    </div>

    <button class="star-btn" style="left:5%; bottom:8%;" data-go="page1">BACK</button>
    <button class="star-btn" style="right:5%; bottom:8%;" data-go="page3">PAGE 3</button>
  </section>

  <section id="page3" class="screen">
    <h1 class="page-label">DOSSIER</h1>
    <div class="page3-wrap">
      <div class="page3-grid">
        <div class="card">
          <h2>Essência</h2>
          <p>Artista e diretora criativa explorando o corpo negro como tecnologia viva e o cabelo como linguagem.</p>
          <div class="statusbar">presence / archive</div>
        </div>
        <div class="card">
          <h2>Imagens</h2>
          <div class="gallery-item" style="--rot:-2deg;"><img src="https://i.ibb.co/bj92kr1Y/artifact.jpg"></div>
          <div class="gallery-item" style="--rot:2deg;"><img src="https://i.ibb.co/LLH2ZtM/Ebervdpiccas-Janice-Mascarenhas-preselection-5.jpg"></div>
        </div>
      </div>
    </div>
    <button class="star-btn" style="left:5%; bottom:8%;" data-go="page1">HOME</button>
  </section>

  <script>
    // Navegação (Muda a classe 'active' entre as sections)
    const screens = document.querySelectorAll('.screen');
    document.querySelectorAll('[data-go]').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.go;
        screens.forEach(s => s.classList.toggle('active', s.id === target));
      });
    });

    // Lógica da Colagem Móvel
    const mouse = { x: 0, y: 0 };
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

    const figs = document.querySelectorAll('.figure');
    function animate() {
      figs.forEach((el, idx) => {
        const homeX = (parseFloat(el.dataset.homeX) / 100) * window.innerWidth;
        const homeY = (parseFloat(el.dataset.homeY) / 100) * window.innerHeight;
        const isHover = el.matches(':hover');

        let targetX = isHover ? mouse.x - (el.offsetWidth/2) : homeX + Math.sin(Date.now()*0.001 + idx)*12;
        let targetY = isHover ? mouse.y - (el.offsetHeight/2) : homeY + Math.cos(Date.now()*0.001 + idx)*12;

        let currX = parseFloat(el.style.left) || homeX;
        let currY = parseFloat(el.style.top) || homeY;

        el.style.left = (currX + (targetX - currX) * 0.1) + 'px';
        el.style.top = (currY + (targetY - currY) * 0.1) + 'px';
      });
      requestAnimationFrame(animate);
    }
    animate();
  </script>
</body>
</html>
