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

    /* Scanline effect */
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

    /* Responsividade dos Títulos */
    .page-label{
      position:absolute;
      left:24px;
      top:18px;
      font-size: clamp(32px, 8vw, 54px);
      line-height:1;
      letter-spacing:.04em;
      color:var(--black);
      z-index:10;
      font-family:"Arial Black", Arial, sans-serif;
    }

    .page-sub{
      position:absolute;
      left:24px;
      top: clamp(60px, 15vh, 86px);
      font-size: 11px;
      font-family:"Courier New", monospace;
      z-index:10;
      max-width: 90%;
      line-height:1.4;
      color:#111;
      background:rgba(255,255,255,.72);
      padding:7px 9px;
      border:1px solid rgba(0,0,0,.25);
    }

    /* Janelas Win95 */
    .win95 {
      position:absolute;
      width: clamp(200px, 25vw, 280px);
      background:var(--mid);
      border-top:2px solid var(--white);
      border-left:2px solid var(--white);
      border-right:2px solid var(--black);
      border-bottom:2px solid var(--black);
      box-shadow:1px 1px 0 var(--dark), var(--shadow);
      z-index:4;
    }

    .win95 .titlebar{
      background:linear-gradient(90deg, #000000, #4a4a4a);
      color:#fff;
      height:24px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:0 4px 0 8px;
      font-size:11px;
      font-weight:bold;
    }

    .win95 .titlebar.red{ background:linear-gradient(90deg, #7a0000, var(--red)); }

    .win-btn{
      width:18px;
      height:16px;
      background:var(--mid);
      border: 1px solid var(--black);
      box-shadow: inset 1px 1px var(--white);
      color:#000;
      display:flex;
      align-items:center;
      justify-content:center;
      font-size:10px;
      cursor: pointer;
    }

    .win95 .body{
      padding:10px;
      font-size:12px;
      line-height:1.3;
      background:var(--mid);
    }

    .win95 .body b{
      display:block;
      font-size: clamp(18px, 4vw, 24px);
      margin-bottom:4px;
      font-family:"Arial Black", Arial, sans-serif;
    }

    .statusbar{
      margin-top:8px;
      border: 1px solid var(--gray);
      background:#ecece8;
      padding:2px 4px;
      font-size:10px;
      font-family:"Courier New", monospace;
    }

    /* Textos Flutuantes */
    .noise-text{
      position:absolute;
      font-size: clamp(14px, 3vw, 24px);
      font-family:"Courier New", monospace;
      font-weight:700;
      opacity:.4;
      text-transform:uppercase;
      pointer-events:none;
      z-index:2;
    }
    .noise-text.red { color: var(--red); }

    /* Estrela */
    .star-btn{
      position:absolute;
      width: clamp(100px, 20vw, 150px);
      height: clamp(100px, 20vw, 150px);
      background:#fff200;
      clip-path:polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
      border:none;
      cursor:pointer;
      display:flex;
      align-items:center;
      justify-content:center;
      text-align:center;
      color:var(--red);
      font-weight:900;
      font-size: clamp(14px, 3vw, 20px);
      padding:20px;
      transition:transform .2s;
      z-index:20;
      font-family:"Arial Black", Arial, sans-serif;
    }

    .star-btn:hover{ transform:scale(1.1) rotate(-5deg); }

    .footer-note{
      position:absolute;
      right:24px;
      bottom:20px;
      font-family:"Courier New", monospace;
      font-size:10px;
      background:var(--paper);
      border:1px solid #000;
      padding:4px 8px;
      z-index:10;
    }

    /* Page 3 Styles */
    .page3-wrap{
      position:absolute;
      inset:0;
      padding: 120px 20px 80px 20px;
      overflow-y:auto;
    }

    .page3-grid{
      display:grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap:20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .card { background: var(--paper); border: 2px solid #000; padding: 20px; box-shadow: var(--shadow); }

    /* Media Queries Específicas */
    @media (max-width: 768px) {
      .win95 { position: relative !important; left: auto !important; top: auto !important; margin: 10px auto; width: 90%; }
      #page1 { overflow-y: auto; padding-top: 140px; }
      .noise-text { display: none; } /* Remove noise no mobile para limpar o visual */
    }
  </style>
</head>
<body>

  <section id="page1" class="screen active">
    <div class="page-label">FADAISI.EXE</div>
    <div class="page-sub">BODY AS TECHNOLOGY | REBUILDING NARRATIVES | HAIR A SYSTEM</div>

    <div class="win95" style="left:5%; top:20vh;">
      <div class="titlebar red"><span>Virus Alert</span><div class="win-btn">X</div></div>
      <div class="body"><b>FADAISI</b>!body is the system!<div class="statusbar">critical presence</div></div>
    </div>

    <div class="win95" style="right:5%; top:25vh;">
      <div class="titlebar"><span>Message.exe</span><div class="win-btn">X</div></div>
      <div class="body"><b>DEV</b>visual logic / unstable image<div class="statusbar">loaded</div></div>
    </div>

    <div class="win95" style="left:15%; top:50vh;">
      <div class="titlebar red"><span>Scan Data</span><div class="win-btn">X</div></div>
      <div class="body"><b>DATA</b>query / structure / signal<div class="statusbar">reading patterns</div></div>
    </div>

    <div class="win95" style="right:10%; top:55vh;">
      <div class="titlebar"><span>Identity.sys</span><div class="win-btn">X</div></div>
      <div class="body"><b>YAWO</b>corpo como arquivo<div class="statusbar">active</div></div>
    </div>

    <div class="noise-text red" style="left:10%; bottom:10%;">FADAISI</div>
    <div class="noise-text" style="right:10%; top:15%;">SYSTEM</div>

    <button class="star-btn" style="left:24px; bottom:24px" data-go="page2">ENTER</button>
    <div class="footer-note">v.2026.arch</div>
  </section>

  <section id="page2" class="screen">
    <div class="page-label">COLLAGE</div>
    <div class="figure" style="left:10vw; top:30vh;" data-home-x="10" data-home-y="30">
        <img src="https://i.ibb.co/NdmM3zXr/Mulher-e-instala-o-escult-rica-em-cena-calma-removebg-preview.png" style="width:200px">
    </div>
    <button class="star-btn" style="right:24px; bottom:24px" data-go="page3">NEXT</button>
    <button class="star-btn" style="left:24px; bottom:24px" data-go="page1">BACK</button>
  </section>

  <section id="page3" class="screen">
    <div class="page-label">DOSSIER</div>
    <div class="page3-wrap">
        <div class="page3-grid">
            <div class="card">
                <h2>Essência</h2>
                <p>Artista e diretora criativa brasileira que trabalha com cabelo como linguagem...</p>
            </div>
            <div class="card">
                <h3>Quotes</h3>
                <div class="statusbar">"The body is the system"</div>
            </div>
        </div>
    </div>
    <button class="star-btn" style="left:24px; bottom:24px" data-go="page1">HOME</button>
  </section>

  <script>
    // Navegação simples entre telas
    const screens = document.querySelectorAll('.screen');
    document.querySelectorAll('[data-go]').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.go;
        screens.forEach(s => s.classList.toggle('active', s.id === target));
      });
    });

    // Lógica básica de arrastar/seguir para a página 2
    const mouse = { x: 0, y: 0 };
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

    function animate() {
      document.querySelectorAll('.figure').forEach(el => {
        // Aqui você pode manter sua lógica original de movimento
        // Simplificada para o exemplo não quebrar
      });
      requestAnimationFrame(animate);
    }
    animate();
  </script>
</body>
</html>
