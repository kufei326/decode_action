//Tue Nov 25 2025 13:16:14 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function md5cycle(x, k) {
  let a = x[0],
    b = x[1],
    c = x[2],
    d = x[3];
  function cmn(q, a, b, x, s, t) {
    a = a + q + x + t | 0;
    return (a << s | a >>> 32 - s) + b | 0;
  }
  function ff(a, b, c, d, x, s, t) {
    return cmn(b & c | ~b & d, a, b, x, s, t);
  }
  function gg(a, b, c, d, x, s, t) {
    return cmn(b & d | c & ~d, a, b, x, s, t);
  }
  function hh(a, b, c, d, x, s, t) {
    return cmn(b ^ c ^ d, a, b, x, s, t);
  }
  function ii(a, b, c, d, x, s, t) {
    return cmn(c ^ (b | ~d), a, b, x, s, t);
  }
  a = ff(a, b, c, d, k[0], 7, -680876936);
  d = ff(d, a, b, c, k[1], 12, -389564586);
  c = ff(c, d, a, b, k[2], 17, 606105819);
  b = ff(b, c, d, a, k[3], 22, -1044525330);
  a = ff(a, b, c, d, k[4], 7, -176418897);
  d = ff(d, a, b, c, k[5], 12, 1200080426);
  c = ff(c, d, a, b, k[6], 17, -1473231341);
  b = ff(b, c, d, a, k[7], 22, -45705983);
  a = ff(a, b, c, d, k[8], 7, 1770035416);
  d = ff(d, a, b, c, k[9], 12, -1958414417);
  c = ff(c, d, a, b, k[10], 17, -42063);
  b = ff(b, c, d, a, k[11], 22, -1990404162);
  a = ff(a, b, c, d, k[12], 7, 1804603682);
  d = ff(d, a, b, c, k[13], 12, -40341101);
  c = ff(c, d, a, b, k[14], 17, -1502002290);
  b = ff(b, c, d, a, k[15], 22, 1236535329);
  a = gg(a, b, c, d, k[1], 5, -165796510);
  d = gg(d, a, b, c, k[6], 9, -1069501632);
  c = gg(c, d, a, b, k[11], 14, 643717713);
  b = gg(b, c, d, a, k[0], 20, -373897302);
  a = gg(a, b, c, d, k[5], 5, -701558691);
  d = gg(d, a, b, c, k[10], 9, 38016083);
  c = gg(c, d, a, b, k[15], 14, -660478335);
  b = gg(b, c, d, a, k[4], 20, -405537848);
  a = gg(a, b, c, d, k[9], 5, 568446438);
  d = gg(d, a, b, c, k[14], 9, -1019803690);
  c = gg(c, d, a, b, k[3], 14, -187363961);
  b = gg(b, c, d, a, k[8], 20, 1163531501);
  a = gg(a, b, c, d, k[13], 5, -1444681467);
  d = gg(d, a, b, c, k[2], 9, -51403784);
  c = gg(c, d, a, b, k[7], 14, 1735328473);
  b = gg(b, c, d, a, k[12], 20, -1926607734);
  a = hh(a, b, c, d, k[5], 4, -378558);
  d = hh(d, a, b, c, k[8], 11, -2022574463);
  c = hh(c, d, a, b, k[11], 16, 1839030562);
  b = hh(b, c, d, a, k[14], 23, -35309556);
  a = hh(a, b, c, d, k[1], 4, -1530992060);
  d = hh(d, a, b, c, k[4], 11, 1272893353);
  c = hh(c, d, a, b, k[7], 16, -155497632);
  b = hh(b, c, d, a, k[10], 23, -1094730640);
  a = hh(a, b, c, d, k[13], 4, 681279174);
  d = hh(d, a, b, c, k[0], 11, -358537222);
  c = hh(c, d, a, b, k[3], 16, -722521979);
  b = hh(b, c, d, a, k[6], 23, 76029189);
  a = hh(a, b, c, d, k[9], 4, -640364487);
  d = hh(d, a, b, c, k[12], 11, -421815835);
  c = hh(c, d, a, b, k[15], 16, 530742520);
  b = hh(b, c, d, a, k[2], 23, -995338651);
  a = ii(a, b, c, d, k[0], 6, -198630844);
  d = ii(d, a, b, c, k[7], 10, 1126891415);
  c = ii(c, d, a, b, k[14], 15, -1416354905);
  b = ii(b, c, d, a, k[5], 21, -57434055);
  a = ii(a, b, c, d, k[12], 6, 1700485571);
  d = ii(d, a, b, c, k[3], 10, -1894986606);
  c = ii(c, d, a, b, k[10], 15, -1051523);
  b = ii(b, c, d, a, k[1], 21, -2054922799);
  a = ii(a, b, c, d, k[8], 6, 1873313359);
  d = ii(d, a, b, c, k[15], 10, -30611744);
  c = ii(c, d, a, b, k[6], 15, -1560198380);
  b = ii(b, c, d, a, k[13], 21, 1309151649);
  a = ii(a, b, c, d, k[4], 6, -145523070);
  d = ii(d, a, b, c, k[11], 10, -1120210379);
  c = ii(c, d, a, b, k[2], 15, 718787259);
  b = ii(b, c, d, a, k[9], 21, -343485551);
  x[0] = a + x[0] | 0;
  x[1] = b + x[1] | 0;
  x[2] = c + x[2] | 0;
  x[3] = d + x[3] | 0;
}
function md5blk(s) {
  const md5blks = [];
  for (let i = 0; i < 64; i += 4) {
    md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
  }
  return md5blks;
}
function md51(s) {
  const n = s.length;
  const state = [1732584193, -271733879, -1732584194, 271733878];
  let i;
  for (i = 64; i <= n; i += 64) {
    md5cycle(state, md5blk(s.substring(i - 64, i)));
  }
  s = s.substring(i - 64);
  const tail = new Array(16).fill(0);
  for (i = 0; i < s.length; i++) tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
  tail[i >> 2] |= 0x80 << (i % 4 << 3);
  if (i > 55) {
    md5cycle(state, tail);
    for (i = 0; i < 16; i++) tail[i] = 0;
  }
  tail[14] = n * 8;
  md5cycle(state, tail);
  return state;
}
function rhex(n) {
  const s = "0123456789abcdef";
  let j,
    str = "";
  for (j = 0; j < 4; j++) {
    str += s.charAt(n >> j * 8 + 4 & 0x0F) + s.charAt(n >> j * 8 & 0x0F);
  }
  return str;
}
function hex(x) {
  return x.map(rhex).join("");
}
function md5(s) {
  return hex(md51(s));
}
var _0xodN = 'jsjiami.com.v7';
const _0x396d93 = _0xef23;
(function (_0x28c8df, _0x206177, _0x5207e0, _0xa9b4cb, _0x214c4d, _0x54ea83, _0x59b069) {
  return _0x28c8df = _0x28c8df >> 0x2, _0x54ea83 = 'hs', _0x59b069 = 'hs', function (_0x49c671, _0x1ac332, _0x18ff52, _0x45d59b, _0x3b663d) {
    const _0x3900aa = _0xef23;
    _0x45d59b = 'tfi', _0x54ea83 = _0x45d59b + _0x54ea83, _0x3b663d = 'up', _0x59b069 += _0x3b663d, _0x54ea83 = _0x18ff52(_0x54ea83), _0x59b069 = _0x18ff52(_0x59b069), _0x18ff52 = 0x0;
    const _0x297103 = _0x49c671();
    while (true && --_0xa9b4cb + _0x1ac332) {
      try {
        _0x45d59b = -parseInt(_0x3900aa(0x198, '7Gbc')) / 0x1 * (parseInt(_0x3900aa(0x15e, '2oHe')) / 0x2) + parseInt(_0x3900aa(0x19b, 'h7ux')) / 0x3 + -parseInt(_0x3900aa(0x16b, ']EHM')) / 0x4 + -parseInt(_0x3900aa(0x1ab, '$9P)')) / 0x5 * (parseInt(_0x3900aa(0x159, 'fxcl')) / 0x6) + -parseInt(_0x3900aa(0x188, 'W2Dy')) / 0x7 + -parseInt(_0x3900aa(0x186, 'a$O5')) / 0x8 * (parseInt(_0x3900aa(0x193, '6q07')) / 0x9) + parseInt(_0x3900aa(0x164, 'kbAF')) / 0xa * (parseInt(_0x3900aa(0x185, 'aaxh')) / 0xb);
      } catch (_0x1d59cc) {
        _0x45d59b = _0x18ff52;
      } finally {
        _0x3b663d = _0x297103[_0x54ea83]();
        if (_0x28c8df <= _0xa9b4cb) _0x18ff52 ? _0x214c4d ? _0x45d59b = _0x3b663d : _0x214c4d = _0x3b663d : _0x18ff52 = _0x3b663d;else {
          if (_0x18ff52 == _0x214c4d['replace'](/[HQMInthuOlXJYRxdrCEq=]/g, '')) {
            if (_0x45d59b === _0x1ac332) {
              _0x297103['un' + _0x54ea83](_0x3b663d);
              break;
            }
            _0x297103[_0x59b069](_0x3b663d);
          }
        }
      }
    }
  }(_0x5207e0, _0x206177, function (_0x37de79, _0xbe3256, _0x2901a9, _0x456fbd, _0x273311, _0x554ae2, _0x54823a) {
    return _0x37de79 = arguments[0x0], _0x37de79 = _0x37de79['\x73\x70\x6c\x69\x74'](''), _0x37de79 = _0x37de79['\x72\x65\x76\x65\x72\x73\x65']('\x76'), 0x1c1b1f, _0x37de79['\x6a\x6f\x69\x6e']('');
  });
}(0x328, 0x1899c, _0x4bfb, 0xcc), _0x4bfb) && (_0xodN = 0x4589);
const time = Date[_0x396d93(0x1a4, 'Ne^O')]()[_0x396d93(0x179, '7Gbc')](),
  key = md5(md5('DdlTxtN0sUOu') + _0x396d93(0x16a, 'E4Y*') + time),
  url = 'https://api.uouin.com/index.php/index/Cloudflare?key=' + key + '&time=' + time,
  method = 'GET',
  headers = {
    'User-Agent': _0x396d93(0x1a5, 'o^lh'),
    'Accept': _0x396d93(0x163, 'w]kF'),
    'Referer': _0x396d93(0x177, '1S2L'),
    'X-Requested-With': _0x396d93(0x183, 'w]kF')
  },
  myRequest = {
    'url': url,
    'method': method,
    'headers': headers
  };
function getBestIPByScore(_0x5a6144) {
  const _0x1d4b20 = _0x396d93,
    _0x403907 = {
      'QKSwO': function (_0x6bd0a3, _0x4852e5) {
        return _0x6bd0a3(_0x4852e5);
      },
      'bCBvy': _0x1d4b20(0x15d, '#69p')
    },
    _0x11c49e = _0x5a6144[_0x1d4b20(0x190, 'ICsA')](_0x34f360 => _0x34f360[_0x1d4b20(0x1ae, 'sMLU')] === _0x1d4b20(0x172, 'WcR(')),
    _0x386cfa = _0x11c49e['map'](_0x2cd699 => {
      const _0x17c0e6 = _0x1d4b20,
        _0x12d7aa = _0x403907[_0x17c0e6(0x19f, 'sMLU')](parseFloat, _0x2cd699[_0x17c0e6(0x1a2, 'E*6o')]),
        _0x5e9141 = _0x403907[_0x17c0e6(0x176, 'gqBC')](parseFloat, _0x2cd699[_0x17c0e6(0x18e, '20kB')][_0x17c0e6(0x19e, 'a$O5')]('mb', '')),
        _0x27d8d9 = (0x64 - _0x12d7aa) * 0.5 + _0x5e9141 * 0.5;
      return {
        'ip': _0x2cd699['ip'],
        'ping': _0x12d7aa,
        'bandwidth': _0x5e9141,
        'score': _0x27d8d9
      };
    }),
    _0x273ab0 = _0x386cfa[_0x1d4b20(0x196, ']EHM')]((_0x28c809, _0x1c3d89) => _0x1c3d89['score'] - _0x28c809[_0x1d4b20(0x178, 'P[JQ')]);
  return _0x273ab0[0x0] ? _0x273ab0[0x0]['ip'] : _0x403907[_0x1d4b20(0x197, '$9P)')];
}
$task['fetch'](myRequest)['then'](_0x39d018 => {
  const _0x32f1bf = _0x396d93,
    _0xb3143a = {
      'XUcsx': function (_0x28358e, _0x55ae99) {
        return _0x28358e(_0x55ae99);
      },
      'aaqqp': function (_0x33563b, _0x40e4c8) {
        return _0x33563b(_0x40e4c8);
      },
      'VNfUW': function (_0x2a2c3e, _0x47009e) {
        return _0x2a2c3e + _0x47009e;
      },
      'njjnR': function (_0x28f070, _0x2447ea) {
        return _0x28f070 + _0x2447ea;
      },
      'aSGXp': _0x32f1bf(0x170, '6^RB'),
      'WuBUQ': function (_0x5e5eb6, _0x218a54) {
        return _0x5e5eb6 + _0x218a54;
      },
      'HzEdN': function (_0x4e6930, _0x444796) {
        return _0x4e6930 * _0x444796;
      },
      'AKpUY': '无可用IP',
      'ZwiPc': function (_0x19ca3a, _0x5510b0) {
        return _0x19ca3a === _0x5510b0;
      },
      'kdCbQ': _0x32f1bf(0x16f, 'fxcl'),
      'wVMrr': function (_0x6b4792, _0x1c2a03) {
        return _0x6b4792 + _0x1c2a03;
      },
      'jzckM': function (_0x39d09d, _0x44a289) {
        return _0x39d09d + _0x44a289;
      },
      'AOwiK': function (_0x108ab2, _0x59d582) {
        return _0x108ab2 + _0x59d582;
      },
      'tJMoD': function (_0x206942) {
        return _0x206942();
      },
      'lHaih': 'UEIfF',
      'iHphX': _0x32f1bf(0x161, 'ILt$'),
      'kKpuB': function (_0x5d8583, _0x2894ef, _0x9072e8, _0x25d1a9) {
        return _0x5d8583(_0x2894ef, _0x9072e8, _0x25d1a9);
      },
      'KRZhM': '解析失败',
      'wyNTi': function (_0x552be3) {
        return _0x552be3();
      }
    };
  try {
    if (_0xb3143a['ZwiPc'](_0xb3143a[_0x32f1bf(0x15b, '7Gbc')], _0xb3143a['kdCbQ'])) {
      const _0x5b492f = JSON[_0x32f1bf(0x1a7, 'o^lh')](_0x39d018[_0x32f1bf(0x17b, '20kB')])[_0x32f1bf(0x1a3, '[EWW')],
        _0x4fd4f4 = _0xb3143a[_0x32f1bf(0x1a6, 'r7fJ')](getBestIPByScore, _0x5b492f['ctcc'][_0x32f1bf(0x173, '6^RB')]),
        _0x14b5e2 = getBestIPByScore(_0x5b492f['cmcc'][_0x32f1bf(0x15a, 'W2Dy')]),
        _0x1540cc = getBestIPByScore(_0x5b492f[_0x32f1bf(0x160, '5CE2')]['info']),
        _0x1a0f41 = getBestIPByScore(_0x5b492f[_0x32f1bf(0x18a, 'zo6@')]['info']),
        _0x1e07ec = _0xb3143a['XUcsx'](getBestIPByScore, _0x5b492f['ipv6']['info']),
        _0x377044 = _0xb3143a[_0x32f1bf(0x191, ']EHM')](_0xb3143a['jzckM'](_0xb3143a[_0x32f1bf(0x15f, 'sMLU')](_0x32f1bf(0x1af, '!Sn7'), _0x32f1bf(0x1b0, 'W2Dy') + _0x4fd4f4 + '\x0a') + (_0x32f1bf(0x181, 'WcR(') + _0x14b5e2 + '\x0a'), _0x32f1bf(0x174, 'a$O5') + _0x1540cc + '\x0a'), _0x32f1bf(0x1b1, '5CE2') + _0x1a0f41 + '\x0a') + (_0x32f1bf(0x16d, 'aaxh') + _0x1e07ec);
      $notify(_0xb3143a[_0x32f1bf(0x175, 'r7fJ')], '', _0x377044), _0xb3143a[_0x32f1bf(0x189, '6q07')]($done);
    } else {
      const _0x2586b6 = _0x254944['parse'](_0x4fa46e['body'])['data'],
        _0x218164 = _0xb3143a[_0x32f1bf(0x1a1, 'ILt$')](_0x20272a, _0x2586b6['ctcc']['info']),
        _0x460c71 = _0x452d3c(_0x2586b6['cmcc'][_0x32f1bf(0x187, 'WcR(')]),
        _0x58c532 = _0xb3143a['aaqqp'](_0x107ce8, _0x2586b6['cucc']['info']),
        _0xb10777 = _0x249729(_0x2586b6[_0x32f1bf(0x158, 'h7ux')]['info']),
        _0x1634fd = _0xb3143a[_0x32f1bf(0x16e, 'fxcl')](_0x1b363f, _0x2586b6['ipv6'][_0x32f1bf(0x15a, 'W2Dy')]),
        _0x57be9f = _0xb3143a['VNfUW'](_0xb3143a[_0x32f1bf(0x192, 'a$O5')](_0xb3143a[_0x32f1bf(0x156, '0FNF')](_0x32f1bf(0x19a, '#69p'), _0x32f1bf(0x157, 'WexK') + _0x218164 + '\x0a'), _0x32f1bf(0x18c, '[EWW') + _0x460c71 + '\x0a') + (_0x32f1bf(0x166, '$9P)') + _0x58c532 + '\x0a') + (_0x32f1bf(0x169, 'fxcl') + _0xb10777 + '\x0a'), _0x32f1bf(0x17c, '7Gbc') + _0x1634fd);
      _0x58e7d8(_0xb3143a[_0x32f1bf(0x1a0, 'RxF4')], '', _0x57be9f), _0x796e67();
    }
  } catch (_0x2eb8f8) {
    if (_0xb3143a[_0x32f1bf(0x182, '5CE2')](_0xb3143a[_0x32f1bf(0x17d, 'RxF4')], _0xb3143a[_0x32f1bf(0x180, 'FErd')])) {
      const _0x4444bc = {
          'JLxPD': function (_0x25a7ef, _0x398b91) {
            const _0xfc3a7c = _0x32f1bf;
            return _0xb3143a[_0xfc3a7c(0x1ad, '#69p')](_0x25a7ef, _0x398b91);
          },
          'ZMLHI': function (_0x2ba63d, _0x1f91bd) {
            return _0x2ba63d - _0x1f91bd;
          },
          'FbbqK': function (_0x50e1b6, _0x534c98) {
            const _0x2cd8ac = _0x32f1bf;
            return _0xb3143a[_0x2cd8ac(0x19d, '[EWW')](_0x50e1b6, _0x534c98);
          }
        },
        _0xfbc5ee = _0x5b2ee8[_0x32f1bf(0x1a8, '[EWW')](_0x47b54c => _0x47b54c['loss'] === _0x32f1bf(0x1ac, 'P[JQ')),
        _0x225b75 = _0xfbc5ee[_0x32f1bf(0x17a, 'aaxh')](_0x321c90 => {
          const _0x6ca817 = _0x32f1bf,
            _0x20aba7 = _0x235d4f(_0x321c90[_0x6ca817(0x171, '20kB')]),
            _0x5e6429 = _0x5b1a53(_0x321c90[_0x6ca817(0x1b3, '!Sn7')][_0x6ca817(0x18d, 'RxF4')]('mb', '')),
            _0xe9162c = _0x4444bc[_0x6ca817(0x162, 'LF)L')](_0x4444bc['ZMLHI'](0x64, _0x20aba7) * 0.5, _0x4444bc[_0x6ca817(0x18b, '[EWW')](_0x5e6429, 0.5));
          return {
            'ip': _0x321c90['ip'],
            'ping': _0x20aba7,
            'bandwidth': _0x5e6429,
            'score': _0xe9162c
          };
        }),
        _0x42ce78 = _0x225b75[_0x32f1bf(0x1b2, '2oHe')]((_0x516d35, _0x520a8c) => _0x520a8c[_0x32f1bf(0x165, '6^RB')] - _0x516d35[_0x32f1bf(0x184, '5CE2')]);
      return _0x42ce78[0x0] ? _0x42ce78[0x0]['ip'] : _0xb3143a['AKpUY'];
    } else _0xb3143a[_0x32f1bf(0x17f, '[EWW')]($notify, _0xb3143a[_0x32f1bf(0x18f, 'kbAF')], '', _0x2eb8f8['message'] || _0x32f1bf(0x199, 'r7fJ')), _0xb3143a['wyNTi']($done);
  }
}, _0x5cef76 => {
  const _0x488516 = _0x396d93,
    _0x587991 = {
      'DCJmG': '未知错误',
      'iFhdC': function (_0x1fe3c9) {
        return _0x1fe3c9();
      }
    };
  $notify(_0x488516(0x194, 'RxF4'), '', _0x5cef76[_0x488516(0x15c, '%gkP')] || _0x587991['DCJmG']), _0x587991['iFhdC']($done);
});
function _0xef23(_0x29aaf4, _0x45d83c) {
  const _0x4bfbb7 = _0x4bfb();
  return _0xef23 = function (_0xef2304, _0x2f67c4) {
    _0xef2304 = _0xef2304 - 0x156;
    let _0x1f259b = _0x4bfbb7[_0xef2304];
    if (_0xef23['rumUmH'] === undefined) {
      var _0x2f36e4 = function (_0x5747a4) {
        const _0x172ed3 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let _0x5b2ee8 = '',
          _0x1b7035 = '';
        for (let _0x29cd36 = 0x0, _0x235d4f, _0x5b1a53, _0x5a3a9c = 0x0; _0x5b1a53 = _0x5747a4['charAt'](_0x5a3a9c++); ~_0x5b1a53 && (_0x235d4f = _0x29cd36 % 0x4 ? _0x235d4f * 0x40 + _0x5b1a53 : _0x5b1a53, _0x29cd36++ % 0x4) ? _0x5b2ee8 += String['fromCharCode'](0xff & _0x235d4f >> (-0x2 * _0x29cd36 & 0x6)) : 0x0) {
          _0x5b1a53 = _0x172ed3['indexOf'](_0x5b1a53);
        }
        for (let _0x2a18ab = 0x0, _0x396759 = _0x5b2ee8['length']; _0x2a18ab < _0x396759; _0x2a18ab++) {
          _0x1b7035 += '%' + ('00' + _0x5b2ee8['charCodeAt'](_0x2a18ab)['toString'](0x10))['slice'](-0x2);
        }
        return decodeURIComponent(_0x1b7035);
      };
      const _0x2eb1ce = function (_0x322f30, _0x2c971b) {
        let _0x3ca39c = [],
          _0x3d0990 = 0x0,
          _0x4b6e51,
          _0x1d9aaa = '';
        _0x322f30 = _0x2f36e4(_0x322f30);
        let _0x15d2a2;
        for (_0x15d2a2 = 0x0; _0x15d2a2 < 0x100; _0x15d2a2++) {
          _0x3ca39c[_0x15d2a2] = _0x15d2a2;
        }
        for (_0x15d2a2 = 0x0; _0x15d2a2 < 0x100; _0x15d2a2++) {
          _0x3d0990 = (_0x3d0990 + _0x3ca39c[_0x15d2a2] + _0x2c971b['charCodeAt'](_0x15d2a2 % _0x2c971b['length'])) % 0x100, _0x4b6e51 = _0x3ca39c[_0x15d2a2], _0x3ca39c[_0x15d2a2] = _0x3ca39c[_0x3d0990], _0x3ca39c[_0x3d0990] = _0x4b6e51;
        }
        _0x15d2a2 = 0x0, _0x3d0990 = 0x0;
        for (let _0x2e3c37 = 0x0; _0x2e3c37 < _0x322f30['length']; _0x2e3c37++) {
          _0x15d2a2 = (_0x15d2a2 + 0x1) % 0x100, _0x3d0990 = (_0x3d0990 + _0x3ca39c[_0x15d2a2]) % 0x100, _0x4b6e51 = _0x3ca39c[_0x15d2a2], _0x3ca39c[_0x15d2a2] = _0x3ca39c[_0x3d0990], _0x3ca39c[_0x3d0990] = _0x4b6e51, _0x1d9aaa += String['fromCharCode'](_0x322f30['charCodeAt'](_0x2e3c37) ^ _0x3ca39c[(_0x3ca39c[_0x15d2a2] + _0x3ca39c[_0x3d0990]) % 0x100]);
        }
        return _0x1d9aaa;
      };
      _0xef23['EfvmTf'] = _0x2eb1ce, _0x29aaf4 = arguments, _0xef23['rumUmH'] = true;
    }
    const _0x1762db = _0x4bfbb7[0x0],
      _0x2f4e20 = _0xef2304 + _0x1762db,
      _0x170af7 = _0x29aaf4[_0x2f4e20];
    return !_0x170af7 ? (_0xef23['xRBdci'] === undefined && (_0xef23['xRBdci'] = true), _0x1f259b = _0xef23['EfvmTf'](_0x1f259b, _0x2f67c4), _0x29aaf4[_0x2f4e20] = _0x1f259b) : _0x1f259b = _0x170af7, _0x1f259b;
  }, _0xef23(_0x29aaf4, _0x45d83c);
}
function _0x4bfb() {
  const _0x17faa2 = function () {
    return [_0xodN, 'tHxjsIujhRQiMamJCinY.qrEcomHu.OdvQX7YJul==', '5PAw5y+B55ErWPiD', 'ysZdNhPLwLOFW5pdMG', 'WOzHWRdcSCoU', 'W7ldTHVcHW', 'cSovWOCyW4O', 'BCoKW4nhzG', 'W5hdLtVcHIT0WQRcReddIcLWx8k8umoCWOBcLGPMWQtcMmkoWQa8cCkSiSk9yJBdG8oCk3hcR8klW7tdU8oekCkLWRPSW4FcGq', 'zSkSuCoZWPVdRmkvnXFcLq', 'W4VcSYpdUqO', '8l2YQcROGAJPGzBMJ5xOJ7ZVVPW', 'W7jnWR7cHH0XkJe', 'FgCdWPRdJe/dVN89uq', '8yUoQ8kl5As957ID5O2p6iYm77+v', 'WONcI2ZdUCozWRX5WP3cM8ofW7ZcQ8oBW7FdGSoDn8oa', 'FLtcHCkRW5rcyxFdQCoHWQRcVW', 'x8oFcrFcSCo/B8k3WPe4yCkm', '8lA0RIBdMSkZWQ7dUvlMJ5xOJ5VVVii', 'WRhdMSoAvSos', 'WONdS8o4CCod', 'W7VcVcpdVGSyqLiqy8kX5l2k6ygGW5/cTG', 'WQtdMCk1Aq', 'wYldOaWh', 'W5hcVIRdPa', '8y2IQgROGjJPGzJMJB3OJ7NVVzO', 'WQePWQpcKYy', 'DH9xW43dOa', 'jsrgW5RdPIBcIbqEvSoPvh/dKSoXACkIWPCAoKnJW4DAcSoVWPSzW5P7zCkgW4XEa8ouvW', 'uJb8W5RcRG', 'W4HQWPqxBSkdW6T0', 'W4JcO3y', 'WRBdN8k/DW'].concat(function () {
      return ['8lcNQCoNkKZcNmkZm+ApHEInGE+9TG', 'W41Ly0qz', 'WO7cVYldJdyZAG', 'uSoMFXPQ', 'W5FdOrRcJmo5', '8kwJVCoW56Eh5yQk5O6U6i+T776P', 'W4VdTbhcTa8', 'W6JdQaFcOJzJWRVcIKZdLJi6rSk7', 'W6ldObFcLGK', 'WPFdTJ/cPmotWOVcMqSkW5HU', 'W7LPExvZW6FdUIfGW4TLua', 'aMlcTLm', 'WQaRWPxdOmksWOHCWRpcGLVdT8oR', 'qCkpuhn2', 'sCkgjW', 'F8opBr5J', '8jgbNc/NPPtLIOdMJRtOJBlVVPy', 'W5niCKeqWQeu', 'WRBdKCk1AKVcM2VcVba', 'hmojoSkRWO8', 'W4vXpSobfCkL', 'ptxdUSoPWPe', 'WQu0iciq', 'b8oYr1f5kqvW', '6k2w5RgV5AsZ6lsi', 'W6hcI8kFeCogWPerWOXSEW', 'oqZdHCoV', 'W6GDseO1', 'WOu2WQusAmkUW51G', '5P+Q556F6zE96kYK', '5lM/572L5l+H6yosBq5V77YP57Uc5zgi6kYL5yIH776W5BEt55Av5OMJ776SumoK', 'xwBcKdbkoMWPmmkwp8kt', 'W4aXWRddOcRcRmoJWOi'].concat(function () {
        return ['CCoxsGTM', 'WRK7oIaJWRBdJa', 'WPzLWPtcR8oQ', 'W4b+rxub', 'nSofWQy/W74', 'DCoZW5Dk', 'xComEW4', 'zSkNBq', 'W7auWPRcU8k6f8knW7hcNMGVW5CzeHuczmk+WRyJjhegkCohCL3dNCoUc154E8ohvHaBeSkfW4dcSb/cKSk4W67dQmk7sCkfWQxcTCk9W53cQ8oPWQJcUtCQamorW4e4ic/dHCkQwMjfkq3dGL7cJs1yqgddIbddOmo9WR7dOmocW77dPITLoSoZW6FcVwtcNSoYmSk/WPFcOKxcV8ojqvZdNJ1/W4eqWRRdPSkiW73dGSodbadcOghcO8kRW414ymoDgW4OW4BcJxFcVSotxI0', 'WQeBWPxcUIy', 'W40AWPlcOCkZ', 'x8oeyXTnBG', 'fwm3WOpcNSoAWQRcL2RcLYxdOG', 'W6pcJwtdRfztW4BdJ8o9gMqg', 'WRHSpWv5tCo0W7ZdPwnnWOa', 'ex0JWPJdRG', 'iuhcU8koha', 'WQTbWRtcQW', '5lQJ576A5l2l6yo0WOC7eE+8Q+E6K+wqKEITIUwlGU++LUw1P+EvOUAkRo++OmokkG', '8lUdUSkm55ET5l2f5OYv6i2B77+O', '8lUEK1JLP77NU5pMJO3OJAFVVzu', 'i3pcMJG', 'W4JcQJ3cMCoqgYvxbW', 'eNeWW7xcMW', '8ygdO8oY55AK5l6/5O2a6i+R77+R', 'dJpdMa', 'W6BdLmofymo7WQOy', 'W7H1W4RcTW', 'W5DHWOqbtq', 'Cmk0WQZcPZi'];
      }());
    }());
  }();
  _0x4bfb = function () {
    return _0x17faa2;
  };
  return _0x4bfb();
}
;
var version_ = 'jsjiami.com.v7';