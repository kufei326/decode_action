//Thu Nov 27 2025 06:34:45 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
window.onload = function () {
  var _0x417ccc = new Date();
  var _0x1e39be = _0x417ccc.getTime();
  var _0x44b4ab = hex_md5("DdlTxtN0sUOu") + "70cloudflareapikey" + _0x1e39be;
  hash = hex_md5(_0x44b4ab);
  $.ajax({
    "type": "get",
    "dataType": "json",
    "url": "/index.php/index/Cloudflare?key=" + hash + "&time=" + _0x1e39be,
    "success": function (_0x4f6d34) {
      {
        $("#result").html("");
        var _0xcde5e0 = "<fieldset class=\"layui-elem-field\" style=\"background: #fdf6ec;color: #e6a23c;\"><b>CloudFlare优选IP仅对CDN节点IP进行优选，不提供任何CDN服务，严禁用户用于从事任何违法犯罪行为或帮助网络信息犯罪行为</b></fieldset>";
        var _0x1aacf7 = 0;
        if (_0x4f6d34.state < 0) {
          $("#result").append("<fieldset class=\"layui-elem-field\" style=\"background: #fdf6ec;color: #e6a23c;\"><b>获取最新CloudFlare优选IP数据失败，错误原因：" + _0x4f6d34.msg + "</b></fieldset>");
        }
        if (_0x4f6d34.data.ctcc.code == 200) {
          _0x4f6d34.data.ctcc.info.forEach((_0x55291f, _0x93d543) => {
            {
              _0xcde5e0 += " <tr><th scope=\"row\">" + (_0x1aacf7 + 1) + "</th><td>电信</td><td>" + _0x55291f.ip + "</td><td class=\"asn\">" + _0x55291f.loss + "</td><td>" + _0x55291f.ping + "</td><td class=\"asn\">" + _0x55291f.speed + "</td><td class=\"asn\">" + _0x55291f.bandwidth + "</td><td class=\"asn\"><a target=\"_blank\" href=\"http://" + _0x55291f.ip + "/cdn-cgi/trace\">查询</a></td><td class=\"asn\">" + new Date(_0x4f6d34.data.ctcc.uptime * 1000).toLocaleString("zh-CN", {
                "year": "numeric",
                "month": "2-digit",
                "day": "2-digit",
                "hour": "2-digit",
                "minute": "2-digit",
                "second": "2-digit",
                "hour12": false
              }) + "</td></tr>";
              _0x1aacf7 += 1;
            }
          });
        }
        if (_0x4f6d34.data.cucc.code == 200) {
          {
            _0x4f6d34.data.cucc.info.forEach((_0x5da50d, _0x22fa61) => {
              _0xcde5e0 += " <tr><th scope=\"row\">" + (_0x1aacf7 + 1) + "</th><td>联通</td><td>" + _0x5da50d.ip + "</td><td class=\"asn\">" + _0x5da50d.loss + "</td><td>" + _0x5da50d.ping + "</td><td class=\"asn\">" + _0x5da50d.speed + "</td><td class=\"asn\">" + _0x5da50d.bandwidth + "</td><td class=\"asn\"><a target=\"_blank\" href=\"http://" + _0x5da50d.ip + "/cdn-cgi/trace\">查询</a></td><td class=\"asn\">" + new Date(_0x4f6d34.data.cucc.uptime * 1000).toLocaleString("zh-CN", {
                "year": "numeric",
                "month": "2-digit",
                "day": "2-digit",
                "hour": "2-digit",
                "minute": "2-digit",
                "second": "2-digit",
                "hour12": false
              }) + "</td></tr>";
              _0x1aacf7 += 1;
            });
          }
        }
        if (_0x4f6d34.data.cmcc.code == 200) {
          _0x4f6d34.data.cmcc.info.forEach((_0x526813, _0x2f2c6e) => {
            {
              _0xcde5e0 += " <tr><th scope=\"row\">" + (_0x1aacf7 + 1) + "</th><td>移动</td><td>" + _0x526813.ip + "</td><td class=\"asn\">" + _0x526813.loss + "</td><td>" + _0x526813.ping + "</td><td class=\"asn\">" + _0x526813.speed + "</td><td class=\"asn\">" + _0x526813.bandwidth + "</td><td class=\"asn\"><a target=\"_blank\" href=\"http://" + _0x526813.ip + "/cdn-cgi/trace\">查询</a></td><td class=\"asn\">" + new Date(_0x4f6d34.data.cmcc.uptime * 1000).toLocaleString("zh-CN", {
                "year": "numeric",
                "month": "2-digit",
                "day": "2-digit",
                "hour": "2-digit",
                "minute": "2-digit",
                "second": "2-digit",
                "hour12": false
              }) + "</td></tr>";
              _0x1aacf7 += 1;
            }
          });
        }
        if (_0x4f6d34.data.bgp.code == 200) {
          _0x4f6d34.data.bgp.info.forEach((_0xa5ecf9, _0xea3118) => {
            {
              _0xcde5e0 += " <tr><th scope=\"row\">" + (_0x1aacf7 + 1) + "</th><td>多线</td><td>" + _0xa5ecf9.ip + "</td><td class=\"asn\">" + _0xa5ecf9.loss + "</td><td>" + _0xa5ecf9.ping + "</td><td class=\"asn\">" + _0xa5ecf9.speed + "</td><td class=\"asn\">" + _0xa5ecf9.bandwidth + "</td><td class=\"asn\"><a target=\"_blank\" href=\"http://" + _0xa5ecf9.ip + "/cdn-cgi/trace\">查询</a></td><td class=\"asn\">" + new Date(_0x4f6d34.data.bgp.uptime * 1000).toLocaleString("zh-CN", {
                "year": "numeric",
                "month": "2-digit",
                "day": "2-digit",
                "hour": "2-digit",
                "minute": "2-digit",
                "second": "2-digit",
                "hour12": false
              }) + "</td></tr>";
              _0x1aacf7 += 1;
            }
          });
        }
        if (_0x4f6d34.data.ipv6.code == 200) {
          _0x4f6d34.data.ipv6.info.forEach((_0x4a0e59, _0x58efa7) => {
            {
              _0xcde5e0 += " <tr class=\"asn\"><th scope=\"row\">" + (_0x1aacf7 + 1) + "</th><td>IPV6</td><td style=\"font-size: 12px;\">" + _0x4a0e59.ip + "</td><td>" + _0x4a0e59.loss + "</td><td class=\"asn\">" + _0x4a0e59.ping + "</td><td class=\"asn\">" + _0x4a0e59.speed + "</td><td class=\"asn\">" + _0x4a0e59.bandwidth + "</td><td class=\"asn\"><a target=\"_blank\" href=\"http://[" + _0x4a0e59.ip + "]/cdn-cgi/trace\">查询</a></td><td class=\"asn\">" + new Date(_0x4f6d34.data.ipv6.uptime * 1000).toLocaleString("zh-CN", {
                "year": "numeric",
                "month": "2-digit",
                "day": "2-digit",
                "hour": "2-digit",
                "minute": "2-digit",
                "second": "2-digit",
                "hour12": false
              }) + "</td></tr>";
              _0x1aacf7 += 1;
            }
          });
        }
        $("#result").append("<table class=\"table table-striped\"><thead><tr><th>#</th><th>线路</th><th>优选IP</th><th class=\"asn\">丢包</th><th>延迟</th><th class=\"asn\">速度</th><th class=\"asn\">带宽</th><th class=\"asn\">Colo</th><th class=\"asn\">时间</th></tr></thead>" + _0xcde5e0 + "</table>");
      }
    }
  });
};
_0xodY = "jsjiami.com.v6";