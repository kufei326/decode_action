//Thu Nov 27 2025 06:38:31 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function jiance() {
  var _0x4f16ff = $("input[id='search-kw']").val();
  var _0x491618 = $("select[id='search-type']").val();
  _0x4f16ff = _0x4f16ff.replace(/(^\s*)|(\s*$)/g, "");
  var _0x4694d1 = new Date();
  var _0x5e9df7 = _0x4694d1.getTime();
  var _0x9a2826 = encodeURIComponent(_0x4f16ff) + "70checkapikey" + _0x491618 + _0x5e9df7;
  hash = hex_md5(_0x9a2826);
  $.ajax({
    "type": "GET",
    "dataType": "json",
    "url": "/index.php/index/Zhanzhang?key=" + hash + "&time=" + _0x5e9df7 + "&type=" + _0x491618,
    "data": "url=" + encodeURIComponent(_0x4f16ff),
    "success": function (_0x5d9fb9) {
      console.log(_0x5d9fb9);
      if (_0x5d9fb9.type == "qr") {
        layer.alert("<center><img src=" + _0x5d9fb9.msg + "></center><br>" + _0x5d9fb9.msg);
      } else {
        {
          layer.alert(_0x5d9fb9.msg, {
            "icon": 6
          });
        }
      }
      if (_0x5d9fb9.state < 0) {
        layer.msg(_0x5d9fb9.msg, {
          "icon": 5
        });
      }
    },
    "error": function () {
      layer.msg("请输入正确的域名", {
        "icon": 5
      });
    }
  });
}
_0xodk = "jsjiami.com.v6";