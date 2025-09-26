const APIKEY = process.env.NEXT_PUBLIC_NEWSDATA_API_KEY;

export default async function fetchNewsData() {
  try {
    const url = `https://newsdata.io/api/1/news?apikey=${APIKEY}&q=president&q=administration&q=trump&country=us&category=politics`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
