import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
const TO_EMAIL = process.env.TO_EMAIL ?? "dev@mrbiskit.xyz";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "default@gmail.com";

type Feedback = {
  email?: string;
  message?: string;
  name?: string;
};

export async function POST(req: Request) {
  const data: Feedback = await req.json();
  console.log("data: ", data);
  const { email, message, name } = data;
  console.log("email: ", email);
  console.log("message: ", message);

  const msg = {
    to: TO_EMAIL,
    from: FROM_EMAIL,
    subject: "Mail from: " + name + "From email: " + email,
    text: message || "",
    html: `<strong>${message}</strong>`,
  };
  try {
    await sgMail.send(msg);
    return new Response("Email sent", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Error sending email", { status: 500 });
  }
}
