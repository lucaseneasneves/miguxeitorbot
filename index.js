var TelegramBot = require('node-telegram-bot-api');

var token = '198035454:AAEPQKd56UICk-rkW1Ui8MbjJle5ua0dR5s';

// Setup polling way
var bot = new TelegramBot(token, {
    polling: true
});

// Any kind of message
bot.on('message', function(msg) {
    console.log(msg.text);
    var regex = /\/miguxar (.+)/;
    var acha = /Oque você acha disso miguxeitor?/;
    var respeito = /Miguxeitor quem deveria ser respeitado nessa joça?/;
    var embora = "Vamo embora miguxeitor!";
    if (msg.text) {
        if (regex.test(msg.text)) {
            bot.sendMessage(msg.chat.id, roda(msg.text.replace("/miguxar", ""), 3));
        }
        if (acha.test(msg.text)) {
            bot.sendMessage(msg.chat.id, "Um tremendo absurdo, cade a justiça nessa aldeia bandida!!");
        }
        if (respeito.test(msg.text)) {
            bot.sendMessage(msg.chat.id, "O supremo líder do universo, aquele que tudo vê, que ganha como lobo ou aldeão, rei dos reis, aquele que vos fala!");
        }
        if (msg.text == embora) {
            bot.sendMessage(msg.chat.id, roda("Bora chefin!", 3));
        }
    }
});

bot.on('inline_query', function() {
    console.log("INLINE QUERY", args);
});

// Cameliza as letras aleatoriamente (ai ai... essa meninada...)
function camelize(text) {
    var letters = text.toLowerCase().split('');
    for (var i = 0; i < letters.length; i++) {
        if (Math.floor(Math.random() * 2) == 1) {
            letters[i] = letters[i].toUpperCase();
        }
    }
    return letters.join('');
}

// Level 1: ICQ - Abreviações entendíveis, pouca ênfase (!!) e poucos erros de português
// Level 2: MSN - Abreviações ilegíveis, muita ênfase (!!!!) e muitos erros
// Level 3: Orkut - Menos abreviações, CaMeLCaSe e muitos X por toda parte
//
function roda(t, level) {
    // Números
    t = t.replace(/\buma?\b/gi, '1');
    t = t.replace(/\b(dois|duas)\b/gi, '2');
    t = t.replace(/\btrês\b/gi, '3');
    t = t.replace(/\bquatro\b/gi, '4');
    t = t.replace(/\bcinco\b/gi, '5');
    t = t.replace(/\bseis\b/gi, '6');
    t = t.replace(/\bsete\b/gi, '7');
    t = t.replace(/\boito\b/gi, '8');
    t = t.replace(/\bnove\b/gi, '9');
    t = t.replace(/\bdez\b/gi, '10');
    t = t.replace(/\bonze\b/gi, '11');
    t = t.replace(/\bdoze\b/gi, '12');
    t = t.replace(/\btreze\b/gi, '13');
    t = t.replace(/\b(c|qu)atorze\b/gi, '14');
    t = t.replace(/\bquinze\b/gi, '15');
    t = t.replace(/\bdezesseis\b/gi, '16');
    t = t.replace(/\bdezessete\b/gi, '17');
    t = t.replace(/\bdezoito\b/gi, '18');
    t = t.replace(/\bdezenove\b/gi, '19');
    // Repetições
    t = t.replace(/\b([0-9]+) vez(es)?\b/gi, '$1x');
    // Horas, minutos
    t = t.replace(/\b(\d+) horas?\b/gi, '$1h');
    t = t.replace(/\b(\d+) minutos?\b/gi, '$1min');
    if (level < 3) {
        t = t.replace(/\b(\d+) segundos?\b/gi, '$1s'); // ! 2xXx
    }
    // Dias da semana
    t = t.replace(/\bsegunda-feira\b/gi, '2a');
    t = t.replace(/\bterça-feira\b/gi, '3a');
    t = t.replace(/\bquarta-feira\b/gi, '4a');
    t = t.replace(/\bquinta-feira\b/gi, '5a');
    t = t.replace(/\bsexta-feira\b/gi, '6a');
    if (level < 3) {
        // Ordinais
        t = t.replace(/\bprimeir([ao])\b/gi, '1$1');
        t = t.replace(/\bsegund([ao])\b/gi, '2$1');
        t = t.replace(/\bterceir([ao])\b/gi, '3$1');
        t = t.replace(/\bquart([ao])\b/gi, '4$1');
        t = t.replace(/\bquint([ao])\b/gi, '5$1');
        t = t.replace(/\bsext([ao])\b/gi, '6$1');
        t = t.replace(/\bsétim([ao])\b/gi, '7$1');
        t = t.replace(/\boitav([ao])\b/gi, '8$1');
        t = t.replace(/\bnon([ao])\b/gi, '9$1');
        t = t.replace(/\bdécim([ao])\b/gi, '10$1');
        // Abreviações não miguxas
        t = t.replace(/\bfi(m|nal) de semana\b/gi, 'fds');
    }
    // Símbolos
    t = t.replace(/\baté mais\b/gi, 't+');
    t = t.replace(/\bdemais\b/gi, 'd+');
    t = t.replace(/\bmais ou menos\b/gi, '+-');
    t = t.replace(/\bmais\b/gi, '+');
    t = t.replace(/\bmenos\b/gi, '-');
    t = t.replace(/\bmei[ao]\b/gi, '1/2');
    // Abreviações simples
    t = t.replace(/\bpor\s?qu[eê]/gi, 'pq');
    t = t.replace(/\bhoje\b/gi, 'hj');
    t = t.replace(/\btambém\b/gi, 'tb');
    t = t.replace(/\bbeleza\b/gi, 'blz');
    t = t.replace(/\bfirmeza\b/gi, 'fmz');
    t = t.replace(/\bquando\b/gi, 'qdo');
    t = t.replace(/\bquant([ao])(s?)\b/gi, 'qt$1$2');
    t = t.replace(/\bmuit([ao])(s?)\b/gi, 'mt$1$2');
    t = t.replace(/\bbeij(o|ão)\b/gi, 'bj$1');
    t = t.replace(/\bbeijos\b/gi, 'bjs');
    if (level == 1) {
        t = t.replace(/\bcom([^\wáéíóúàâêôãõüç]|$)/gi, 'c/$1');
    } else if (level == 3) {
        t = t.replace(/\bcom([^\wáéíóúàâêôãõüç]|$)/gi, 'cum$1');
        if (t.replace(' ', '').toLowerCase().split('').reverse().join('') == 'ohcamome') { // ee1
            window.location = 'http://i128.photobucket.com/albums/p185/nagado/emomiguxo.jpg';
        }
        if (t.replace(' ', '').toLowerCase().split('').reverse().join('') == 'oneuqepéz') { // ee2
            window.location = 'http://www.blogodorium.net/uploads/miguxes.jpg';
        }
    }
    if (level > 1) {
        // Abreviações avançadas
        t = t.replace(/\bmesm[ao](s?)\b/gi, 'msm$1');
        t = t.replace(/\bdepois\b/gi, 'dpois');
        t = t.replace(/\bquem\b/gi, 'qm');
        t = t.replace(/\bcomigo\b/gi, 'cmg');
        t = t.replace(/\bcadê/gi, 'kd');
        t = t.replace(/\bqualquer\b/gi, 'qq');
        t = t.replace(/\bfalou\b/gi, 'flw');
        t = t.replace(/\bvaleu\b/gi, 'vlw');
        t = t.replace(/\btchau\b/gi, 'xau');
    }
    if (level == 1) {
        t = t.replace(/\bque\b/gi, 'q');
        t = t.replace(/\bvocê/gi, 'vc');
        t = t.replace(/\be-?mail(s?)\b/gi, 'mail$1');
    } else if (level == 2) {
        t = t.replace(/\bque\b/gi, 'ke');
        t = t.replace(/\bvocês\b/gi, '6');
        t = t.replace(/\bvocê/gi, 'vc'); // c fica estranho em kd c?
    } else {
        t = t.replace(/\bque\b/gi, 'ki');
        t = t.replace(/\b(adoro você|te adoro)/gi, 'adoluxê');
        t = t.replace(/\bamo vocês\b/gi, 'amodolu vocês');
        t = t.replace(/\b(amo você|te amo)/gi, 'te amodolu');
        t = t.replace(/\bvocê/gi, 'vuxê');
    }
    // Glossário
    t = t.replace(/\btecl(e|ar|ou|amos)\b/gi, 'tc');
    t = t.replace(/\binternet\b/gi, 'net');
    t = t.replace(/\be-?mail(s?)\b/gi, 'meio$1');
    t = t.replace(/\b(grana|dinheiro)\b/gi, '$$$$$$'); // $$$
    if (level == 2) {
        t = t.replace(/\badicion/gi, 'adde'); // Tou t addeando
        t = t.replace(/\bamig([ao])\b/gi, 'mig$1'); // miga
        t = t.replace(/\blind([ao])\b/gi, 'leend$1'); // leenda
        t = t.replace(/\bnovidade(s?)\b/gi, '9dad$1');
    } else if (level == 3) {
        t = t.replace(/\badicion[\wáí]+/gi, 'add'); // Tou t add
        t = t.replace(/\bamig([ao]s?)\b/gi, 'migux$1'); // miguxa
        t = t.replace(/\blind([ao]s?)\b/gi, 'lindux$1'); // linduxa
        t = t.replace(/\bfof([ao]s?)\b/gi, 'fofux$1'); // fofuxa
        t = t.replace(/\bdormir\b/gi, 'mimir');
        t = t.replace(/\bnome(s?)\b/gi, 'nominho$1');
        t = t.replace(/\besposa\b/gi, 'marida');
        t = t.replace(/\b(de novo|novamente)\b/gi, 'dinovo');
        t = t.replace(/\b(aliás|por exemplo)\b/gi, 'tipo assim');
    }
    // tou, tava, tar
    t = t.replace(/\best(ar|ou|ava|ive|aria|ão)\b/gi, 't$1');
    t = t.replace(/\bestá([^\wáéíóúàâêôãõüç]|$)/gi, 'tah$1');
    // para
    t = t.replace(/\bpara ([ao]s?)\b/gi, 'pr$1');
    t = t.replace(/\bpara([^\wáéíóúàâêôãõüç-]|$)/gi, 'pra$1');
    if (level == 2) {
        t = t.replace(/\bpr[ao]([^\wáéíóúàâêôãõüç]|$)/gi, 'p$1');
    }
    // Simplifiq: irmos -> ir, acabou -> cabou
    t = t.replace(/([aei]r)mos\b/gi, '$1');
    t = t.replace(/\bacab/gi, 'cab');
    if (level > 1) {
        // entaum, naum
        t = t.replace(/ão\b/gi, 'aum');
        // andando -> andano, comendo -> comeno (depois fica melhor: andanu, comenu)
        t = t.replace(/(\w[aei])ndo\b/gi, '$1no');
        // tada$ -> tadeenha (e alguns outros casos), foto -> foteenha, gatinha -> gateenha
        t = t.replace(/(\w[crt]ad)([ao])\b/gi, '$1eenh$2');
        t = t.replace(/foto(s?)\b/gi, 'foteenha$1');
        t = t.replace(/(\w)tinh([ao])\b/gi, '$1teenh$2');
        if (level > 2) {
            // No Orkut é mais fófi terminar em i
            t = t.replace(/\bse\b/gi, 'si');
            t = t.replace(/\bde\b/gi, 'di');
            t = t.replace(/\bte\b/gi, 'ti');
        } else {
            // No MSN o som da letra vira a palavra
            t = t.replace(/\bse\b/gi, 'c');
            t = t.replace(/\bde\b/gi, 'd');
            t = t.replace(/\bte\b/gi, 't');
        }
        // CH, SH e QU não existem
        t = t.replace(/ch/gi, 'x');
        t = t.replace(/sh/gi, 'x');
        t = t.replace(/qu/gi, 'k');
        // e -> i (alguns casos)
        t = t.replace(/(\w(ss|[cdgtv]))e(s?)m?\b/gi, '$1i$3');
        t = t.replace(/\bseg/gi, 'sig');
        t = t.replace(/\bdes([^s])/gi, 'dis$1');
    }
    // ei -> i (alguns casos) deixa -> dexa
    t = t.replace(/eix/gi, 'ex');
    if (level > 1) {
        // o -> u (alguns casos)
        t = t.replace(/\bbonit/gi, 'bunit');
        // e sozinho -> i
        t = t.replace(/\be\b/gi, 'i');
        if (level > 2) {
            // inglês -> ingleix
            t = t.replace(/ês\b/gi, 'eix');
            // atrás -> atraix
            t = t.replace(/(\w)(ás|az)\b/gi, '$1aix');
        }
    }
    // Acento no final eh moh uoh
    t = t.replace(/á([^\wáéíóúàâêôãõüç]|$)/gi, 'ah$1');
    t = t.replace(/é([^\wáéíóúàâêôãõüç]|$)/gi, 'eh$1');
    t = t.replace(/í([^\wáéíóúàâêôãõüç]|$)/gi, 'ih$1');
    t = t.replace(/ó([^\wáéíóúàâêôãõüç]|$)/gi, 'oh$1');
    t = t.replace(/ú([^\wáéíóúàâêôãõüç]|$)/gi, 'uh$1');
    // Acentuação? Nunca.
    t = t.replace(/[áàâãä]/gi, 'a');
    t = t.replace(/[éèêë]/gi, 'e');
    t = t.replace(/[íìîï]/gi, 'i');
    t = t.replace(/[óòôõö]/gi, 'o');
    t = t.replace(/[úùûü]/gi, 'u');
    if (level == 1) {
        t = t.replace(/[ç]/gi, 'c');
    } else {
        t = t.replace(/[ç]/gi, 'ss');
    }
    if (level > 1) {
        // l$ -> u
        t = t.replace(/(\w[a-z])l\b/gi, '$1u');
        // amo -> amu, todo -> todu (plural também)
        t = t.replace(/o(s?)\b/gi, 'u$1');
        t = t.replace(/\b(\d+)u\b/gi, '$1o'); // fix 1u > 1o (primeiro)
        // ou -> o (se for parte de palavra)
        if (level == 3) {
            t = t.replace(/(\w)ou\b/gi, '$1ow'); // Orkut
        } else {
            t = t.replace(/(\w)ou\b/gi, '$1o'); // bug: 2)sol>sou>so
        }
        t = t.replace(/\bou(\w)/gi, 'o$1');
        t = t.replace(/(\w)ou(\w)/gi, '$1o$2');
        // ^c -> k (exceções: certo,cidade,c)
        t = t.replace(/\bc([^ei\W])/gi, 'k$1');
        // andar -> andah, comer -> come, sentir -> senti
        t = t.replace(/ar\b/gi, 'ah');
        t = t.replace(/er\b/gi, 'e');
        t = t.replace(/ir\b/gi, 'i');
        // eira$ -> era  (sonzera, ladera)
        t = t.replace(/eira\b/gi, 'era');
        // sa$ -> za, casa -> caza
        t = t.replace(/([^s\W])sa\b/gi, '$1za');
        // TODO muZica e assemelhados
        // Certas palavras não precisam de plural (mmmmm, deixe quieto)
        // t = t.replace(/(dia)s\b/gi,          '$1');
    }
    if (level > 2) {
        // O abominável X no fim das palavras no plural
        t = t.replace(/([^\Ws])s\b/gi, '$1x');
        // O abominável H no fim de certas palavras
        t = t.replace(/(\w)a\b/gi, '$1ah');
    }
    // Risada
    if (level == 1) {
        t = t.replace(/\b(he|ha|hi|ho|hua){2,}h?\b/gi, 'rsrsrs');
    } else if (level == 2) {
        t = t.replace(/\b(he|ha|hi|ho|hua|rs){2,}h?\b/gi, 'huahuahua');
        t = t.replace(/[8:][-o]?[D)]/g, 'huahuahua');
    } else {
        t = t.replace(/\b(he|ha|hi|ho|hua|rs){2,}h?\b/gi, 'kkkkkkkkkkk');
        t = t.replace(/[8:][-o]?[D)]/g, 'kkkkkkkkkkk');
    }
    if (level > 1) {
        // Somente um ponto final é muito pouco
        t = t.replace(/\./g, '......');
        // Pra que vírgula? Pontos são mais legais... vários...
        t = t.replace(/, /g, '...');
        t = t.replace(/,(\n|$)/g, '...$1');
    }
    // Sejamos enfáticos!!!
    if (level == 1) {
        t = t.replace(/!/g, '!!');
        t = t.replace(/\?/g, '??');
    } else {
        t = t.replace(/!/g, '!!!!!');
        t = t.replace(/\?/g, '??!?!');
    }
    if (level < 3) {
        // Maiúsculas não existem
        t = t.toLowerCase();
    } else {
        // Alternância aLEaTóRIa de maiúsculas e minúsculas
        t = camelize(t);
        // E uns ajustes finais para ficar ainda mais fofuxu
        t = t.replace(/x/gi, 'xXx');
        t = t.replace(/ss/gi, 'XX');
    }

    return t;

}