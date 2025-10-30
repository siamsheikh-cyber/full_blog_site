
import path from "path";
import ejs from "ejs"
import { fileURLToPath } from "url";
import { envVars } from "../config/env.js";
import nodemailer from "nodemailer"





export const sendEmail = async (emailInfo: any, templateData: any) => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = path.dirname(__filename)
    const templatePath = path.join(__dirname, emailInfo.fileName);



    const html = await ejs.renderFile(templatePath, templateData)


    const transporter = nodemailer.createTransport({
        host: envVars.EMAIL.SMPT_HOST,
        port: envVars.EMAIL.SMPT_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user: envVars.EMAIL.SMPT_USERNAME,
            pass: envVars.EMAIL.SMPT_PASS,
        },
    } as nodemailer.TransportOptions);


    try {
        const info = await transporter.sendMail({
            from: `"Advance Blog" <${emailInfo.from}>`,
            to: emailInfo.to,
            subject: emailInfo.subject,
            // text: "Hello world?", // plain‑text body
            html: (html as string)
        });
    } catch (error) {
        console.log(error);

    }
}