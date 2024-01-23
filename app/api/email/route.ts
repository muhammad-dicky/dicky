import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';





export async function POST(request: NextRequest) {
  try {
    const { email, name, message } = await request.json();

    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const mailOptions: Mail.Options = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: `Message from ${name} (${email})`,
      text: message,
    };

    await transport.sendMail(mailOptions);
    
    return NextResponse.json({status:'succes'});
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });

  }
}
