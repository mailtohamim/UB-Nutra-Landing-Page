#!/usr/bin/env node

const WEBHOOK_URL =
  "https://n8n.bikiran.com/webhook/dfb8c182-cca5-4dd7-a3c5-6512b29b5596";

// Make GET request with fetch
async function triggerDeploy() {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    const response = await fetch(WEBHOOK_URL, {
      method: "GET",
      headers: {
        "User-Agent": "Deploy-Script/1.0",
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    console.log("✅ Deployment triggered successfully!");
    console.log(`📊 Status: ${response.status} ${response.statusText}`);

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      console.log("📥 Response:", JSON.stringify(data, null, 2));
    } else {
      const text = await response.text();
      if (text) {
        console.log("📥 Response:", text);
      }
    }

    // if (response.ok) {
    //   process.exit(0);
    // } else {
    //   console.error("❌ Deployment failed!");
    //   process.exit(1);
    // }
  } catch (error) {
    // if (error.name === "AbortError") {
    //   console.error("❌ Request timeout!");
    // } else {
    //   console.error("❌ Request failed!");
    //   console.error("Error:", error.message);
    // }
    // process.exit(1);
  }
}

triggerDeploy();
