/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "issa",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}issa`,
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
				caption: `Hey pal!🍃I'm kingsley, a learner/student & an upcoming developer in the future.
            
📫𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥;
Wa.me/265889976968
Wa.me/265981678617

⭕𝙂𝙞𝙩𝙝𝙪𝙗;
https://github.com/ife250

📮𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢;
https://instagram.com/ifekingsley_

🕸𝙏𝙚𝙡𝙚𝙜𝙧𝙖𝙢;
t.me/kingsleypro

🟦𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠;
https://www.facebook.com/ifekingsley.kingsleychimalizeni

🚀𝘿𝙞𝙨𝙘𝙤𝙧𝙙;
https://www.discord.com/kingsley#6886

⪼𝖲𝖾𝖾 𝗒𝖺𝗁 💘`,
			}
		);
	};
}
