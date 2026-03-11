import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { ApifyClient } from "https://esm.sh/apify-client@latest";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // [fetch-hackathons] Handle CORS OPTIONS request
  if (req.method === 'OPTIONS') {
    console.log("[fetch-hackathons] Handling OPTIONS request");
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // [fetch-hackathons] Get Apify API token from environment variables
    const apifyApiToken = Deno.env.get('APIFY_API_TOKEN');
    if (!apifyApiToken) {
      console.error("[fetch-hackathons] APIFY_API_TOKEN is not set.");
      return new Response(JSON.stringify({ error: 'APIFY_API_TOKEN is not set.' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // [fetch-hackathons] Initialize the ApifyClient
    const client = new ApifyClient({ token: apifyApiToken });

    // [fetch-hackathons] Prepare the Actor input
    const runInput = {
      "startUrls": [{ "url": "https://unstop.com/hackathons" }],
      "proxyConfiguration": { "useApifyProxy": true },
    };

    // [fetch-hackathons] Run the Actor and wait for it to finish
    console.log("[fetch-hackathons] Running Apify actor 'trusted_offshoot/unstop-hackathon-scraper'");
    const run = await client.actor("trusted_offshoot/unstop-hackathon-scraper").call(runInput);
    console.log("[fetch-hackathons] Apify actor run finished. Dataset ID:", run.defaultDatasetId);

    // [fetch-hackathons] Fetch and collect Actor results from the run's dataset
    const dataset = client.dataset(run.defaultDatasetId);
    const { items } = await dataset.listItems();
    console.log(`[fetch-hackathons] Fetched ${items.length} items from dataset.`);

    return new Response(JSON.stringify(items), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error("[fetch-hackathons] Error fetching hackathons:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});