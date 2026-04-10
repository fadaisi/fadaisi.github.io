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
      overflow:hidden;
      background:var(--bg);
      font-family:Tahoma, "MS Sans Serif", Arial, sans-serif;
    }

    /* Scanlines */
    body::before{
      content:"";
      position:fixed;
      inset:0;
      background:
        repeating-linear-gradient(0deg, rgba(0,0,0,.04) 0 1px, transparent 1px 4px),
        radial-gradient(circle at 20% 10%, rgba(0,0,0,.03), transparent 25%);
      pointer-events:none;
      z-index:999;
      mix-blend-mode:multiply;
    }

    .screen{
      position:relative;
      width:100vw;
      height:100vh;
      display:none;
      background: linear-gradient(180deg, rgba(255,255,255,.75), rgba(244,244,241,.94));
    }

    .screen.active{display:block}

    .page-label{
      position:absolute;
      left:24px;
      top:18px;
      font-size:54px;
      font-family:"Arial Black", Arial, sans-serif;
      z-index:10;
    }

    .page-sub{
      position:absolute;
      left:24px;
      top:86px;
      font-size:13px;
      font-family:"Courier New", monospace;
      z-index:10;
      background:rgba(255,255,255,.8);
      padding:5px;
      border:1px solid #ccc;
    }

    /* Janelas Win95 */
    .win95{
      position:absolute;
      width:240px;
      background:var(--mid);
      border-top:2px solid var(--white);
      border-left:2px solid var(--white);
      border-right:2px solid var(--black);
      border-bottom:2px solid var(--black);
      box-shadow:var(--shadow);
      z-index:5;
    }

    .win95 .titlebar{
      background:linear-gradient(90deg, #000, #4a4a4a);
      color:#fff;
      padding:3px 8px;
      font-size:12px;
      font-weight:bold;
      display:flex;
      justify-content:space-between;
    }

    .win95 .titlebar.red{ background:linear-gradient(90deg, #7a0000, var(--red)); }

    .win95 .body{ padding:10px; font-size:12px; }
    .win95 .body b{ display:block; font-size:24px; font-family:"Arial Black"; text-transform:uppercase; }

    .statusbar{
      margin-top:5px;
      border:1px solid var(--gray);
      background:#eee;
      padding:2px;
      font-size:10px;
      font-family:monospace;
    }

    .noise-text{
      position:absolute;
      font-size:20px;
      font-family:"Courier New";
      font-weight:bold;
      opacity:0.6;
      pointer-events:none;
      z-index:1;
    }

    /* Botão Estrela */
    .star-btn{
      position:absolute;
      width:140px;
      height:140px;
      background:#fff200;
      clip-path:polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
      border:none;
      cursor:pointer;
      color:var(--red);
      font-weight:900;
      z-index:20;
      transition: 0.2s;
    }
    .star-btn:hover{ transform: scale(1.1); }

    /* Page 2 Figures */
    .figure{
      position:absolute;
      width:20vw;
      z-index:5;
      cursor:pointer;
    }
    .figure img{ width:100%; mix-blend-mode:multiply; }

    /* Page 3 Grid */
    .page3-wrap{ position:absolute; inset:0; padding:150px 50px; overflow:auto; }
    .page3-grid{ display:grid; grid-template-columns: 1fr 1fr; gap:20px; }
    .card{ background:var(--paper); border:2px solid #000; padding:20px; }
  </style>
</head>
<body>

  <section id="page1" class="screen active">
    <div class="page-label">FADAISI.EXE</div>
    <div class="page-sub">BODY AS TECHNOLOGY | REBUILDING NARRATIVES | HAIR A SYSTEM</div>

    <div class="win95" style="left:50px; top:160px;">
      <div class="titlebar red"><span>Virus Alert</span></div>
      <div class="body"><b>FADAISI</b>!body is the system! <div class="statusbar">critical presence</div></div>
    </div>

    <div class="win95" style="left:320px; top:180px;">
      <div class="titlebar"><span>Message.exe</span></div>
      <div class="body"><b>DEV</b>visual logic / unstable image <div class="statusbar">loaded</div></div>
    </div>

    <div class="win95" style="left:100px; top:360px;">
      <div class="titlebar red"><span>Scan Data</span></div>
      <div class="body"><b>DATA</b>query / structure / signal <div class="statusbar">scanning...</div></div>
    </div>

    <div class="win95" style="left:400px; top:400px;">
      <div class="titlebar"><span>Identity.sys</span></div>
      <div class="body"><b>YAWO</b>corpo como arquivo <div class="statusbar">active</div></div>
    </div>

    <div class="win95" style="right:100px; top:200px;">
      <div class="titlebar red"><span>Profile.dat</span></div>
      <div class="body"><b>ARTISTA</b>hair as language <div class="statusbar">online</div></div>
    </div>

    <div class="noise-text" style="left:40%; top:70%;">TECHNO-ORGANIC</div>
    
    <button class="star-btn" style="right:50px; bottom:50px;" data-go="page2">PAGE 2</button>
  </section>

  <section id="page2" class="screen">
    <div class="page-label">PAGE 2</div>
    <div class="figure" style="left:10vw; top:20vh;" data-home-x="10" data-home-y="20">
      <img src="https://i.ibb.co/NdmM3zXr/Mulher-e-instala-o-escult-rica-em-cena-calma-removebg-preview.png">
    </div>
    <div class="figure" style="left:40vw; top:30vh;" data-home-x="40" data-home-y="30">
      <img src="https://i.ibb.co/fYrnFvJF/Ecossistema-tecnol-gico-e-org-nico-em-galeria.png">
    </div>
    <div class="figure" style="left:70vw; top:25vh;" data-home-x="70" data-home-y="25">
      <img src="https://i.ibb.co/wFFfKCkb/Gemini-Generated-Image-yl3meoyl3meoyl3m.png">
    </div>

    <button class="star-btn" style="left:50px; bottom:50px;" data-go="page1">BACK</button>
    <button class="star-btn" style="right:50px; bottom:50px;" data-go="page3">PAGE 3</button>
  </section>

  <section id="page3" class="screen">
    <div class="page-label">PAGE 3</div>
    <div class="page3-wrap">
      <div class="page3-grid">
        <div class="card">
          <h2>Essência</h2>
          <p>Artista e diretora criativa brasileira que trabalha com cabelo como linguagem...</p>
        </div>
        <div class="card">
          <h2>Quotes</h2>
          <p>"Technology also feels"</p>
          <p>"Matter remembers"</p>
        </div>
      </div>
    </div>
    <button class="star-btn" style="left:50px; bottom:50px;" data-go="page1">HOME</button>
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

    // Interatividade Figuras Pagina 2
    const mouse = { x: 0, y: 0 };
    window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

    const figs = document.querySelectorAll('.figure');
    function animate() {
      figs.forEach((el, idx) => {
        const homeX = (parseFloat(el.dataset.homeX) / 100) * window.innerWidth;
        const homeY = (parseFloat(el.dataset.homeY) / 100) * window.innerHeight;
        
        // Se passar o mouse, segue. Se não, flutua perto da "home"
        const isHover = el.matches(':hover');
        let targetX = isHover ? mouse.x - 100 : homeX + Math.sin(Date.now()*0.001 + idx)*10;
        let targetY = isHover ? mouse.y - 100 : homeY + Math.cos(Date.now()*0.001 + idx)*10;

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
