# Meu primeiro site

Projeto de teste com React, Vite e o componente Topography do React Bits.
O componente original e seu CSS foram copiados integralmente do arquivo fornecido.

## Executar no PowerShell

```powershell
npm.cmd install
npm.cmd run dev
```

Abra o endereço exibido pelo Vite (normalmente http://127.0.0.1:5173/).

## Compilar

```powershell
npm.cmd run build
npm.cmd run preview
```

## Personalizar

- `src/App.jsx`: textos, botão e configurações do fundo.
- `src/styles.css`: layout e adaptação para celular.
- `src/components/Topography.jsx`: componente WebGL2 original.
- `src/components/Topography.css`: estilos originais do componente.

O botão pausa/retoma o deslocamento e a transformação do terreno. Os efeitos de cursor e toque permanecem ativos. O componente respeita a preferência de movimento reduzido do sistema. O fundo requer suporte a WebGL2; as fontes usam Google Fonts com alternativa sans-serif local.
