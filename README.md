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

    /* Efeito de Scanline */
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

    /* Títulos Fixos */
    .page-label{
      position:absolute;
      left:24px;
      top:18px;
      font-size: clamp(32px, 5vw, 54px);
      font-family:"Arial Black", Arial, sans-serif;
      z-index:100;
      margin: 0;
    }

    .page-sub{
      position:absolute;
      left:24px;
      top: clamp(70px, 10vh, 86px);
      font-size: 11px;
      font-family:"Courier New", monospace;
      z-index:100;
      background:rgba(255,255,255,0.7);
      padding:4px 8px;
      border:1px solid #ddd;
      max-width: 80%;
    }

    /* Janelas Win95 - Agora mais "inteligentes" */
    .win95{
      position:absolute;
      width: 240px;
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
      width:16px;
      height:14px;
      background:var(--mid);
      border:1px solid #000;
      font-size:9px;
      display:flex;
      align-items:center;
      justify-content:center;
      color:#000;
    }

    .win95 .body{ padding:10px; font-size:12px; line-height:1.2; }
    .win95 .body b{ display:block; font-size:20px; font-family:"Arial Black"; text-transform:uppercase; margin-bottom: 4px; }

    .statusbar{
      margin-top:8px;
      border:1px solid var(--gray);
      background:#eee;
      padding:2px 4px;
      font-size:10px;
      font-family:monospace;
    }

    /* Botão Estrela */
    .star-btn{
      position:absolute;
      width: clamp(100px, 15vw, 140px);
      height: clamp(100px, 15vw, 140px);
      background:#fff200;
      clip-path:polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
      border:none;
      cursor:pointer;
      color:var(--red);
      font-weight:900;
      font-family:"Arial Black";
      z-index:110;
      transition: transform 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font-size: 14px;
    }
    .star-btn:hover{ transform: scale(1.1) rotate(-5deg); }

    /* Estilos da Página 2 e 3 */
    .figure{ position:absolute; width:20vw; min-width: 150px; z-index:5; cursor:pointer; }
    .figure img{ width:100%; mix-blend-mode:multiply; }
    
    .page3-wrap{ position:absolute; inset:0; padding: 150px 24px 80px; overflow-y:auto; z-index: 5; }
    .page3-grid{ display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:20px; }
    .card{ background:var(--paper); border:2px solid #000; padding:20px; box-shadow: var(--shadow); }

    /* Ajustes para Mobile - Onde tudo costuma quebrar */
    @media (max-width: 768px) {
      .screen { overflow-y: auto; }
      .win95 { position: relative !important; left: auto !important; top: auto !important; margin: 100px auto 20px !important; width: 90%; }
      #page1 { padding-top: 120px; }
      .page-label { font-size: 28px; }
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

    <div class="win95" style="left:35%; top:18%;">
      <div class="titlebar"><span>Message.exe</span><div class="win-btn">X</div></div>
      <div class="body"><b>DEV</b>visual logic / unstable image<div class="statusbar">loaded successfully</div></div>
    </div>

    <div class="win95" style="left:12%; top:55%;">
      <div class="titlebar red"><span>Scan Data</span><div class="win-btn">X</div></div>
      <div class="body"><b>DATA</b>query / structure / signal<div class="statusbar">scanning patterns...</div></div>
    </div>

    <div class="win95" style="left:65%; top:25%;">
      <div class="titlebar"><span>Identity.sys</span><div class="win-btn">X</div></div>
      <div class="body"><b>YAWO</b>corpo como arquivo<div class="statusbar">archive active</div></div>
    </div>

    <div class="win95" style="left:45%; top:60%;">
      <div class="titlebar red"><span>Profile.dat</span><div class="win-btn">X</div></div>
      <div class="body"><b>ARTISTA</b>hair as language / body as interface<div class="statusbar">presence active</div></div>
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
          <p>Artista e diretora criativa brasileira que trabalha com cabelo como linguagem principal, explorando o corpo como interface entre matéria e tecnologia.</p>
        </div>
        <div class="card">
          <h2>Conceitos</h2>
          <div class="statusbar">matter remembers</div>
          <div class="statusbar">technology also feels</div>
        </div>
      </div>
    </div>
    <button class="star-btn" style="left:5%; bottom:8%;" data-go="page1">HOME</button>
  </section>

  <script>
    // Navegação simples
    const screens = document.querySelectorAll('.screen');
    document.querySelectorAll('[data-go]').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.go;
        screens.forEach(s => s.classList.toggle('active', s.id === target));
      });
    });

    // Interatividade da Página 2
    const mouse = { x: window.innerWidth/2, y: window.innerHeight/2 };
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

    const figures = document.querySelectorAll('.figure');
    function animate() {
      figures.forEach((el, idx) => {
        const homeX = (parseFloat(el.dataset.homeX) / 100) * window.innerWidth;
        const homeY = (parseFloat(el.dataset.homeY) / 100) * window.innerHeight;
        
        const isHover = el.matches(':hover');
        // Suavização do movimento (lerp)
        let targetX = isHover ? mouse.x - (el.offsetWidth/2) : homeX + Math.sin(Date.now()*0.001 + idx)*15;
        let targetY = isHover ? mouse.y - (el.offsetHeight/2) : homeY + Math.cos(Date.now()*0.001 + idx)*15;

        let currX = parseFloat(el.style.left) || homeX;
        let currY = parseFloat(el.style.top) || homeY;

        el.style.left = (currX + (targetX - currX) * 0.08) + 'px';
        el.style.top = (currY + (targetY - currY) * 0.08) + 'px';
      });
      requestAnimationFrame(animate);
    }
    animate();
  </script>
</body>
</html>
