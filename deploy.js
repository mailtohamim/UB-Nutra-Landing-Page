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
      await response.json();

      // Deployment workflow started successfully
      console.log("🚀 Deployment workflow started!");
    } else {
      await response.text();

      // Unexpected response format
      console.log("⚠️ Unexpected response format:");
    }
  } catch (error) {
    console.error("❌ Error triggering deployment:", error);
  }
}

triggerDeploy();
