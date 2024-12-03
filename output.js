//Tue Dec 03 2024 05:48:15 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"],
  obj = JSON.parse($response.body);
obj.Attention = "恭喜你抓到元数据！由墨鱼分享，请勿售卖或分享他人！";
var ddgksf2013 = {
    "is_sandbox": false,
    "ownership_type": "PURCHASED",
    "billing_issues_detected_at": null,
    "period_type": "normal",
    "expires_date": "2099-12-18T01:04:17Z",
    "grace_period_expires_date": null,
    "unsubscribe_detected_at": null,
    "original_purchase_date": "2022-09-08T01:04:18Z",
    "purchase_date": "2022-09-08T01:04:17Z",
    "store": "app_store"
  },
  ddgksf2021 = {
    "grace_period_expires_date": null,
    "purchase_date": "2022-09-08T01:04:17Z",
    "product_identifier": "com.ddgksf2013.premium.yearly",
    "expires_date": "2099-12-18T01:04:17Z"
  };
const match = Object.keys(mapping).find(_0x9cca91 => ua.includes(_0x9cca91));
if (match) {
  let [e, s] = mapping[match];
  s ? (ddgksf2021.product_identifier = s, obj.subscriber.subscriptions[s] = ddgksf2013) : obj.subscriber.subscriptions["com.ddgksf2013.premium.yearly"] = ddgksf2013;
  obj.subscriber.entitlements[e] = ddgksf2021;
} else obj.subscriber.subscriptions["com.ddgksf2013.premium.yearly"] = ddgksf2013, obj.subscriber.entitlements.pro = ddgksf2021, console.log("操作成功🎉🎉🎉\nCuttlefishの自留地: https://t.me/ddgksf2021");
$done({
  "body": JSON.stringify(obj)
});