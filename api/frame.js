export default function handler(req, res) {
  res.status(200).json({
    title: "Are you hyped for incoming Monad mini apps on Farcaster?",
    description: "Cast your vote below",
    image: "", // optional image
    buttons: [
      { label: "Yes", action: "post" },
      { label: "No", action: "post" }
    ]
  });
}
