# Guia para Atualizar Dados dos Case Studies

## Como Atualizar os Dados dos Cases

Para atualizar os dados dos seus case studies, você precisa editar o arquivo `src/components/SelectedWork.tsx` e modificar o array `caseStudies`.

### Estrutura de um Case Study

```typescript
interface CaseStudy {
  id: string;                    // ID único (ex: 'meu-novo-projeto')
  title: string;                 // Título do projeto
  tags: string[];               // Tags/categorias (ex: ['UX Design', 'Research'])
  summary: string;              // Resumo de 2-4 linhas para o card
  image: string;                // URL da imagem principal
  overview: {
    challenge: string;          // Descrição do desafio
    solution: string;           // Descrição da solução
    impact: string;             // Descrição do impacto
  };
  process: {
    research: string;           // Descrição da pesquisa
    ideation: string;           // Descrição da ideação
    prototyping: string;        // Descrição da prototipagem
    testing: string;            // Descrição dos testes
  };
  results: {
    metrics: string[];          // Array de métricas de impacto
    learnings: string[];        // Array de aprendizados
  };
  images: {
    process: string[];          // Array de URLs de imagens do processo
    final: string[];            // Array de URLs de imagens finais
  };
}
```

### Exemplo de Como Adicionar um Novo Case

```typescript
{
  id: 'meu-novo-projeto',
  title: 'Meu Novo Projeto',
  tags: ['UX Design', 'Product Strategy', 'Mobile App'],
  summary: 'Redesign completo de aplicativo mobile que aumentou a retenção de usuários em 40% e melhorou significativamente a experiência de onboarding.',
  image: 'https://exemplo.com/imagem-principal.jpg',
  overview: {
    challenge: 'Usuários estavam abandonando o app durante o onboarding devido à complexidade do processo.',
    solution: 'Simplificação do fluxo de onboarding com foco em ações essenciais e feedback visual claro.',
    impact: '40% de aumento na retenção de usuários e 60% de redução no tempo de onboarding.'
  },
  process: {
    research: 'Entrevistas com 20 usuários e análise de dados de analytics para identificar pontos de abandono.',
    ideation: 'Workshops de design thinking com stakeholders para definir novo fluxo simplificado.',
    prototyping: 'Criação de protótipos em baixa e alta fidelidade usando Figma.',
    testing: 'Testes de usabilidade com 15 usuários para validar o novo fluxo.'
  },
  results: {
    metrics: [
      '40% de aumento na retenção de usuários',
      '60% de redução no tempo de onboarding',
      '85% de satisfação dos usuários'
    ],
    learnings: [
      'Simplicidade é fundamental no onboarding',
      'Feedback visual melhora a compreensão',
      'Testes contínuos são essenciais'
    ]
  },
  images: {
    process: [
      'https://exemplo.com/wireframes.jpg',
      'https://exemplo.com/user-journey.jpg'
    ],
    final: [
      'https://exemplo.com/mockup-mobile.jpg',
      'https://exemplo.com/mockup-desktop.jpg'
    ]
  }
}
```

### Como Atualizar um Case Existente

1. Abra o arquivo `src/components/SelectedWork.tsx`
2. Encontre o array `caseStudies`
3. Localize o case que deseja atualizar pelo `id`
4. Modifique os campos necessários
5. Salve o arquivo

### Dicas Importantes

- **Imagens**: Use URLs diretas para as imagens (GitHub, CDN, etc.)
- **Resumo**: Mantenha entre 2-4 linhas para boa legibilidade no card
- **Métricas**: Use números específicos quando possível
- **Tags**: Use tags consistentes para facilitar a categorização
- **URLs**: Certifique-se de que todas as URLs de imagem estão funcionando

### Estrutura de Arquivos de Imagem Recomendada

```
imagens/
├── cases/
│   ├── meu-projeto/
│   │   ├── banner.jpg          # Imagem principal do card
│   │   ├── wireframes.jpg      # Imagens do processo
│   │   ├── mockup-final.jpg    # Imagens finais
│   │   └── ...
```

### Exemplo de URL para GitHub

```
https://github.com/johnlivio/johnlivio.github.io/blob/main/imagens/cases/meu-projeto/banner.jpg?raw=true
```

## Funcionalidades Implementadas

✅ **Cards Interativos**: Layout responsivo com 2 colunas em desktop, 1 em mobile  
✅ **Expandir/Colapsar**: Funcionalidade na mesma página sem navegação externa  
✅ **Animações Suaves**: Transições elegantes para expansão/colapso  
✅ **Design Consistente**: Mantém o estilo retro/pixelado do portfólio  
✅ **Responsivo**: Adapta-se perfeitamente a todos os dispositivos  
✅ **Acessibilidade**: Suporte a screen readers e navegação por teclado  
✅ **Performance**: Carregamento otimizado de imagens  

## Próximos Passos

1. **Atualize os dados** dos seus cases usando este guia
2. **Teste a funcionalidade** em diferentes dispositivos
3. **Adicione novos cases** conforme necessário
4. **Customize as cores/tags** se desejar

