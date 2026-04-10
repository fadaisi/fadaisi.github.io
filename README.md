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
      --light:#f8f8f8;
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
      overflow:hidden;
      background:var(--bg);
      font-family:Tahoma, "MS Sans Serif", Arial, sans-serif;
      color:#111;
    }

    /* Efeito de Scanline e Textura */
    body::before{
      content:"";
      position:fixed;
      inset:0;
      background:
        repeating-linear-gradient(0deg, rgba(0,0,0,.04) 0 1px, transparent 1px 4px),
        radial-gradient(circle at 20% 10%, rgba(0,0,0,.03), transparent 25%),
        radial-gradient(circle at 85% 75%, rgba(255,0,0,.035), transparent 22%);
      pointer-events:none;
      mix-blend-mode:multiply;
      opacity:.8;
      z-index:999;
    }

    .screen{
      position:relative;
      width:100vw;
      height:100vh;
      overflow:hidden;
      display:none;
      background:
        linear-gradient(180deg, rgba(255,255,255,.75), rgba(244,244,241,.94)),
        repeating-linear-gradient(90deg, rgba(0,0,0,.03) 0 1px, transparent 1px 42px),
        repeating-linear-gradient(0deg, rgba(0,0,0,.025) 0 1px, transparent 1px 42px);
    }

    .screen.active{display:block}

    /* Cabeçalhos Fixos */
    .page-label{
      position:absolute;
      left:24px;
      top:18px;
      font-size: clamp(38px, 6vw, 54px);
      line-height:1;
      letter-spacing:.04em;
      color:var(--black);
      z-index:10;
      font-family:"Arial Black", Arial, sans-serif;
    }

    .page-sub{
      position:absolute;
      left:24px;
      top: clamp(75px, 12vh, 86px);
      font-size: 12px;
      font-family:"Courier New", monospace;
      z-index:10;
      max-width: 760px;
      line-height:1.4;
      color:#111;
      background:rgba(255,255,255,.72);
      padding:7px 9px;
      border:1px solid rgba(0,0,0,.25);
    }

    /* Container de Janelas Organizado mas Espalhado */
    .windows-wrapper {
      position: absolute;
      inset: 0;
      padding: 160px 40px 120px 40px;
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      justify-content: center;
      align-items: flex-start;
      overflow-y: auto;
      z-index: 3;
    }

    .win95{
      width: 250px;
      background:var(--mid);
      border-top:2px solid var(--white);
      border-left:2px solid var(--white);
      border-right:2px solid var(--black);
      border-bottom:2px solid var(--black);
      box-shadow:1px 1px 0 var(--dark), var(--shadow);
      flex-shrink: 0;
    }

    /* Variações de ângulo para parecer bagunçado propositalmente */
    .win95:nth-child(odd) { transform: rotate(-1.5deg); margin-top: 20px; }
    .win95:nth-child(even) { transform: rotate(1deg); }
    .win95:nth-child(3n) { transform: rotate(2deg); margin-top: -10px; }

    .win95 .titlebar{
      background:linear-gradient(90deg, #000000, #4a4a4a);
      color:#fff;
      height:24px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:0 4px 0 8px;
      font-size:12px;
      font-weight:bold;
    }

    .win95 .titlebar.red{ background:linear-gradient(90deg, #7a0000, var(--red)); }

    .win-btn{
      width:18px;
      height:16px;
      background:var(--mid);
      border-top:2px solid var(--white);
      border-left:2px solid var(--white);
      border-right:2px solid var(--black);
      border-bottom:2px solid var(--black);
      color:#000;
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:11px;
    }

    .win95 .body{
      padding:10px;
      font-size:12px;
      line-height:1.35;
      background:var(--mid);
      min-height:92px;
    }

    .win95 .body b{
      display:block;
      font-size:22px;
      line-height:1.1;
      margin-bottom:6px;
      font-family:"Arial Black", Arial, sans-serif;
      text-transform:uppercase;
    }

    .statusbar{
      margin-top:8px;
      border-top:2px solid var(--gray);
      border-left:2px solid var(--gray);
      border-right:2px solid var(--white);
      border-bottom:2px solid var(--white);
      background:#ecece8;
      padding:4px 6px;
      font-size:10px;
      font-family:"Courier New", monospace;
    }

    /* Botão Estrela */
    .star-btn{
      position:absolute;
      width:150px;
      height:150px;
      background:#fff200;
      clip-path:polygon(50% 0%,58% 17%,75% 4%,71% 23%,89% 16%,79% 33%,100% 35%,82% 46%,97% 60%,76% 61%,84% 80%,66% 70%,65% 100%,50% 82%,35% 100%,34% 70%,16% 80%,24% 61%,3% 60%,18% 46%,0% 35%,21% 33%,11% 16%,29% 23%,25% 4%,42% 17%);
      border:2px solid #000;
      cursor:pointer;
      display:flex;
      align-items:center;
      justify-content:center;
      text-align:center;
      color:var(--red);
      font-weight:900;
      font-size:24px;
      text-transform:uppercase;
      padding:20px;
      transition:transform .18s ease;
      z-index:20;
      font-family:"Arial Black", Arial, sans-serif;
    }

    .star-btn:hover{ transform:scale(1.1) rotate(-5deg); }

    .small-star{ width:120px; height:120px; font-size:16px; }

    .footer-note{
      position:absolute;
      left:24px;
      bottom:20px;
      font-family:"Courier New", monospace;
      font-size:11px;
      z-index:9;
      background:var(--paper);
      border:1px solid #000;
      padding:6px 10px;
    }

    /* Pagina 2 - Figuras */
    .figure{
      position:absolute;
      width:22vw;
      max-width:300px;
      transition:filter .15s ease;
      z-index:5;
      cursor:move;
    }
    .figure img{ width:100%; mix-blend-mode:multiply; }

    /* Pagina 3 - Grid */
    .page3-wrap{ position:absolute; inset:0; padding:130px 24px 100px; overflow-y:auto; }
    .page3-grid{ display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:20px; }
    .card { background: var(--paper); border: 2px solid #000; padding: 15px; box-shadow: var(--shadow); }

    @media (max-width: 768px){
      .windows-wrapper { padding: 180px 15px 120px; gap: 15px; }
      .win95 { width: 100%; transform: none !important; margin: 0 !important; }
      .page-label { font-size: 32px; }
    }
  </style>
</head>
<body>

  <section id="page1" class="screen active">
    <div class="page-label">FADAISI.EXE</div>
    <div class="page-sub">BODY AS TECHNOLOGY | REBUILDING NARRATIVES | HAIR A SYSTEM</div>

    <div class="windows-wrapper">
      <div class="win95">
        <div class="titlebar red"><span>Virus Alert</span><div class="win-btn">X</div></div>
        <div class="body"><b>FADAISI</b>!body is the system!<div class="statusbar">critical presence detected</div></div>
      </div>

      <div class="win95">
        <div class="titlebar"><span>Message.exe</span><div class="win-btn">X</div></div>
        <div class="body"><b>DEV</b>visual logic / unstable image<div class="statusbar">window loaded</div></div>
      </div>

      <div class="win95">
        <div class="titlebar red"><span>Scan Data</span><div class="win-btn">X</div></div>
        <div class="body"><b>DATA</b>query / structure / signal<div class="statusbar">system reading</div></div>
      </div>

      <div class="win95">
        <div class="titlebar"><span>Identity.sys</span><div class="win-btn">X</div></div>
        <div class="body"><b>YAWO</b>corpo como arquivo<div class="statusbar">archive active</div></div>
      </div>

      <div class="win95">
        <div class="titlebar red"><span>Profile.dat</span><div class="win-btn">X</div></div>
        <div class="body"><b>ARTISTA</b>hair as language / body interface<div class="statusbar">presence active</div></div>
      </div>

      <div class="win95">
        <div class="titlebar"><span>Logbook.txt</span><div class="win-btn">X</div></div>
        <div class="body"><b>RESEARCHER</b>memory / techno-organic continuity<div class="statusbar">notes updated</div></div>
      </div>
    </div>

    <button class="star-btn" style="right:40px; bottom:40px" data-go="page2">PAGE 2</button>
    <div class="footer-note">click the star to enter page 2</div>
  </section>

  <section id="page2" class="screen">
    <div class="page-label">PAGE 2 / COLLAGE</div>
    <div class="page-sub">hover cutouts to move / body as interface</div>

    <div class="figure" style="left:10vw; top:30vh;" data-home-x="10" data-home-y="30">
      <img src="https://i.ibb.co/NdmM3zXr/Mulher-e-instala-o-escult-rica-em-cena-calma-removebg-preview.png">
    </div>
    <div class="figure" style="left:40vw; top:25vh;" data-home-x="40" data-home-y="25">
      <img src="https://i.ibb.co/fYrnFvJF/Ecossistema-tecnol-gico-e-org-nico-em-galeria.png">
    </div>
    <div class="figure" style="left:70vw; top:35vh;" data-home-x="70" data-home-y="35">
      <img src="https://i.ibb.co/wFFfKCkb/Gemini-Generated-Image-yl3meoyl3meoyl3m.png">
    </div>

    <button class="star-btn small-star" style="left:24px; bottom:24px" data-go="page1">BACK</button>
    <button class="star-btn small-star" style="right:24px; bottom:24px" data-go="page3">PAGE 3</button>
  </section>

  <section id="page3" class="screen">
    <div class="page-label">PAGE 3 / DOSSIER</div>
    <div class="page3-wrap">
      <div class="page3-grid">
        <div class="card">
          <h2>Essência</h2>
          <p>Artista e diretora criativa brasileira que trabalha com cabelo como linguagem principal, explorando o corpo como interface entre matéria e tecnologia.</p>
        </div>
        <div class="card">
          <h3>Sistemas</h3>
          <div class="statusbar">matter remembers</div>
          <div class="statusbar">technology also feels</div>
        </div>
      </div>
    </div>
    <button class="star-btn small-star" style="left:24px; bottom:24px" data-go="page2">BACK</button>
  </section>

  <script>
    // Navigation
    const screens = [...document.querySelectorAll('.screen')];
    document.querySelectorAll('[data-go]').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.go;
        screens.forEach(s => s.classList.toggle('active', s.id === target));
      });
    });

    // Page 2 Interactivity
    const mouse = { x: 0, y: 0 };
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

    const figures = [...document.querySelectorAll('.figure')].map(el => {
      el.addEventListener('mouseenter', () => el.classList.add('hovered'));
      el.addEventListener('mouseleave', () => el.classList.remove('hovered'));
      return { el, x: 0, y: 0 };
    });

    function animate() {
      figures.forEach((f, idx) => {
        const hovered = f.el.classList.contains('hovered');
        const homeX = (parseFloat(f.el.dataset.homeX) / 100) * window.innerWidth;
        const homeY = (parseFloat(f.el.dataset.homeY) / 100) * window.innerHeight;
        
        let tx = hovered ? mouse.x - 100 : homeX + Math.sin(Date.now() * 0.001 + idx) * 10;
        let ty = hovered ? mouse.y - 100 : homeY + Math.cos(Date.now() * 0.001 + idx) * 10;

        f.x += (tx - f.x) * 0.1;
        f.y += (ty - f.y) * 0.1;

        f.el.style.left = f.x + 'px';
        f.el.style.top = f.y + 'px';
      });
      requestAnimationFrame(animate);
    }
    animate();
  </script>
</body>
</html>
