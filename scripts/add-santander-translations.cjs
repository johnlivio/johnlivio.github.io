const fs = require('fs');

const pt = {
  santander_case_title: 'Ranking de Meritocracia — Recuperação de Crédito',
  santander_case_summary: 'Painel gerencial que define a remuneração variável de 9 empresas de cobrança. Pipeline de dados redesenhado de ponta a ponta: o que levava até 2 dias e saía 2x por semana agora chega toda manhã — ciclo completo em ~30 minutos.',
  sant_overview_title: 'Visão geral',
  sant_overview_p1: 'Case do meu trabalho atual como Data Visualization Specialist na MJV, alocado no Santander, no setor de recuperação de crédito. Projeto principal há 1 ano: o ranking de meritocracia do call center de cobrança do varejo — o painel cuja posição aumenta ou reduz diretamente a remuneração das 9 empresas parceiras de cobrança (EPs).',
  sant_overview_p2: 'Por NDA, dados reais, regras de negócio detalhadas e visuais originais não podem ser exibidos. Todas as imagens deste case são reconstruções com dados fictícios.',
  sant_context_title: 'O contexto: remuneração em jogo',
  sant_context_p1: 'Na operação de recuperação de crédito do varejo, a cobrança é executada por 9 empresas parceiras. O ranking de meritocracia consolida o atingimento de metas de cada uma — e o resultado não é apenas informativo: ele aumenta ou reduz diretamente a remuneração das empresas. Um ranking atrasado ou incorreto significa cobradores trabalhando às cegas, com rotas e abordagens decididas sem dados.',
  sant_context_p2: 'Quando assumi o projeto, o processo era manual: extração em SAS via SQL, planilhas sumarizadas montadas à mão, envio apenas 2x por semana e até 2 dias de atraso. As EPs reclamavam com razão: sem o desempenho atualizado, era impossível recalcular abordagens a tempo de fazer diferença no mês.',
  sant_role_title: 'Meu papel: do pipeline ao pixel',
  sant_role_p1: 'Sou responsável pela manutenção do ranking, pelo envio dos relatórios diários e pela formalização do faturamento após cada fechamento — rotina crítica para as EPs. O trabalho é end-to-end: entendimento do negócio com stakeholders, modelagem dos dados, medidas DAX, design dos visuais e aprovação de conceitos e mockups diretamente com a liderança e representantes dos setores envolvidos.',
  sant_eng_title: 'Engenharia de dados: fonte limpa e otimizada',
  sant_eng_p1: 'Substituí a extração manual por um pipeline Databricks → ODBC → Power BI, com views sumarizadas que reduzem o volume a milhares de linhas — o suficiente para o painel atualizar por completo em ~10 minutos.',
  sant_eng_p2: 'O modelo segue star schema: uma fato de atingimento no centro e dimensões como dim_eps (as empresas de cobrança), dim_produto (segmentos — imobiliário, consignado etc.), dim_pesos (pesos dos indicadores) e dim_data. A estrutura mantém as consultas rápidas e as medidas auditáveis.',
  sant_eng_p3: 'Como as regras de negócio e os conceitos de apuração mudam com frequência, organizei as medidas DAX de forma modular — permitindo trocar layouts e consultar o histórico sem reescrever o modelo.',
  sant_auto_title: 'Automação: de 2 dias para 30 minutos',
  sant_auto_p1: 'Desenhei sozinho uma automação com Power Automate e Microsoft Fabric, disparada por gatilho de recorrência diária: atualização do painel (~10 min), exportação automática dos PDFs (~7 min) e conferência humana antes do envio pela caixa de correio oficial. O ciclo inteiro fecha em no máximo 30 minutos — e o que era tarefa manual de parte da equipe virou verificação de qualidade.',
  sant_design_title: 'Design de informação a serviço da decisão',
  sant_design_p1: 'Painel gerencial não é vitrine — é ferramenta de decisão. A hierarquia visual foi desenhada para o teste dos 30 segundos: posição no ranking, distância da meta e tendência são lidos de imediato, com segmentos e detalhes disponíveis em camadas. Conceitos e mockups passam por aprovação com stakeholders antes de qualquer implementação.',
  sant_mockup_caption: 'Mockup reconstruído com dados 100% fictícios para este portfólio — nenhuma informação real ou sigilosa é exibida.',
  sant_arch_caption: 'Arquitetura simplificada do pipeline — sem detalhes técnicos internos.',
  sant_schema_caption: 'Modelo dimensional simplificado — nomes ilustrativos; a estrutura real é confidencial.',
  sant_beforeafter_caption: 'Comparativo do processo antes e depois da automação — valores aproximados.',
  sant_ai_title: 'Workflow aumentado por IA',
  sant_ai_p1: 'Uso Devin e GitHub Copilot no dia a dia — por decisão consciente. Delego à IA a implementação de tabelas, ajustes e visuais a partir de prompts e mockups que desenho, e concentro meu tempo no que não dá para delegar: entender o negócio, validar a lógica de apuração, revisar cada saída e construir o storytelling. Ajustes finos de DAX e modelagem seguem manuais quando a regra exige precisão.',
  sant_ai_p2: 'O resultado é um ciclo de entrega mais rápido sem abrir mão de qualidade — porque a revisão humana é parte do processo, não um passo opcional.',
  sant_impact_title: 'Impacto e limites declarados',
  sant_impact_p1: 'De 2x por semana para todos os dias: as EPs acompanham o desempenho cada manhã e recalculam rotas e abordagens no mesmo dia — não dois dias depois. No fechamento mensal, a formalização do faturamento passou a seguir rotina estruturada (jobs + envio), reduzindo o risco de erro num processo que movimenta a remuneração de 9 empresas.',
  sant_impact_p2: 'Limites declarados: os números citados são aproximações públicas; o painel depende do fechamento das fontes operacionais e da conferência humana diária. Automação não elimina a necessidade de validação — apenas a desloca para onde agrega mais valor.'
};

const en = {
  santander_case_title: 'Meritocracy Ranking — Credit Recovery',
  santander_case_summary: 'Management dashboard that determines the variable compensation of 9 collection companies. End-to-end redesigned data pipeline: what used to take up to 2 days and ship twice a week now arrives every morning — full cycle in ~30 minutes.',
  sant_overview_title: 'Overview',
  sant_overview_p1: 'A case from my current role as Data Visualization Specialist at MJV, embedded at Santander in the credit recovery division. Main project for the past year: the meritocracy ranking for the retail collections call center — the dashboard whose positions directly increase or decrease the compensation of the 9 partner collection companies (EPs).',
  sant_overview_p2: 'Under NDA, real data, detailed business rules and original visuals cannot be shown. All images in this case study are reconstructions with fictitious data.',
  sant_context_title: 'The context: compensation at stake',
  sant_context_p1: 'In retail credit recovery, collections are executed by 9 partner companies. The meritocracy ranking consolidates each company\'s target achievement — and the result is not merely informational: it directly increases or decreases their compensation. A delayed or incorrect ranking means collectors working blind, with routing and approach decisions made without data.',
  sant_context_p2: 'When I took over the project, the process was manual: SAS extraction via SQL, hand-assembled summarized spreadsheets, sent only twice a week and up to 2 days late. The companies complained with good reason: without updated performance, it was impossible to recalculate collection approaches in time to make a difference in the month.',
  sant_role_title: 'My role: from pipeline to pixel',
  sant_role_p1: 'I am responsible for maintaining the ranking, sending daily reports, and formalizing invoicing after each monthly close — a critical routine for the collection companies. The work is end-to-end: business understanding with stakeholders, data modeling, DAX measures, visual design, and approval of concepts and mockups directly with leadership and sector representatives.',
  sant_eng_title: 'Data engineering: clean, optimized source',
  sant_eng_p1: 'I replaced manual extraction with a Databricks → ODBC → Power BI pipeline, with summarized views that reduce volume to thousands of rows — enough for a full dashboard refresh in ~10 minutes.',
  sant_eng_p2: 'The model follows a star schema: a central achievement fact table with dimensions such as dim_eps (the collection companies), dim_produto (segments — real estate, payroll loans, etc.), dim_pesos (indicator weights) and dim_data. The structure keeps queries fast and measures auditable.',
  sant_eng_p3: 'Since business rules and calculation concepts change frequently, I organized the DAX measures in a modular fashion — allowing layout swaps and historical queries without rewriting the model.',
  sant_auto_title: 'Automation: from 2 days to 30 minutes',
  sant_auto_p1: 'I single-handedly designed an automation with Power Automate and Microsoft Fabric, triggered by a daily recurrence: dashboard refresh (~10 min), automatic PDF export (~7 min) and human review before sending through the official mailbox. The entire cycle completes within 30 minutes at most — and what used to be manual work for part of the team became quality verification.',
  sant_design_title: 'Information design in service of decisions',
  sant_design_p1: 'A management dashboard is not a showcase — it is a decision tool. The visual hierarchy was designed for the 30-second test: ranking position, distance to target and trend are read immediately, with segments and details available in layers. Concepts and mockups go through stakeholder approval before any implementation.',
  sant_mockup_caption: 'Mockup rebuilt with 100% fictitious data for this portfolio — no real or confidential information is displayed.',
  sant_arch_caption: 'Simplified pipeline architecture — no internal technical details.',
  sant_schema_caption: 'Simplified dimensional model — illustrative names; the real structure is confidential.',
  sant_beforeafter_caption: 'Process comparison before and after automation — approximate values.',
  sant_ai_title: 'AI-augmented workflow',
  sant_ai_p1: 'I use Devin and GitHub Copilot daily — as a conscious decision. I delegate to AI the implementation of tables, adjustments and visuals based on prompts and mockups I design, and focus my time on what cannot be delegated: understanding the business, validating calculation logic, reviewing every output and building the storytelling. Fine DAX and modeling adjustments remain manual when rules demand precision.',
  sant_ai_p2: 'The result is a faster delivery cycle without compromising quality — because human review is part of the process, not an optional step.',
  sant_impact_title: 'Impact and declared limits',
  sant_impact_p1: 'From twice a week to every day: the companies track performance each morning and recalculate routing and collection approaches the same day — not two days later. At monthly close, invoicing formalization now follows a structured routine (jobs + delivery), reducing the risk of error in a process that moves the compensation of 9 companies.',
  sant_impact_p2: 'Declared limits: the figures cited are public approximations; the dashboard depends on the closing of operational sources and daily human review. Automation does not eliminate the need for validation — it shifts it to where it adds the most value.'
};

function insertKeys(file, lang, keys, anchor) {
  let src = fs.readFileSync(file, 'utf8');
  if (!src.includes(anchor)) throw new Error('anchor not found in ' + file);
  const lines = Object.entries(keys).map(([k, v]) => {
    const esc = v.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    return `        ${k}: '${esc}',`;
  });
  src = src.replace(anchor, lines.join('\n') + '\n' + anchor);
  fs.writeFileSync(file, src);
  console.log(lang + ': ' + Object.keys(keys).length + ' keys inserted');
}

insertKeys('src/translation/languages/pt/pt.ts', 'pt', pt, '        // Aria labels');
insertKeys('src/translation/languages/en/en.ts', 'en', en, '        aria:');
