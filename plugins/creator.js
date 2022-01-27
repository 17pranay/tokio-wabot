function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '919748823678', 'Nurutomo', m)
  this.sendContact(m.chat, '919748823678', '𝓅𝓇𝒶𝓃𝒶𝓃𝓎', m)
}
handler.help = ['owner/creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
