//Tue Dec 16 2025 05:04:35 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
_0x2552f2: (function () {
  var _0x1a6366 = atob("aHR0cHM6Ly9hcGkuamlrZXp5LmNuL3lrYXBpL3ZlcmlmeV90b2tlbi5waHA=");
  function _0x33c509() {
    {
      var _0x1894af = document.getElementById("customPrompt");
      _0x1894af && document.body.removeChild(_0x1894af);
    }
  }
  function _0x1345de() {
    {
      _0x33c509();
      var _0x3eab3b = document.createElement("div");
      _0x3eab3b.id = "customPrompt";
      _0x3eab3b.innerHTML = "\n            <div style=\"position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 20px; background-color: white; border: 2px solid #ccc; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); z-index: 10000; width: 300px;\">\n                <div style=\"margin-bottom: 15px; font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; color: #333;\">YK视频M3u8获取</div>\n                <p style=\"margin-bottom: 15px; font-family: Arial, sans-serif; font-size: 14px; color: #333;\">请输入您的令牌：</p>\n                <input type=\"text\" id=\"tokenInput\" style=\"width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 5px; margin-bottom: 10px; box-sizing: border-box; font-size: 14px; color: #000; background-color: #fff;\" />\n                <div style=\"text-align: right;\">\n                    <button id=\"submitToken\" style=\"padding: 8px 12px; background-color: #007BFF; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 14px;\">提交</button>\n                    <button id=\"cancel\" style=\"padding: 8px 12px; background-color: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 14px; margin-left: 10px;\">取消</button>\n                </div>\n                <br/>\n                <a href=\"https://fak.jikezy.cn/\" target=\"_blank\" style=\"text-decoration: none; color: #007BFF; font-family: Arial, sans-serif; font-size: 14px;\">没有令牌？点击这里获取</a>\n            </div>\n        ";
      document.body.appendChild(_0x3eab3b);
      var _0x42a905 = document.getElementById("tokenInput");
      _0x42a905.style.setProperty("-webkit-autofill-background-color", "white", "important");
      _0x42a905.style.setProperty("-webkit-text-fill-color", "black", "important");
      document.getElementById("submitToken").onclick = function () {
        {
          var _0x37a717 = document.getElementById("tokenInput").value.trim();
          if (_0x37a717 === "") {
            alert("未输入令牌");
            return;
          }
          _0xfe413b(_0x37a717);
        }
      };
      document.getElementById("cancel").onclick = function () {
        _0x33c509();
      };
    }
  }
  function _0xfe413b(_0x2f8943) {
    fetch(_0x1a6366 + "?token=" + encodeURIComponent(_0x2f8943)).then(function (_0x368238) {
      return _0x368238.json();
    }).then(function (_0x99d011) {
      _0x99d011.status === "success" ? (localStorage.setItem("validToken", _0x2f8943), _0x33c509(), function () {
        var _0x299471 = window.D && window.D.player && window.D.player.lastSource && window.D.player.lastSource.source || "未找到 m3u8 地址";
        function _0xb7c9d7(_0x4501df, _0x316b08) {
          const _0x5eea61 = document.getElementById("custom-popup");
          if (_0x5eea61) _0x5eea61.remove();
          const _0x3762a8 = document.createElement("div");
          _0x3762a8.id = "custom-popup";
          _0x3762a8.innerHTML = "\n                                <div class=\"popup-overlay\">\n                                    <div class=\"popup-box\">\n                                        <div class=\"popup-header\">\n                                            <h3>" + _0x4501df + "</h3>\n                                            <button class=\"close-btn\">×</button>\n                                        </div>\n                                        <div class=\"popup-content\">" + _0x316b08 + "</div>\n                                    </div>\n                                </div>\n                                <style>\n                                    .popup-overlay {\n                                        position: fixed;\n                                        top: 0;\n                                        left: 0;\n                                        right: 0;\n                                        bottom: 0;\n                                        background: rgba(0,0,0,0.85);\n                                        display: flex;\n                                        justify-content: center;\n                                        align-items: center;\n                                        z-index: 9999;\n                                        backdrop-filter: blur(3px);\n                                    }\n                                    .popup-box {\n                                        background: #1e1e1e;\n                                        border-radius: 14px;\n                                        width: 520px;\n                                        max-width: 92%;\n                                        box-shadow: \n                                            0 12px 24px rgba(0,0,0,0.25),\n                                            0 0 0 1px rgba(255,255,255,0.1);\n                                        color: #fff;\n                                        font-family: 'Segoe UI', system-ui, sans-serif;\n                                        overflow: hidden;\n                                    }\n                                    .popup-header {\n                                        padding: 18px 24px;\n                                        border-bottom: 1px solid rgba(255,255,255,0.12);\n                                        display: flex;\n                                        justify-content: space-between;\n                                        align-items: center;\n                                        background: rgba(255,255,255,0.03);\n                                    }\n                                    .popup-header h3 {\n                                        margin: 0;\n                                        font-size: 18px;\n                                        color: #4CAF50;\n                                        font-weight: 600;\n                                        letter-spacing: 0.5px;\n                                    }\n                                    .close-btn {\n                                        background: rgba(255,255,255,0.1);\n                                        border: none;\n                                        color: #fff;\n                                        font-size: 24px;\n                                        cursor: pointer;\n                                        padding: 2px 12px 5px;\n                                        border-radius: 50%;\n                                        transition: all 0.2s;\n                                        line-height: 1;\n                                    }\n                                    .close-btn:hover {\n                                        background: rgba(255,255,255,0.2);\n                                        transform: rotate(90deg);\n                                    }\n                                    .popup-content {\n                                        padding: 24px;\n                                        font-size: 14px;\n                                        line-height: 1.6;\n                                    }\n                                    .input-group {\n                                        margin-bottom: 20px;\n                                    }\n                                    .input-group label {\n                                        display: block;\n                                        margin-bottom: 8px;\n                                        color: #a0a0a0;\n                                        font-size: 12px;\n                                        font-weight: 500;\n                                        text-transform: uppercase;\n                                        letter-spacing: 0.5px;\n                                    }\n                                    .input-field {\n                                        width: 100%;\n                                        padding: 12px 16px;\n                                        background: #141414;\n                                        border: 1px solid rgba(255,255,255,0.15);\n                                        border-radius: 8px;\n                                        color: #fff;\n                                        font-family: 'SF Mono', Menlo, monospace;\n                                        font-size: 13px;\n                                        margin-bottom: 8px;\n                                        resize: none;\n                                        transition: all 0.2s;\n                                    }\n                                    .input-field:focus {\n                                        outline: none;\n                                        border-color: #4CAF50;\n                                        box-shadow: 0 0 0 2px rgba(76,175,80,0.2);\n                                    }\n                                    .copy-btn {\n                                        background: rgba(76,175,80,0.9);\n                                        color: white;\n                                        border: none;\n                                        padding: 8px 16px;\n                                        border-radius: 6px;\n                                        cursor: pointer;\n                                        font-weight: 500;\n                                        transition: all 0.2s;\n                                        display: flex;\n                                        align-items: center;\n                                        gap: 8px;\n                                        float: right;\n                                    }\n                                    .copy-btn:hover {\n                                        background: #43A047;\n                                        transform: translateY(-1px);\n                                        box-shadow: 0 2px 6px rgba(0,0,0,0.2);\n                                    }\n                                    .copy-btn:active {\n                                        transform: translateY(0);\n                                    }\n                                    .status-text {\n                                        color: #4CAF50;\n                                        font-size: 12px;\n                                        margin-top: 8px;\n                                        display: flex;\n                                        align-items: center;\n                                        gap: 6px;\n                                        opacity: 0;\n                                        animation: fadeIn 0.3s forwards;\n                                    }\n                                    @keyframes fadeIn {\n                                        to { opacity: 1; }\n                                    }\n                                    .status-text::before {\n                                        content: \"✓\";\n                                        font-size: 14px;\n                                    }\n                                </style>\n                            ";
          _0x3762a8.querySelector(".close-btn").onclick = () => _0x3762a8.remove();
          document.body.appendChild(_0x3762a8);
          _0x3762a8.querySelectorAll(".copy-btn").forEach(_0x436859 => {
            _0x436859.onclick = () => {
              const _0x5a0e4f = _0x436859.previousElementSibling,
                _0x57932e = _0x5a0e4f.value || _0x5a0e4f.textContent;
              navigator.clipboard.writeText(_0x57932e).then(() => {
                {
                  const _0x27e5a2 = document.createElement("div");
                  _0x27e5a2.className = "status-text";
                  _0x27e5a2.textContent = "✓ 复制成功";
                  _0x436859.parentElement.appendChild(_0x27e5a2);
                  setTimeout(() => _0x27e5a2.remove(), 2000);
                }
              });
            };
          });
        }
        var _0x458308 = window.D?.["player"]?.["drmController"]?.["agent"]?.["decodeKey"];
        if (_0x458308) {
          {
            const _0x580c65 = new Uint8Array(_0x458308),
              _0x2467f6 = btoa(String.fromCharCode.apply(null, _0x580c65)),
              _0x21099e = Array.prototype.map.call(_0x458308, _0x71ccd7 => ("00" + _0x71ccd7.toString(16)).slice(-2)).join("");
            let _0x589979 = window.performance.getEntriesByType("resource"),
              _0x42a033 = _0x589979.some(_0x21a961 => _0x21a961.name.startsWith("https://pl-ali.youku.com"));
            const _0x2c587c = _0x42a033 ? "DRM Key (Hex)" : "DRM Key (Base64)",
              _0x122866 = _0x42a033 ? _0x21099e : _0x2467f6,
              _0x5eb7e8 = "\n                                <div class=\"input-group\">\n                                    <label>M3U8 地址</label>\n                                    <input class=\"input-field\" value=\"" + _0x299471 + "\" readonly>\n                                    <button class=\"copy-btn\">复制</button>\n                                </div>\n                                <div class=\"input-group\">\n                                    <label>" + _0x2c587c + "</label>\n                                    <input class=\"input-field\" value=\"" + _0x122866 + "\" readonly>\n                                    <button class=\"copy-btn\">复制</button>\n                                </div>\n                            ";
            _0xb7c9d7("DRM Key 已找到", _0x5eb7e8);
            return;
          }
        }
        let _0x4f37b4 = window.performance.getEntriesByType("resource"),
          _0x24c6d7 = "https://un-acs.youku.com",
          _0x99fa54 = _0x4f37b4.filter(_0x25b69e => _0x25b69e.name.includes(_0x24c6d7)),
          _0x5e2176 = "未找到";
        try {
          const _0x5dcb9a = window.D && window.D.player && window.D.player.abrController && window.D.player.abrController.levels;
          if (_0x5dcb9a && _0x5dcb9a[0] && _0x5dcb9a[0].keys && _0x5dcb9a[0].keys[0]) {
            {
              const _0xfdd51f = _0x5dcb9a[0].keys[0].url,
                _0x45082e = /data:text\/plain;base64,([A-Za-z0-9+/=]+)/,
                _0x35f068 = _0xfdd51f.match(_0x45082e);
              _0x35f068 && _0x35f068[1] && (_0x5e2176 = _0x35f068[1]);
            }
          }
        } catch (_0xe8c80c) {
          console.log("获取 pssh 失败: " + _0xe8c80c.message);
        }
        if (_0x99fa54.length > 0) {
          let _0x213523 = _0x99fa54[0].name;
          fetch(_0x213523, {
            "method": "GET",
            "credentials": "include"
          }).then(_0x34c2bc => {
            if (!_0x34c2bc.ok) throw new Error("初始请求失败: " + _0x34c2bc.status + " " + _0x34c2bc.statusText);
            return _0x34c2bc.text();
          }).then(_0x43e62b => {
            let _0x4dbe48 = _0x43e62b.match(/mtopjsonp\d*\(([\s\S]*)\)$/);
            if (!_0x4dbe48) throw new Error("无法提取 JSONP 数据");
            let _0x350900 = _0x4dbe48[1],
              _0x45c377 = JSON.parse(_0x350900),
              _0x47611c = _0x45c377.data && _0x45c377.data.data && _0x45c377.data.data.stream;
            if (!_0x47611c || !Array.isArray(_0x47611c) || _0x47611c.length === 0) throw new Error("未找到 stream 数组");
            let _0x3cf44b = _0x47611c[0].stream_ext && _0x47611c[0].stream_ext.uri;
            if (!_0x3cf44b) throw new Error("未找到 stream_ext.uri");
            let _0x5a0262 = _0x3cf44b.match(/token=([^&]+)/),
              _0x3a9da0 = _0x3cf44b.match(/vid=([^&]+)/),
              _0x44b0fb = _0x3cf44b.match(/psid=([^&]+)/),
              _0x2f1e33 = _0x5a0262 ? _0x5a0262[1] : "未找到",
              _0x215933 = _0x3a9da0 ? _0x3a9da0[1] : "未找到",
              _0x350cfc = _0x44b0fb ? _0x44b0fb[1] : "未找到",
              _0xadd312 = "https://ykdrm.jikezy.cn/?pssh=" + encodeURIComponent(_0x5e2176) + "&token=" + encodeURIComponent(_0x2f1e33) + "&vid=" + encodeURIComponent(_0x215933) + "&psid=" + encodeURIComponent(_0x350cfc);
            return fetch(_0xadd312, {
              "method": "GET"
            }).then(_0xa4592a => {
              {
                if (!_0xa4592a.ok) throw new Error("本地服务器响应失败");
                return _0xa4592a.json();
              }
            }).then(_0x126914 => {
              let _0x319d76 = _0x126914.keys && Array.isArray(_0x126914.keys) && _0x126914.keys.length > 0 ? _0x126914.keys.map(_0x148c7e => {
                const _0x45c3cd = _0x148c7e.match(/--key [0-9a-f]+:[0-9a-f]+/);
                if (_0x45c3cd) {
                  return _0x45c3cd[0].split(":")[1];
                }
                return _0x148c7e;
              }).join("\n") : "未找到 keys";
              const _0x32d4aa = "\n                                        <div class=\"input-group\">\n                                            <label>M3U8 地址</label>\n                                            <input class=\"input-field\" value=\"" + _0x299471 + "\" readonly>\n                                            <button class=\"copy-btn\">复制</button>\n                                        </div>\n                                        <div class=\"input-group\">\n                                            <label>解密 Keys</label>\n                                            <input class=\"input-field\" value=\"" + _0x319d76 + "\" readonly>\n                                            <button class=\"copy-btn\">复制</button>\n                                        </div>\n                                    ";
              _0xb7c9d7("提取到的解密 Keys", _0x32d4aa);
            }).catch(_0xcf8f5c => {
              _0x4e4b62("请求失败", "本地服务器请求失败");
            });
          }).catch(_0x33f515 => {
            _0x4e4b62("处理失败", "处理失败: " + _0x33f515.message);
          });
        } else _0x4e4b62("未找到相关请求", "未找到包含 " + _0x24c6d7 + " 的请求");
        function _0x4e4b62(_0x3767ed, _0x580793) {
          const _0x5381bd = "\n                                <div class=\"input-group\">\n                                    <label>M3U8 地址</label>\n                                    <input class=\"input-field\" value=\"" + _0x299471 + "\" readonly>\n                                    <button class=\"copy-btn\">复制</button>\n                                </div>\n                                <div class=\"input-group\">\n                                    <label>提示</label>\n                                    <input class=\"input-field\" value=\"" + _0x580793 + "\" readonly>\n                                </div>\n                            ";
          _0xb7c9d7(_0x3767ed, _0x5381bd);
        }
      }()) : (alert("未授权：令牌无效"), localStorage.removeItem("validToken"), _0x1345de());
    }).catch(function (_0x3f2385) {
      console.error("发生错误:", _0x3f2385);
      alert("发生错误，请稍后再试");
    });
  }
  var _0x10cb2f = localStorage.getItem("validToken");
  if (_0x10cb2f) {
    _0xfe413b(_0x10cb2f);
  } else _0x1345de();
})();