/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "kingsleybot",
			description: "Displays the info of kingsley bot",
			category: "general",
			usage: `${client.config.prefix}asuna`,
			baseXp: 200,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const becky =
			"https://telegra.ph/file/3dc8ead2776d65a3b0d02.jpg";
		return void this.client.sendMessage(
			M.from,
			{ url: becky },
			MessageType.image,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.jpeg,
				caption: `*Kingsley 🚀*

⚜𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻: A reversed version of Asuna,future,juice,katsushika bot. 

🚥𝗦𝘁𝗮𝘁𝘂𝘀: Kingsley is an open source project, therefore you can deploy it here;
https://github.com/ife250/king-250

📑𝗟𝗶𝗰𝗲𝗻𝘀𝗲: You may obtain a copy of the License at;
http://www.gnu.org/licenses/

(𝗚𝗡𝗨 𝗔𝗙𝗙𝗘𝗥𝗢 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 𝗣𝗨𝗕𝗟𝗜𝗖 𝗟𝗜𝗖𝗘𝗡𝗦𝗘).
»𝖵𝖾𝗋𝗌𝗂𝗈𝗇 3.0 \n`,
			}
		);
	};
}
