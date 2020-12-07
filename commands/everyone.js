module.exports = {
  name: "everyone",
  description: "Makes bot say what user said.",
  execute(message, args) {
      const sayMessage = args.join(" ")
      message.delete().catch(err => console.log(err));
  }
}
