# Deployment Guide

Manual deployment system for UB Nutra Landing Page using webhook triggers.

## Quick Start

Trigger a deployment from your local machine:

```bash
node deploy.js
```

### Expected Output

```
✅ Deployment triggered successfully!
📊 Status: 200 OK
📥 Response: { "success": true }
```

## How It Works

### Deployment Flow

```
Local Machine → deploy.js → Webhook → Production Server → Deploy
```

1. Run `deploy.js` from your local machine
2. Script sends request to webhook
3. Webhook processes request and triggers deployment
4. Server pulls latest code and rebuilds application

## Prerequisites

- Node.js 18+ installed
- Network access to deployment server

## Adding to package.json (Optional)

Add a deploy script to `package.json`:

```json
{
  "scripts": {
    "deploy": "node deploy.js"
  }
}
```

Then run with:

```bash
npm run deploy
```

## Best Practices

✅ **Test locally first** before deploying  
✅ **Review changes** before triggering deployment  
✅ **Monitor logs** after deployment  
✅ **Document changes** in version control

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
