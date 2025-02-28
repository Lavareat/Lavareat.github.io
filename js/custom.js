document.addEventListener('DOMContentLoaded', function() {
    if (typeof renderMathInElement !== 'undefined') {
      renderMathInElement(document.body, {
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false}
        ],
        macros: {
          // 同时支持 \ce 和 \pu
          '\\ce': '\\text{#1}',
          '\\pu': '\\text{#1}'
        },
        trust: (context) => ['\\ce', '\\pu'].includes(context.command)
      });
    }
  });