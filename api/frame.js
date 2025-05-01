const { buffer } = require('micro');

export const config = {
  api: {
    bodyParser: false,
  },
};

let votes = { yes: 0, no: 0 };

export default async function handler(req, res) {
  if (req.method === "POST") {
    const rawBody = await buffer(req);
    const body = JSON.parse(rawBody.toString());
    const button = body?.untrustedData?.buttonIndex;

    if (button === 1) votes.yes++;
    if (button === 2) votes.no++;

    return res.status(200).json({
      title: "Thanks for voting!",
      description: `Yes: ${votes.yes} | No: ${votes.no}`,
      buttons: [
        { label: "Vote again", action: "post" }
      ]
    });
  }

  // Default GET frame
  return res.status(200).json({
    title: "Are you hyped for incoming Monad mini apps on Farcaster?",
    description: "Cast your vote below",
    buttons: [
      { label: "Yes", action: "post" },
      { label: "No", action: "post" }
    ]
  });
}
