const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    '🤖 Automação de Vendas para Telegram\n\nEste bot demonstra como funciona um sistema automático de vendas.\n\n✔ Recebe pagamento\n✔ Libera acesso automaticamente\n✔ Entrega produtos ou links\n✔ Botão de suporte integrado\n\nEscolha uma opção abaixo:',
    Markup.inlineKeyboard([
      [Markup.button.callback('💳 Comprar acesso', 'comprar')],
      [Markup.button.callback('⚙️ Como funciona', 'como_funciona')],
      [Markup.button.url('🛟 Falar com suporte', 'https://t.me/gerente_12')]
    ])
  );
});

bot.action('comprar', async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.reply(
    '💳 Demonstração de compra\n\n1️⃣ O cliente escolhe o acesso ou produto\n2️⃣ Faz o pagamento por link ou Pix\n3️⃣ O sistema identifica a confirmação\n4️⃣ O bot libera automaticamente o acesso, arquivo ou link\n\nEssa automação pode ser usada para canais VIP, comunidades, conteúdos exclusivos e produtos digitais.'
  );
});

bot.action('como_funciona', async (ctx) => {
  await ctx.answerCbQuery();
  await ctx.reply(
    '⚙️ Como funciona\n\n1️⃣ O cliente clica em comprar\n2️⃣ Faz o pagamento\n3️⃣ O sistema confirma automaticamente\n4️⃣ O bot libera o acesso, link ou produto\n\nEsse processo pode ser adaptado para canais VIP, comunidades, arquivos, cursos e outros produtos digitais.'
  );
});

bot.launch();

console.log('Bot rodando...');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
