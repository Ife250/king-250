/** @format */

import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";
import axios from "axios";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "chat",
      description: "Chat with the kingsley Bot in group",
      aliases: ["bot", "kingsley", "kings"],
      category: "fun",
      usage: `${client.config.prefix}bot (text)`,
      baseXp: 30,
    });
  }

  run = async (M: ISimplifiedMessage): Promise<void> => {
    if (this.client.config.chatBotUrl) {
      const myUrl = new URL(this.client.config.chatBotUrl);
      const params = myUrl.searchParams;
      await axios
        .get(
          `${encodeURI(
            `http://api.brainshop.ai/get?bid=${params.get(
              "bid"
            )}&key=${params.get("key")}&uid=${M.from}&msg=${M.args.slice(1)}`
          )}`
        )
        .then((res) => {
          if (res.status !== 200)
            return void M.reply(`🔍 Error: ${res.status}`);
          return void M.reply(res.data.cnt);
        })
        .catch(() => {
          M.reply(`legendary kingsley is loading...`);
        });
    } else {
      M.reply(`Chat kingsley Bot Url or chill talk not set.`);
    }
  };
}
