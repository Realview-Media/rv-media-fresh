export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://tpogoopemznyjrgsixgc.supabase.co/rest/v1/tours?select=id",
      {
        headers: {
          apikey: process.env.SUPABASE_KEY,
          Authorization: `Bearer ${process.env.SUPABASE_KEY}`,
        },
      }
    );

    const data = await response.json();

    res.status(200).json({
      success: true,
      count: data.length,
    });
  } catch (err) {
    res.status(500).json({ error: "Ping failed" });
  }
}