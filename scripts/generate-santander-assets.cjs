const sharp = require('sharp');
const fs = require('fs');

const NAVY = '#0f1f38', RED = '#ec0000', GREEN = '#00c48c', AMBER = '#ffb020';
const WHITE = '#ffffff', GRAY = '#94a3b8', LIGHT = '#e2e8f0';

const bar = (x, y, w, h, fill, rx = 3) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}"/>`;
const txt = (x, y, str, size, fill, weight = 'normal', anchor = 'start') =>
  `<text x="${x}" y="${y}" font-family="Segoe UI, Arial, sans-serif" font-size="${size}" fill="${fill}" font-weight="${weight}" text-anchor="${anchor}">${str}</text>`;

// ---------- 1. BANNER (card hero) 1600x1000 ----------
const bannerSVG = `<svg width="1600" height="1000" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0a1628"/><stop offset="1" stop-color="#14294f"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="1000" fill="url(#bg)"/>
  ${Array.from({ length: 9 }, (_, i) => {
    const h = 180 + Math.sin(i * 1.3) * 90 + i * 22;
    const x = 120 + i * 130;
    return `<rect x="${x}" y="${880 - h}" width="86" height="${h}" rx="6" fill="#1d3a6b" opacity="0.55"/>` +
           `<rect x="${x}" y="${880 - h * 0.72}" width="86" height="${h * 0.72}" rx="6" fill="#2c5296" opacity="0.35"/>`;
  }).join('')}
  <polyline points="120,700 400,600 680,640 960,480 1240,420 1480,330" fill="none" stroke="${GREEN}" stroke-width="7" opacity="0.9" stroke-linecap="round" stroke-linejoin="round"/>
  ${[[120,700],[400,600],[680,640],[960,480],[1240,420],[1480,330]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="12" fill="${GREEN}" stroke="#0a1628" stroke-width="5"/>`).join('')}
  <rect x="120" y="90" width="340" height="10" rx="5" fill="${RED}"/>
  ${txt(120, 185, 'RANKING DE', 92, WHITE, 'bold')}
  ${txt(120, 295, 'MERITOCRACIA', 92, WHITE, 'bold')}
  ${txt(120, 375, 'Recuperação de Crédito — Painel Gerencial', 38, GRAY)}
  <g opacity="0.95">
    <rect x="120" y="440" width="230" height="56" rx="28" fill="none" stroke="#3b5e9e" stroke-width="2"/>
    ${txt(235, 477, 'Power BI', 28, LIGHT, '600', 'middle')}
    <rect x="370" y="440" width="230" height="56" rx="28" fill="none" stroke="#3b5e9e" stroke-width="2"/>
    ${txt(485, 477, 'Databricks', 28, LIGHT, '600', 'middle')}
    <rect x="620" y="440" width="290" height="56" rx="28" fill="none" stroke="#3b5e9e" stroke-width="2"/>
    ${txt(765, 477, 'Power Automate', 28, LIGHT, '600', 'middle')}
  </g>
  ${txt(1560, 955, 'DADOS FICTICIOS — RECONSTRUÇÃO SEM DADOS REAIS', 20, '#41547a', 'normal', 'end')}
</svg>`;

// ---------- 2. DASHBOARD MOCKUP 1600x1000 ----------
const eps = [
  ['EP Alpha', 118], ['EP Beta', 109], ['EP Gama', 104], ['EP Delta', 97],
  ['EP Epsilon', 91], ['EP Zeta', 84], ['EP Eta', 76], ['EP Teta', 68], ['EP Iota', 55]
];
const barMaxW = 700, barY0 = 395, barStep = 62;
const dashSVG = `<svg width="1600" height="1000" xmlns="http://www.w3.org/2000/svg">
  <rect width="1600" height="1000" fill="#f1f5f9"/>
  <rect width="1600" height="86" fill="${NAVY}"/>
  <rect x="40" y="28" width="14" height="30" rx="3" fill="${RED}"/>
  ${txt(70, 52, 'Ranking de Meritocracia — Cobrança Varejo', 30, WHITE, 'bold')}
  ${txt(1560, 52, 'Competência 06/2025 · atualizado hoje 07:12', 20, '#9db2d4', 'normal', 'end')}
  ${[
    ['Atingimento médio', '92,4%', '▲ +4,1 p.p. vs mês anterior', GREEN],
    ['Valor recuperado', 'R$ 48,2 mi', '▲ +12% vs meta parcial', GREEN],
    ['Promessas cumpridas', '31.854', 'taxa de acordo 87%', GREEN],
    ['EPs acima da meta', '4 de 9', 'meta: 100% de atingimento', AMBER]
  ].map((k, i) => {
    const x = 40 + i * 390;
    return `<rect x="${x}" y="116" width="360" height="150" rx="12" fill="white" stroke="#e2e8f0"/>` +
           txt(x + 28, 162, k[0], 22, '#64748b') +
           txt(x + 28, 218, k[1], 46, NAVY, 'bold') +
           txt(x + 28, 250, k[2], 18, k[3], '600');
  }).join('')}
  <rect x="40" y="300" width="990" height="660" rx="12" fill="white" stroke="#e2e8f0"/>
  ${txt(70, 352, 'Ranking por atingimento da meta — acumulado do mês', 26, NAVY, 'bold')}
  ${eps.map((ep, i) => {
    const pct = ep[1], w = Math.min(pct, 130) / 130 * barMaxW;
    const y = barY0 + i * barStep;
    const color = pct >= 100 ? GREEN : pct >= 80 ? '#4f7dd1' : pct >= 60 ? AMBER : '#e5484d';
    return txt(70, y + 26, `${i + 1}o  ${ep[0]}`, 22, '#334155', i < 3 ? 'bold' : 'normal') +
           bar(300, y + 4, w, 34, color, 5) +
           txt(310 + w, y + 28, pct + '%', 22, '#334155', 'bold');
  }).join('')}
  <line x1="${300 + 100 / 130 * barMaxW}" y1="${barY0 - 12}" x2="${300 + 100 / 130 * barMaxW}" y2="${barY0 + 9 * barStep - 10}" stroke="#0f1f38" stroke-width="3" stroke-dasharray="9 7"/>
  ${txt(300 + 100 / 130 * barMaxW, barY0 - 22, 'META 100%', 18, NAVY, 'bold', 'middle')}
  <rect x="1060" y="300" width="500" height="310" rx="12" fill="white" stroke="#e2e8f0"/>
  ${txt(1090, 352, 'Atingimento — últimos 6 meses', 24, NAVY, 'bold')}
  <polyline points="1090,540 1170,520 1250,530 1330,470 1410,450 1490,415" fill="none" stroke="${GREEN}" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
  ${['jan','fev','mar','abr','mai','jun'].map((m, i) => txt(1090 + i * 80, 585, m, 18, '#94a3b8', 'normal', 'middle')).join('')}
  <rect x="1060" y="640" width="500" height="320" rx="12" fill="white" stroke="#e2e8f0"/>
  ${txt(1090, 692, 'Atingimento por segmento', 24, NAVY, 'bold')}
  ${[['Imobiliário', 96, '#4f7dd1'], ['Consignado', 104, GREEN], ['Cartão', 88, AMBER], ['Veículos', 71, '#e5484d']].map((s, i) => {
    const y = 725 + i * 56;
    return txt(1090, y + 22, s[0], 20, '#334155') +
           bar(1270, y + 2, s[1] / 130 * 240, 28, s[2], 4) +
           txt(1520, y + 24, s[1] + '%', 19, '#334155', 'bold', 'end');
  }).join('')}
  ${txt(1560, 985, 'DADOS FICTÍCIOS — MOCKUP RECONSTRUÍDO PARA PORTFÓLIO, SEM INFORMAÇÃO REAL OU SIGILOSA', 17, '#94a3b8', 'normal', 'end')}
</svg>`;

// ---------- 3. ARCHITECTURE / PIPELINE 1600x720 ----------
const archSVG = `<svg width="1600" height="720" xmlns="http://www.w3.org/2000/svg">
  <rect width="1600" height="720" fill="#f8fafc"/>
  <defs>
    <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="#64748b"/>
    </marker>
  </defs>
  ${txt(800, 70, 'Pipeline de dados — ponta a ponta', 34, NAVY, 'bold', 'middle')}
  ${[
    [40, 'Fontes operacionais', ['Base de cobrança', 'Acordos e promessas', 'Pagamentos'], '#475569'],
    [360, 'Databricks', ['Queries SQL', 'Views sumarizadas', 'Regras de apuração'], '#7c3aed'],
    [680, 'Modelo dimensional', ['Fato atingimento', 'dim_eps · dim_produto', 'dim_pesos · dim_data'], '#0e7490'],
    [1000, 'Power BI', ['Medidas DAX', 'Visuais do ranking', 'Painel gerencial'], '#b45309'],
    [1320, 'Distribuição diária', ['Power Automate', 'Exportação de PDFs', 'Envio às 9 EPs'], '#15803d']
  ].map(bx => {
    const [x, title, lines, color] = bx;
    return `<rect x="${x}" y="140" width="240" height="240" rx="14" fill="white" stroke="#e2e8f0" stroke-width="2"/>` +
           `<rect x="${x}" y="140" width="240" height="54" rx="14" fill="${color}"/>` +
           `<rect x="${x}" y="172" width="240" height="22" fill="${color}"/>` +
           txt(x + 120, 176, title, 21, 'white', 'bold', 'middle') +
           lines.map((l, i) => txt(x + 120, 240 + i * 44, l, 20, '#334155', 'normal', 'middle')).join('');
  }).join('')}
  ${[288, 608, 928, 1248].map(x => `<line x1="${x}" y1="260" x2="${x + 64}" y2="260" stroke="#64748b" stroke-width="4" marker-end="url(#arr)"/>`).join('')}
  <rect x="280" y="450" width="1040" height="150" rx="14" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="2"/>
  ${txt(800, 500, 'Automação com gatilho de recorrência diária (Power Automate + Microsoft Fabric)', 25, '#065f46', 'bold', 'middle')}
  ${txt(800, 545, 'Ciclo completo: atualização do painel (~10 min) + exportação automática (~7 min) + conferência humana', 22, '#065f46', 'normal', 'middle')}
  ${txt(800, 585, 'Resultado: relatório nas caixas das EPs toda manhã — antes levava ate 2 dias e saia 2x por semana', 22, '#065f46', '600', 'middle')}
  ${txt(1560, 700, 'ESQUEMA SIMPLIFICADO — SEM DETALHES TÉCNICOS INTERNOS', 17, '#94a3b8', 'normal', 'end')}
</svg>`;

// ---------- 4. BEFORE/AFTER 1600x720 ----------
const beforeSVG = `<svg width="1600" height="720" xmlns="http://www.w3.org/2000/svg">
  <rect width="1600" height="720" fill="#f8fafc"/>
  ${txt(800, 70, 'Antes × Depois', 34, NAVY, 'bold', 'middle')}
  <rect x="60" y="120" width="700" height="520" rx="16" fill="#fef2f2" stroke="#fecaca" stroke-width="2"/>
  ${txt(410, 180, 'ANTES — processo manual', 28, '#991b1b', 'bold', 'middle')}
  ${[
    'Extração manual em SAS via SQL',
    'Planilhas sumarizadas montadas à mão',
    'Envio apenas 2x por semana',
    'Até 2 dias de atraso nos resultados',
    'EPs trabalhando às cegas, sem recalcular abordagem'
  ].map((l, i) => txt(110, 250 + i * 66, 'X   ' + l, 24, '#7f1d1d')).join('')}
  <rect x="110" y="560" width="600" height="54" rx="27" fill="#fee2e2"/>
  ${txt(410, 596, 'Ciclo total: até 2 dias', 26, '#991b1b', 'bold', 'middle')}
  <rect x="840" y="120" width="700" height="520" rx="16" fill="#ecfdf5" stroke="#a7f3d0" stroke-width="2"/>
  ${txt(1190, 180, 'DEPOIS — pipeline automatizado', 28, '#065f46', 'bold', 'middle')}
  ${[
    'Databricks conectado ao Power BI via ODBC',
    'Views sumarizadas otimizadas (milhares de linhas)',
    'Atualização diária, toda manhã',
    'Exportação e distribuição via Power Automate',
    'Humano só confere e aprova o envio'
  ].map((l, i) => txt(890, 250 + i * 66, 'OK   ' + l, 24, '#065f46')).join('')}
  <rect x="890" y="560" width="600" height="54" rx="27" fill="#d1fae5"/>
  ${txt(1190, 596, 'Ciclo total: ~30 minutos · diário', 26, '#065f46', 'bold', 'middle')}
  <g transform="translate(770,340)">
    <circle cx="30" cy="30" r="34" fill="${NAVY}"/>
    <path d="M 12 30 L 40 30 M 30 18 L 42 30 L 30 42" stroke="white" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  ${txt(1560, 700, 'VALORES APROXIMADOS COM FINS ILUSTRATIVOS — SEM DADOS SIGILOSOS', 17, '#94a3b8', 'normal', 'end')}
</svg>`;

// ---------- 5. STAR SCHEMA 1300x900 ----------
const schemaSVG = `<svg width="1300" height="900" xmlns="http://www.w3.org/2000/svg">
  <rect width="1300" height="900" fill="#f8fafc"/>
  ${txt(650, 60, 'Modelo dimensional (star schema) — simplificado', 32, NAVY, 'bold', 'middle')}
  <defs><marker id="lk" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8"/></marker></defs>
  ${[[470,400,340,170],[830,400,960,170],[470,560,340,730],[830,560,960,730]].map(l =>
    `<line x1="${l[0]}" y1="${l[1]}" x2="${l[2]}" y2="${l[3]}" stroke="#94a3b8" stroke-width="3" marker-end="url(#lk)"/>`).join('')}
  <rect x="470" y="380" width="360" height="190" rx="12" fill="${NAVY}"/>
  ${txt(650, 425, 'fato_atingimento', 28, 'white', 'bold', 'middle')}
  ${['id_ep (FK)','id_produto (FK)','id_peso (FK)','data (FK)','atingimento · valor · promessas'].map((l,i)=>txt(650,470+i*30,l,20,'#c7d5ee','normal','middle')).join('')}
  ${[
    [80, 90, 'dim_eps', ['9 empresas de cobrança','nome · código · carteira']],
    [940, 90, 'dim_produto', ['segmentos de cobrança','imobiliário · consignado · ...']],
    [80, 680, 'dim_pesos', ['pesos por indicador','regras de pontuação']],
    [940, 680, 'dim_data', ['calendário','competência · dia útil']]
  ].map(d => {
    const [x, y, t2, lines] = d;
    return `<rect x="${x}" y="${y}" width="280" height="150" rx="12" fill="white" stroke="#cbd5e1" stroke-width="2"/>` +
           `<rect x="${x}" y="${y}" width="280" height="44" rx="12" fill="#4f7dd1"/>` +
           `<rect x="${x}" y="${y+22}" width="280" height="22" fill="#4f7dd1"/>` +
           txt(x + 140, y + 32, t2, 23, 'white', 'bold', 'middle') +
           lines.map((l, i) => txt(x + 140, y + 82 + i * 34, l, 19, '#334155', 'normal', 'middle')).join('');
  }).join('')}
  ${txt(1260, 880, 'NOMES ILUSTRATIVOS — ESTRUTURA REAL É CONFIDENCIAL', 16, '#94a3b8', 'normal', 'end')}
</svg>`;

const jobs = [
  ['santander-ranking-banner.webp', bannerSVG],
  ['ranking-dashboard-mockup.webp', dashSVG],
  ['ranking-arquitetura.webp', archSVG],
  ['ranking-antes-depois.webp', beforeSVG],
  ['ranking-star-schema.webp', schemaSVG],
];

(async () => {
  for (const [name, svg] of jobs) {
    await sharp(Buffer.from(svg)).webp({ quality: 88 }).toFile('public/imagens/' + name);
    console.log('ok', name, (fs.statSync('public/imagens/' + name).size / 1024).toFixed(0) + 'kb');
  }
})();
