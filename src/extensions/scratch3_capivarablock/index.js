const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const formatMessage = require('format-message');

/**
 * Icon svg to be displayed in the category menu, encoded as a data URI.
 * @type {string}
 */
// eslint-disable-next-line max-len
const blockIconURI = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMSIgZmlsbD0iIzYxYzUyYiIgc3Ryb2tlPSIjNGQ5ZTIxIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=';

/**
 * Host for the "Capivara Mod" blocks in Scratch 3.0 / TurboWarp (native extension).
 * @param {Runtime} runtime - the runtime instantiating this block package.
 * @constructor
 */
class Scratch3CapivaraBlocks {
    constructor (runtime) {
        this.runtime = runtime;

        /**
         * Internal state used by the "alertar" block to throttle repeated alerts.
         * @type {boolean}
         */
        this._alertaDisponivel = true;
        alert('Capivara Blocks colocado!');

        /**
         * Lowercase alphabet used by the "letra aleatoria" blocks.
         * @type {Array.<string>}
         */
        this._alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('');
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo () {
        return {
            id: 'capivaramod',
            name: formatMessage({
                id: 'capivaramod.categoryName',
                default: 'Capivara Mod',
                description: 'Label for the capivara mod extension category'
            }),
            color1: '#61c52b',
            color2: '#4d9e21',
            color3: '#4d9e21',
            blockIconURI: blockIconURI,
            blocks: [
                {
                    opcode: 'pi',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'capivaramod.pi',
                        default: 'pi',
                        description: 'reports the value of pi'
                    })
                },
                {
                    opcode: 'porcentagemDe',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'capivaramod.porcentagemDe',
                        default: '[PORCENTAGEM] % de [VALOR]',
                        description: 'calculates a percentage of a value'
                    }),
                    arguments: {
                        PORCENTAGEM: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 10
                        },
                        VALOR: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 200
                        }
                    }
                },
                {
                    opcode: 'grade',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'capivaramod.grade',
                        default: 'grade de [TAMANHO] px [VALOR]',
                        description: 'snaps a value to a pixel grid'
                    }),
                    arguments: {
                        TAMANHO: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 16
                        },
                        VALOR: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                '---',
                {
                    opcode: 'repetirTexto',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'capivaramod.repetirTexto',
                        default: 'repita [TEXTO] [VEZES] vezes',
                        description: 'repeats a string a number of times'
                    }),
                    arguments: {
                        TEXTO: {
                            type: ArgumentType.STRING,
                            defaultValue: 'capivara'
                        },
                        VEZES: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 10
                        }
                    }
                },
                {
                    opcode: 'substituir',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'capivaramod.substituir',
                        default: 'substitua [ALVO] de [TEXTO] por [NOVO]',
                        description: 'replaces all occurrences of a substring'
                    }),
                    arguments: {
                        ALVO: {
                            type: ArgumentType.STRING,
                            defaultValue: 'capi'
                        },
                        TEXTO: {
                            type: ArgumentType.STRING,
                            defaultValue: 'capivara'
                        },
                        NOVO: {
                            type: ArgumentType.STRING,
                            defaultValue: 'maçã'
                        }
                    }
                },
                {
                    opcode: 'contarOcorrencias',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'capivaramod.contarOcorrencias',
                        default: 'quantidade de [ALVO] em [TEXTO]',
                        description: 'counts occurrences of a substring'
                    }),
                    arguments: {
                        ALVO: {
                            type: ArgumentType.STRING,
                            defaultValue: 'a'
                        },
                        TEXTO: {
                            type: ArgumentType.STRING,
                            defaultValue: 'capivara'
                        }
                    }
                },
                '---',
                {
                    opcode: 'xor',
                    blockType: BlockType.BOOLEAN,
                    text: formatMessage({
                        id: 'capivaramod.xor',
                        default: '[A] XOR [B]',
                        description: 'logical exclusive or'
                    }),
                    arguments: {
                        A: {
                            type: ArgumentType.BOOLEAN
                        },
                        B: {
                            type: ArgumentType.BOOLEAN
                        }
                    }
                },
                {
                    opcode: 'verdadeiro',
                    blockType: BlockType.BOOLEAN,
                    text: formatMessage({
                        id: 'capivaramod.verdadeiro',
                        default: 'verdadeiro',
                        description: 'reports the boolean value true'
                    })
                },
                {
                    opcode: 'falso',
                    blockType: BlockType.BOOLEAN,
                    text: formatMessage({
                        id: 'capivaramod.falso',
                        default: 'falso',
                        description: 'reports the boolean value false'
                    })
                },
                '---',
                {
                    opcode: 'mudarFramerate',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'capivaramod.mudarFramerate',
                        default: 'mude taxas de quadros para [FPS]',
                        description: 'changes the runtime framerate'
                    }),
                    arguments: {
                        FPS: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 30
                        }
                    }
                },
                {
                    opcode: 'fps',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'capivaramod.fps',
                        default: 'FPS',
                        description: 'reports the current framerate'
                    })
                },
                {
                    opcode: 'mudarTurbo',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'capivaramod.mudarTurbo',
                        default: 'mude modo turbo para [ATIVADO]',
                        description: 'toggles turbo mode'
                    }),
                    arguments: {
                        ATIVADO: {
                            type: ArgumentType.BOOLEAN,
                            defaultValue: false
                        }
                    }
                },
                {
                    opcode: 'turboAtivado',
                    blockType: BlockType.BOOLEAN,
                    text: formatMessage({
                        id: 'capivaramod.turboAtivado',
                        default: 'modo turbo ativado?',
                        description: 'reports whether turbo mode is on'
                    })
                },
                '---',
                {
                    opcode: 'alertar',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'capivaramod.alertar',
                        default: 'alertar [MENSAGEM]',
                        description: 'shows a browser alert with a message'
                    }),
                    arguments: {
                        MENSAGEM: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Hello world'
                        }
                    }
                },
                '---',
                {
                    opcode: 'semDecimais',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'capivaramod.semDecimais',
                        default: '[NUMERO] sem partes decimais',
                        description: 'truncates the decimal part of a number'
                    }),
                    arguments: {
                        NUMERO: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 3.14
                        }
                    }
                },
                {
                    opcode: 'absoluto',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'capivaramod.absoluto',
                        default: 'deixar [NUMERO] absoluto',
                        description: 'returns the absolute value of a number'
                    }),
                    arguments: {
                        NUMERO: {
                            type: ArgumentType.NUMBER,
                            defaultValue: -3.14
                        }
                    }
                },
                {
                    opcode: 'maiorNumero',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'capivaramod.maiorNumero',
                        default: 'pegue o maior número [A] [B]',
                        description: 'returns the larger of two numbers'
                    }),
                    arguments: {
                        A: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 10
                        },
                        B: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 20
                        }
                    }
                },
                {
                    opcode: 'menorNumero',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'capivaramod.menorNumero',
                        default: 'pegue o menor número [A] [B]',
                        description: 'returns the smaller of two numbers'
                    }),
                    arguments: {
                        A: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 10
                        },
                        B: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 20
                        }
                    }
                },
                '---',
                {
                    opcode: 'areaTriangulo',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'capivaramod.areaTriangulo',
                        default: 'Calcule a área de um triangulo com base [BASE] e altura [ALTURA]',
                        description: 'calculates the area of a triangle'
                    }),
                    arguments: {
                        BASE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 10
                        },
                        ALTURA: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 5
                        }
                    }
                },
                '---',
                {
                    opcode: 'paraMaiusculas',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'capivaramod.paraMaiusculas',
                        default: 'deixe todas as letras de [TEXTO] MAIÚSCULAS',
                        description: 'converts a string to uppercase'
                    }),
                    arguments: {
                        TEXTO: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Capivara'
                        }
                    }
                },
                {
                    opcode: 'paraMinusculas',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'capivaramod.paraMinusculas',
                        default: 'deixe todas as letras de [TEXTO] minúsculas',
                        description: 'converts a string to lowercase'
                    }),
                    arguments: {
                        TEXTO: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Capivara'
                        }
                    }
                },
                '---',
                {
                    opcode: 'anoAtual',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'capivaramod.anoAtual',
                        default: 'ano atual',
                        description: 'reports the current year'
                    })
                },
                '---',
                {
                    opcode: 'ruido1D',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'capivaramod.ruido1D',
                        default: 'valor de ruido 1D com frequencia [FREQUENCIA] taxa de amostragem [TAXA] indice [INDICE]',
                        description: 'calculates a 1D sine wave sample value'
                    }),
                    arguments: {
                        FREQUENCIA: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 440
                        },
                        TAXA: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 44100
                        },
                        INDICE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                '---',
                {
                    opcode: 'letraAleatoria',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'capivaramod.letraAleatoria',
                        default: 'letra aleatoria',
                        description: 'reports a random lowercase letter'
                    })
                },
                {
                    opcode: 'substituirPorLetraAleatoria',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'capivaramod.substituirPorLetraAleatoria',
                        default: 'susbstituir a letra ou palavra [ALVO] no texto [TEXTO] por uma letra aleatória',
                        description: 'replaces all occurrences of a substring with a random letter'
                    }),
                    arguments: {
                        ALVO: {
                            type: ArgumentType.STRING,
                            defaultValue: 'a'
                        },
                        TEXTO: {
                            type: ArgumentType.STRING,
                            defaultValue: 'capivara'
                        }
                    }
                },
                '---',
                {
                    opcode: 'unicodeDaLetra',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'capivaramod.unicodeDaLetra',
                        default: 'obter unicode da letra [LETRA]',
                        description: 'gets the unicode code point of a character'
                    }),
                    arguments: {
                        LETRA: {
                            type: ArgumentType.STRING,
                            defaultValue: 'a'
                        }
                    }
                },
                {
                    opcode: 'unicodeParaCaractere',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'capivaramod.unicodeParaCaractere',
                        default: 'converte o uinicode [CODIGO] para um caractere',
                        description: 'converts a unicode code point to a character'
                    }),
                    arguments: {
                        CODIGO: {
                            type: ArgumentType.STRING,
                            defaultValue: '091'
                        }
                    }
                },
                '---',
                {
                    opcode: 'obterItemDelimitado',
                    blockType: BlockType.REPORTER,
                    text: formatMessage({
                        id: 'capivaramod.obterItemDelimitado',
                        default: 'obtenha item [INDICE] de [TEXTO] demilitado por [DELIMITADOR]',
                        description: 'gets the nth item of a delimited string'
                    }),
                    arguments: {
                        INDICE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 1
                        },
                        TEXTO: {
                            type: ArgumentType.STRING,
                            defaultValue: 'maça,banana'
                        },
                        DELIMITADOR: {
                            type: ArgumentType.STRING,
                            defaultValue: ','
                        }
                    }
                }
            ]
        };
    }

    pi () {
        return Math.PI;
    }

    porcentagemDe (args) {
        return (Number(args.PORCENTAGEM) / 100) * Number(args.VALOR);
    }

    grade (args) {
        const tamanho = Number(args.TAMANHO);
        const valor = Number(args.VALOR);
        if (tamanho === 0) return valor;
        return Math.round(valor / tamanho) * tamanho;
    }

    repetirTexto (args) {
        const vezes = Number(args.VEZES);
        if (vezes >= 100) {
            return formatMessage({
                id: 'capivaramod.repetirTexto.limite',
                default: 'coloque um numero menor que 100',
                description: 'error shown when repeat count is too high'
            });
        }
        if (vezes < 0) return '';
        return String(args.TEXTO).repeat(Math.floor(vezes));
    }

    substituir (args) {
        return String(args.TEXTO).replaceAll(String(args.ALVO), String(args.NOVO));
    }

    contarOcorrencias (args) {
        const texto = String(args.TEXTO);
        const alvo = String(args.ALVO);
        if (alvo.length === 0) return 0;
        return texto.split(alvo).length - 1;
    }

    xor (args) {
        return Boolean(args.A) !== Boolean(args.B);
    }

    verdadeiro () {
        return true;
    }

    falso () {
        return false;
    }

    mudarFramerate (args) {
        const fps = Math.max(1, Math.min(100, Number(args.FPS)));
        this.runtime.frameLoop.setFramerate(fps);
    }

    fps () {
        return this.runtime.frameLoop.framerate;
    }

    mudarTurbo (args) {
        this.runtime.turboMode = Boolean(args.ATIVADO);
    }

    turboAtivado () {
        return Boolean(this.runtime.turboMode);
    }

    async alertar (args) {
        if (!this._alertaDisponivel) return;

        const mensagem = String(args.MENSAGEM);
        if (mensagem.includes('(') || mensagem.includes(')') || mensagem.includes('"')) {
            this.runtime.stopAll();
            // eslint-disable-next-line no-alert
            window.alert('caracteres invalidos');
        } else {
            // eslint-disable-next-line no-alert
            window.alert(mensagem);
        }

        this._alertaDisponivel = false;
        await new Promise(resolve => setTimeout(resolve, 2000));
        this._alertaDisponivel = true;
    }

    semDecimais (args) {
        return Math.trunc(Number(args.NUMERO));
    }

    absoluto (args) {
        return Math.abs(Number(args.NUMERO));
    }

    maiorNumero (args) {
        return Math.max(Number(args.A), Number(args.B));
    }

    menorNumero (args) {
        return Math.min(Number(args.A), Number(args.B));
    }

    areaTriangulo (args) {
        return (Number(args.BASE) * Number(args.ALTURA)) / 2;
    }

    paraMaiusculas (args) {
        const texto = String(args.TEXTO);
        if (texto.includes('"') || texto.includes('(') || texto.includes(')')) {
            return formatMessage({
                id: 'capivaramod.caracteresInvalidos',
                default: 'Contem caracteres invalidos',
                description: 'error shown when a string contains disallowed characters'
            });
        }
        return texto.toUpperCase();
    }

    paraMinusculas (args) {
        const texto = String(args.TEXTO);
        if (texto.includes('"') || texto.includes('(') || texto.includes(')')) {
            return formatMessage({
                id: 'capivaramod.caracteresInvalidos',
                default: 'Contem caracteres invalidos',
                description: 'error shown when a string contains disallowed characters'
            });
        }
        return texto.toLowerCase();
    }

    anoAtual () {
        return new Date().getFullYear();
    }

    ruido1D (args) {
        const frequencia = Number(args.FREQUENCIA);
        const taxa = Number(args.TAXA);
        const indice = Number(args.INDICE);
        return (2 * Math.PI * frequencia * indice) / taxa;
    }

    letraAleatoria () {
        const indice = Math.floor(Math.random() * this._alfabeto.length);
        return this._alfabeto[indice];
    }

    substituirPorLetraAleatoria (args) {
        return String(args.TEXTO).replaceAll(String(args.ALVO), this.letraAleatoria());
    }

    unicodeDaLetra (args) {
        return String(args.LETRA).codePointAt(0);
    }

    unicodeParaCaractere (args) {
        return String.fromCharCode(Number(args.CODIGO));
    }

    obterItemDelimitado (args) {
        const itens = String(args.TEXTO).split(String(args.DELIMITADOR));
        return itens[Number(args.INDICE) - 1];
    }
}

module.exports = Scratch3CapivaraBlocks;