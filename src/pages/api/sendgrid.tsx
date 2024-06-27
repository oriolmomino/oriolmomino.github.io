import sendgrid from '@sendgrid/mail';
import {NextApiRequest, NextApiResponse} from 'next';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');

export default async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    await sendgrid.send({
      to: process.env.SENDGRID_TO || '',
      from: process.env.SENDGRID_FROM || '',
      subject: `[Mensaje de contacto] ${req.body.name} (${req.body.email})`,
      html: `<!DOCTYPE html>
      <html>
        <body>
          <div style="margin-left: 20px;margin-right: 20px;">
            <h3>Tienes un nuevo mensaje! (${req.body.email})</h3>
            <p><strong>Nombre:</strong> ${req.body.name}</p>
            <p><strong>Email:</strong> ${req.body.email}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${req.body.message}</p>
          </div>
        </body>
      </html>`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({error: error});
    
  }
  return res.status(200).json({error:''});
}