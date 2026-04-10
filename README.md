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
      --dark:#4b4b47;
      --black:#000000;
      --red:#d81919;
      --shadow:4px 4px 0 rgba(0,0,0,.14);
    }

    *{box-sizing:border-box}

    html,body{
      margin:0;
      height:100%;
      width:100%;
      overflow:hidden;
      background:var(--bg);
      font-family:Tahoma, "MS Sans Serif", Arial, sans-serif;
    }

    /* Scanlines - Textura de monitor antigo */
    body::before{
      content:"";
      position:fixed;
      inset:0;
      background: repeating-linear-gradient(0deg, rgba(0,0,0,.03) 0 1px, transparent 1px 4px);
      pointer-events:none;
      z-index:999;
    }

    .screen{
      position:relative;
      width:100vw;
      height:100vh;
      display:none;
      overflow: hidden;
      background: linear-gradient(180deg, rgba(255,255,255,.8), rgba(244,244,241,.95));
    }

    .screen.active{display:block}

    /* Cabeçalhos Fixos */
    .page-label{
      position:absolute;
      left:3vw;
      top:2vh;
      font-size: clamp(32px, 6vw, 54px);
      font-family:"Arial Black", Arial, sans-serif;
      z-index:100;
      margin: 0;
    }

    .page-sub{
      position:absolute;
      left:3vw;
      top: clamp(75px, 12vh, 90px);
      font-size: clamp(10px, 1.5vw, 12px);
      font-family:"Courier New", monospace;
      z-index:100;
      background:rgba(255,255,255,0.7);
      padding:4px 8px;
      border:1px solid #ddd;
    }

    /* Janelas Win95 - Absolute para espalhar, mas com % */
    .win95{
      position:absolute;
      width: clamp(200px, 22vw, 280px);
      background:var(--mid);
      border-top:2px solid var(--white);
      border-left:2px solid var(--white);
      border-right:2px solid var(--black);
      border-bottom:2px solid var(--black);
      box-shadow:var(--shadow);
      z-index:10;
    }

    .win95 .titlebar{
      background:linear-gradient(90deg, #000, #4a4a4a);
      color:#fff;
      padding:3px 8px;
      font-size:11px;
      font-weight:bold;
      display:flex;
      justify-content:space-between;
      align-items: center;
    }

    .win95 .titlebar.red{ background:linear-gradient(90deg, #7a0000, var(--red)); }

    .win-btn{
      width:16px; height:14px; background:var(--mid); border:1px solid #000;
      font-size:9px; display:flex; align-items:center; justify-content:center; color:#000;
    }

    .win95 .body{ padding:10px; font-size:12px; line-height:1.2; }
    .win95 .body b{ display:block; font-size:18px; font-family:"Arial Black"; text-transform:uppercase; margin-bottom: 4px; }

    .statusbar{
      margin-top:8px; border:1px solid var(--gray); background:#eee;
      padding:2px 4px; font-size:10px; font-family:monospace;
    }

    /* Botão Estrela */
    .star-btn{
      position:absolute;
      width: clamp(100px, 15vw, 140px);
      height: clamp(100px, 15vw, 140px);
      background:#fff200;
      clip-path:polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
      border:none; cursor:pointer;
      color:var(--red); font-weight:900; font-family:"Arial Black";
      z-index:110; transition: transform 0.2s;
      display: flex; align-items: center; justify-content: center;
      text-align: center; font-size: 14px;
    }
    .star-btn:hover{ transform: scale(1.1) rotate(-5deg); }

    /* Figuras Página 2 */
    .figure{ position:absolute; width:20vw; min-width: 150px; z-index:5; cursor:pointer; }
    .figure img{ width:100%; mix-blend-mode:multiply; }

    /* Página 3 Grid */
    .page3-wrap{ position:absolute; inset:0; padding: 150px 5% 80px; overflow-y:auto; z-index: 5; }
    .page3-grid{ display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:20px; }
    .card{ background:var(--paper); border:2px solid #000; padding:20px; }

    /* REGRAS DE FLEXIBILIDADE (O "SEGURO" PARA CELULAR) */
    @media (max-width: 768px) {
      .screen { overflow-y: auto; }
      .win95 { 
        position: relative !important; 
        left: auto !important; top: auto !important; 
        margin: 110px auto 20px !important; 
        width: 90% !important; 
      }
      .page-label { position: fixed; width: 100%; background: var(--bg); padding-bottom: 10px; }
      .star-btn { position: fixed; bottom: 20px; right: 20px; width: 90px; height: 90px; font-size: 12px; }
    }
  </style>
</head>
<body>

  <section id="page1" class="screen active">
    <h1 class="page-label">FADAISI.EXE</h1>
    <div class="page-sub">BODY AS TECHNOLOGY | REBUILDING NARRATIVES | HAIR A SYSTEM</div>

    <div class="win95" style="left:5%; top:22%;">
      <div class="titlebar red"><span>Virus Alert</span><div class="win-btn">X</div></div>
      <div class="body"><b>FADAISI</b>!body is the system!<div class="statusbar">critical presence</div></div>
    </div>

    <div class="win95" style="left:38%; top:18%;">
      <div class="titlebar"><span>Message.exe</span><div class="win-btn">X</div></div>
      <div class="body"><b>DEV</b>visual logic / unstable image<div class="statusbar">loaded</div></div>
    </div>

    <div class="win95" style="left:12%; top:58%;">
      <div class="titlebar red"><span>Scan Data</span><div class="win-btn">X</div></div>
      <div class="body"><b>DATA</b>query / structure / signal<div class="statusbar">scanning...</div></div>
    </div>

    <div class="win95" style="left:68%; top:25%;">
      <div class="titlebar"><span>Identity.sys</span><div class="win-btn">X</div></div>
      <div class="body"><b>YAWO</b>corpo como arquivo<div class="statusbar">active</div></div>
    </div>

    <div class="win95" style="left:48%; top:62%;">
      <div class="titlebar red"><span>Profile.dat</span><div class="win-btn">X</div></div>
      <div class="body"><b>ARTISTA</b>hair as language<div class="statusbar">presence active</div></div>
    </div>

    <button class="star-btn" style="right:5%; bottom:8%;" data-go="page2">PAGE 2</button>
  </section>

  <section id="page2" class="screen">
    <h1 class="page-label">COLLAGE</h1>
    <div class="page-sub">hover to move / body as system</div>

    <div class="figure" style="left:10%; top:25%;" data-home-x="10" data-home-y="25">
      <img src="https://i.ibb.co/NdmM3zXr/Mulher-e-instala-o-escult-rica-em-cena-calma-removebg-preview.png">
    </div>
    <div class="figure" style="left:40%; top:35%;" data-home-x="40" data-home-y="35">
      <img src="https://i.ibb.co/fYrnFvJF/Ecossistema-tecnol-gico-e-org-nico-em-galeria.png">
    </div>
    <div class="figure" style="left:70%; top:20%;" data-home-x="70" data-home-y="20">
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
          <p>Artista e diretora criativa brasileira explorando o corpo como interface.</p>
        </div>
        <div class="card">
          <h2>Manifesto</h2>
          <div class="statusbar">matter remembers</div>
          <div class="statusbar">technology also feels</div>
        </div>
      </div>
    </div>
    <button class="star-btn" style="left:5%; bottom:8%;" data-go="page1">HOME</button>
  </section>

  <script>
    // Navegação
    const screens = document.querySelectorAll('.screen');
    document.querySelectorAll('[data-go]').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.go;
        screens.forEach(s => s.classList.toggle('active', s.id === target));
      });
    });

    // Movimento Página 2
    const mouse = { x: window.innerWidth/2, y: window.innerHeight/2 };
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

    const figs = document.querySelectorAll('.figure');
    function animate() {
      figs.forEach((el, idx) => {
        const homeX = (parseFloat(el.dataset.homeX) / 100) * window.innerWidth;
        const homeY = (parseFloat(el.dataset.homeY) / 100) * window.innerHeight;
        
        const isHover = el.matches(':hover');
        let targetX = isHover ? mouse.x - (el.offsetWidth/2) : homeX + Math.sin(Date.now()*0.001 + idx)*15;
        let targetY = isHover ? mouse.y - (el.offsetHeight/2) : homeY + Math.cos(Date.now()*0.001 + idx)*15;

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
