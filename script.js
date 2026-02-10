function send() {
  const webhook = document.getElementById("webhook").value.trim();
  const server = document.getElementById("server").value.trim();
  const channel = document.getElementById("channel").value.trim();
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("status");

  if (!webhook || !server || !channel || !name || !message) {
    status.textContent = "❌ 未入力の項目があります";
    return;
  }

  fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: name,
      content:
        "**📡 通知フォーム**\n" +
        "🏠 サーバーID: " + server + "\n" +
        "💬 チャンネルID: " + channel + "\n\n" +
        message
    })
  })
  .then(() => {
    status.textContent = "✅ 送信しました";
    document.getElementById("message").value = "";
  })
  .catch(() => {
    status.textContent = "❌ 送信エラー";
  });
}
