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

    .page-label{
      position:absolute;
      left:24px;
      top:18px;
      font-size:54px;
      line-height:1;
      letter-spacing:.04em;
      color:var(--black);
      z-index:1;
      font-family:"Arial Black", Arial, sans-serif;
    }

    .page-sub{
      position:absolute;
      left:24px;
      top:86px;
      font-size:13px;
      font-family:"Courier New", monospace;
      z-index:1;
      max-width:760px;
      line-height:1.4;
      color:#111;
      background:rgba(255,255,255,.72);
      padding:7px 9px;
      border:1px solid rgba(0,0,0,.25);
    }

    .win95{
      position:absolute;
      width:250px;
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
      font-size:12px;
      font-weight:bold;
      letter-spacing:.02em;
    }

    .win95 .titlebar.red{
      background:linear-gradient(90deg, #7a0000, var(--red));
    }

    .titlebar .controls{
      display:flex;
      gap:2px;
    }

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
      line-height:1;
      font-family:Arial, sans-serif;
    }

    .win95 .body{
      padding:10px;
      font-size:12px;
      line-height:1.35;
      color:#111;
      background:var(--mid);
      min-height:92px;
    }

    .win95 .body b{
      display:block;
      font-size:26px;
      line-height:1;
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
      font-size:11px;
      font-family:"Courier New", monospace;
    }

    .noise-text{
      position:absolute;
      font-size:24px;
      font-family:"Courier New", monospace;
      font-weight:700;
      opacity:.92;
      text-transform:uppercase;
      pointer-events:none;
      z-index:2;
      color:#111;
    }

    .noise-text.red{
      color:var(--red);
    }

    .star-btn{
      position:absolute;
      width:170px;
      height:170px;
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
      font-size:30px;
      line-height:.9;
      text-transform:uppercase;
      padding:24px;
      transition:transform .18s ease;
      z-index:12;
      box-shadow:4px 4px 0 rgba(0,0,0,.18);
      font-family:"Arial Black", Arial, sans-serif;
    }

    .star-btn:hover{
      transform:scale(1.04) rotate(-4deg);
    }

    .small-star{
      width:132px;
      height:132px;
      font-size:22px;
      padding:16px;
    }

    .footer-note{
      position:absolute;
      left:24px;
      bottom:20px;
      font-family:"Courier New", monospace;
      font-size:12px;
      z-index:9;
      background:var(--paper);
      border-top:2px solid var(--white);
      border-left:2px solid var(--white);
      border-right:2px solid var(--black);
      border-bottom:2px solid var(--black);
      padding:8px 10px;
      color:#111;
      box-shadow:var(--shadow);
    }

    .page2-bgimg{
      position:absolute;
      inset:0;
      background:url('https://i.ibb.co/bj92kr1Y/artifact.jpg') center/cover no-repeat;
      opacity:.05;
      mix-blend-mode:multiply;
      filter:grayscale(100%) contrast(1.02);
      pointer-events:none;
    }

    .navline{
      position:absolute;
      right:24px;
      top:18px;
      font-family:"Courier New", monospace;
      font-size:12px;
      z-index:8;
      background:var(--paper);
      border-top:2px solid var(--white);
      border-left:2px solid var(--white);
      border-right:2px solid var(--black);
      border-bottom:2px solid var(--black);
      padding:8px 10px;
      max-width:320px;
      color:#111;
      box-shadow:var(--shadow);
    }

    .figure{
      position:absolute;
      width:22vw;
      max-width:340px;
      min-width:180px;
      user-select:none;
      pointer-events:auto;
      transition:filter .15s ease;
      filter:drop-shadow(4px 4px 0 rgba(0,0,0,.16));
      z-index:5;
      cursor:pointer;
    }

    .figure.hovered{
      filter:drop-shadow(7px 7px 0 rgba(216,25,25,.22));
    }

    .figure img{
      width:100%;
      display:block;
      mix-blend-mode:multiply;
      filter:contrast(1.02) saturate(0.98);
    }

    .page3-wrap{
      position:absolute;
      inset:0;
      padding:130px 24px 120px 24px;
      overflow:auto;
      z-index:3;
    }

    .page3-grid{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:18px;
      align-items:start;
      padding-bottom:60px;
    }

    .card{
      background:var(--paper);
      border-top:2px solid var(--white);
      border-left:2px solid var(--white);
      border-right:2px solid var(--black);
      border-bottom:2px solid var(--black);
      padding:14px;
      box-shadow:var(--shadow);
    }

    .card h2,.card h3{
      margin:0 0 12px 0;
      text-transform:uppercase;
      letter-spacing:.06em;
      font-size:20px;
      font-family:"Arial Black", Arial, sans-serif;
    }

    .card p{
      font-family:"Courier New", monospace;
      font-size:13px;
      line-height:1.45;
      margin:0 0 10px 0;
    }

    .quotes{
      display:grid;
      gap:8px;
      margin-top:14px;
    }

    .quote{
      background:#f7f7f4;
      border-top:2px solid var(--gray);
      border-left:2px solid var(--gray);
      border-right:2px solid var(--white);
      border-bottom:2px solid var(--white);
      padding:10px 12px;
      font-family:"Courier New", monospace;
      text-transform:uppercase;
      font-size:12px;
    }

    .gallery-grid{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:12px;
    }

    .gallery-item{
      background:var(--paper);
      border-top:2px solid var(--white);
      border-left:2px solid var(--white);
      border-right:2px solid var(--black);
      border-bottom:2px solid var(--black);
      padding:8px;
      transform:rotate(var(--rot, 0deg));
      box-shadow:var(--shadow);
    }

    .gallery-item .cap{
      margin:-8px -8px 8px -8px;
      background:linear-gradient(90deg, #000000, #3f3f3f);
      color:#fff;
      padding:5px 8px;
      font-size:11px;
      text-transform:uppercase;
      letter-spacing:.05em;
      font-family:Tahoma, Arial, sans-serif;
      font-weight:bold;
    }

    .gallery-item.red .cap{
      background:linear-gradient(90deg, #7a0000, var(--red));
    }

    .gallery-item img{
      width:100%;
      display:block;
      border:1px solid #000;
      background:#fff;
      filter:grayscale(100%) contrast(1.05);
    }

    @media (max-width: 980px){
      .page-label{font-size:40px}
      .page-sub{top:72px;max-width:88vw}
      .star-btn{width:138px;height:138px;font-size:24px}
      .figure{width:38vw;min-width:140px}
      .page3-grid{grid-template-columns:1fr}
      .gallery-grid{grid-template-columns:1fr}
      .navline{max-width:48vw}
      .win95{width:180px}
    }
  </style>
</head>
<body>

  <section id="page1" class="screen active">
    <div class="page-label">FADAISI.EXE</div>
    <div class="page-sub">
      corpo como tecnologia viva / rebuilding narratives through technology / hair as system / matter remembers
    </div>

    <div class="win95" style="left:24px; top:150px;">
      <div class="titlebar red">
        <span>Virus Alert</span>
        <div class="controls"><div class="win-btn">X</div></div>
      </div>
      <div class="body">
        <b>FADAISI</b>
        the body is not separate from the system.
        <div class="statusbar">critical presence detected</div>
      </div>
    </div>

    <div class="win95" style="left:290px; top:96px;">
      <div class="titlebar">
        <span>Message.exe</span>
        <div class="controls"><div class="win-btn">X</div></div>
      </div>
      <div class="body">
        <b>DEV</b>
        organized code / unstable image / visual logic
        <div class="statusbar">window loaded successfully</div>
      </div>
    </div>

    <div class="win95" style="left:560px; top:165px;">
      <div class="titlebar red">
        <span>Scan Data</span>
        <div class="controls"><div class="win-btn">X</div></div>
      </div>
      <div class="body">
        <b>DATA</b>
        query / structure / signal / model / presence
        <div class="statusbar">system reading patterns</div>
      </div>
    </div>

    <div class="win95" style="left:180px; top:355px;">
      <div class="titlebar">
        <span>Identity.sys</span>
        <div class="controls"><div class="win-btn">X</div></div>
      </div>
      <div class="body">
        <b>YAWO</b>
        ancestral frequency online / corpo como arquivo
        <div class="statusbar">archive active</div>
      </div>
    </div>

    <div class="win95" style="left:500px; top:410px;">
      <div class="titlebar red">
        <span>Profile.dat</span>
        <div class="controls"><div class="win-btn">X</div></div>
      </div>
      <div class="body">
        <b>ARTISTA</b>
        hair as language / body as interface
        <div class="statusbar">presence not representation</div>
      </div>
    </div>

    <div class="win95" style="left:770px; top:315px;">
      <div class="titlebar">
        <span>Logbook.txt</span>
        <div class="controls"><div class="win-btn">X</div></div>
      </div>
      <div class="body">
        <b>RESEARCHER</b>
        memory / system / gesture / techno-organic continuity
        <div class="statusbar">notes updated</div>
      </div>
    </div>

    <div class="noise-text red" style="left:48px;top:78vh;">FADAISI</div>
    <div class="noise-text" style="left:210px;top:72vh;">DATA</div>
    <div class="noise-text red" style="left:350px;top:83vh;">DEV</div>
    <div class="noise-text" style="left:590px;top:76vh;">ARTISTA</div>
    <div class="noise-text red" style="left:760px;top:69vh;">YAWO</div>

    <button class="star-btn" style="left:24px; bottom:24px" data-go="page2">PAGE 2</button>

    <div class="footer-note">click the star to enter page 2</div>
  </section>

  <section id="page2" class="screen">
    <div class="page2-bgimg"></div>

    <div class="page-label">PAGE 2 / MOVING COLLAGE</div>
    <div class="page-sub">
      hover each cutout and it starts following the mouse / old web montage / body as interface / hair as system
    </div>

    <div class="navline">fadaisi system / mouse reactive cutouts / technology also feels</div>

    <div class="noise-text red" style="left:70px;top:170px;">FADAISI</div>
    <div class="noise-text" style="left:150px;top:85px;">DEV</div>
    <div class="noise-text red" style="left:68vw;top:100px;">DATA</div>
    <div class="noise-text" style="left:72vw;top:76vh;">ARTISTA</div>
    <div class="noise-text red" style="left:90px;top:83vh;">RESEARCHER</div>
    <div class="noise-text" style="left:52vw;top:59vh;">MATTER REMEMBERS</div>

    <div class="figure" style="left:8vw; top:28vh;" data-home-x="8" data-home-y="28">
      <img src="https://i.ibb.co/NdmM3zXr/Mulher-e-instala-o-escult-rica-em-cena-calma-removebg-preview.png" alt="Mulher e instalação escultórica">
    </div>

    <div class="figure" style="left:38vw; top:22vh; width:25vw;" data-home-x="38" data-home-y="22">
      <img src="https://i.ibb.co/fYrnFvJF/Ecossistema-tecnol-gico-e-org-nico-em-galeria.png" alt="Ecossistema tecnológico e orgânico">
    </div>

    <div class="figure" style="left:72vw; top:30vh; width:17vw;" data-home-x="72" data-home-y="30">
      <img src="https://i.ibb.co/wFFfKCkb/Gemini-Generated-Image-yl3meoyl3meoyl3m.png" alt="Imagem gerada">
    </div>

    <button class="star-btn small-star" style="left:24px; bottom:24px" data-go="page3">PAGE 3</button>
    <button class="star-btn small-star" style="right:24px; bottom:24px" data-go="page1">PAGE 1</button>
  </section>

  <section id="page3" class="screen">
    <div class="page-label">PAGE 3 / DOSSIER</div>
    <div class="page-sub">about / practice / research / archive</div>

    <div class="page3-wrap">
      <div class="page3-grid">
        <div class="card">
          <h2>Essência</h2>
          <p>Artista e diretora criativa brasileira que trabalha com cabelo como linguagem principal, explorando o corpo como interface entre matéria, memória e tecnologia.</p>
          <p>Sua prática investiga o corpo negro como tecnologia viva, articulando cabelo, matéria e sistemas digitais como linguagem.</p>

          <div class="quotes">
            <div class="quote">rebuilding narratives through technology</div>
            <div class="quote">the body is not separate from the system</div>
            <div class="quote">cabelo como linguagem e sistema</div>
            <div class="quote">technology also feels</div>
            <div class="quote">matter remembers</div>
            <div class="quote">body as interface</div>
          </div>
        </div>

        <div class="gallery-grid">
          <div class="gallery-item red" style="--rot:-2deg;">
            <div class="cap">Image 01</div>
            <img src="https://i.ibb.co/bj92kr1Y/artifact.jpg" alt="artifact">
          </div>

          <div class="gallery-item" style="--rot:2deg;">
            <div class="cap">Image 02</div>
            <img src="https://i.ibb.co/b568BgHk/5a7f7a4a0767ff3da9321c2f691350cd.jpg" alt="image 2">
          </div>

          <div class="gallery-item" style="--rot:-1deg;">
            <div class="cap">Image 03</div>
            <img src="https://i.ibb.co/Cs42kr17/4-5.jpg" alt="image 3">
          </div>

          <div class="gallery-item red" style="--rot:1.5deg;">
            <div class="cap">Image 04</div>
            <img src="https://i.ibb.co/LLH2ZtM/Ebervdpiccas-Janice-Mascarenhas-preselection-5.jpg" alt="image 4">
          </div>
        </div>
      </div>
    </div>

    <button class="star-btn small-star" style="left:24px; bottom:24px" data-go="page1">PAGE 1</button>
    <button class="star-btn small-star" style="right:24px; bottom:24px" data-go="page2">PAGE 2</button>
    <div class="footer-note">your briefing is now inside the site structure</div>
  </section>

  <script>
    const screens = [...document.querySelectorAll('.screen')];

    document.querySelectorAll('[data-go]').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.go;
        screens.forEach(screen => {
          screen.classList.toggle('active', screen.id === target);
        });
      });
    });

    const mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };

    window.addEventListener('mousemove', e => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    const figures = [...document.querySelectorAll('.figure')].map(el => {
      const homeX = parseFloat(el.dataset.homeX || 10);
      const homeY = parseFloat(el.dataset.homeY || 10);
      const x = (homeX / 100) * window.innerWidth;
      const y = (homeY / 100) * window.innerHeight;

      el.dataset.x = x;
      el.dataset.y = y;

      el.addEventListener('mouseenter', () => el.classList.add('hovered'));
      el.addEventListener('mouseleave', () => el.classList.remove('hovered'));

      return el;
    });

    function animate() {
      const activePage2 = document.getElementById('page2').classList.contains('active');

      figures.forEach((el, idx) => {
        let x = parseFloat(el.dataset.x);
        let y = parseFloat(el.dataset.y);

        const rect = el.getBoundingClientRect();
        const hovered = el.classList.contains('hovered') && activePage2;

        const homeX = (parseFloat(el.dataset.homeX) / 100) * window.innerWidth;
        const homeY = (parseFloat(el.dataset.homeY) / 100) * window.innerHeight;

        let tx = homeX + Math.sin(Date.now() * 0.0012 + idx) * 6;
        let ty = homeY + Math.cos(Date.now() * 0.001 + idx) * 8;

        if (hovered) {
          tx = mouse.x - rect.width / 2;
          ty = mouse.y - rect.height / 2;
        }

        x += (tx - x) * 0.09;
        y += (ty - y) * 0.09;

        el.dataset.x = x;
        el.dataset.y = y;

        el.style.left = x + 'px';
        el.style.top = y + 'px';
      });

      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
      document.querySelectorAll('.figure').forEach(el => {
        const homeX = (parseFloat(el.dataset.homeX) / 100) * window.innerWidth;
        const homeY = (parseFloat(el.dataset.homeY) / 100) * window.innerHeight;
        el.dataset.x = homeX;
        el.dataset.y = homeY;
      });
    });
  </script>
</body>
</html>
