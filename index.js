const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    '🤖 Bot de Demonstração\n\nEste é um exemplo de bot automático para vendas no Telegram.\n\nEscolha uma opção abaixo:',
    Markup.inlineKeyboard([
      [Markup.button.callback('💳 Comprar acesso', 'comprar')],
      [Markup.button.callback('🛟 Suporte', 'suporte')]
    ])
  );
});

bot.action('comprar', async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.reply(
    '💳 Exemplo de fluxo de compra\n\nApós o pagamento, o acesso pode ser liberado automaticamente.\n\nEsse bot é apenas uma demonstração.'
  );
});

bot.action('suporte', async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.reply(
    '🛟 Suporte\n\nFale com: @SEUUSUARIO'
  );
});

bot.launch();

console.log('Bot rodando...');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
