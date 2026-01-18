# Deployment Guide

Automated deployment system for UB Nutra Landing Page using n8n webhook triggers.

## Overview

This project uses a simple Node.js script to trigger deployments via an n8n webhook. When executed, it sends a GET request to the webhook which then triggers the Easypanel deployment process.

## Files

- **`deploy.js`** - Deployment trigger script
- **`.github/workflows/deploy.yml`** - GitHub Actions workflow for automatic deployment

## Quick Start

### Manual Deployment

Trigger a deployment manually from your local machine:

```bash
node deploy.js
```

### Expected Output

```
✅ Deployment triggered successfully!
📊 Status: 200 OK
📥 Response: { "success": true }
```

## GitHub Actions

The repository includes a GitHub Actions workflow that automatically triggers deployment when code is pushed to the main branch.

### Automatic Triggers

- **Push to main/master branch** - Automatically deploys
- **Manual trigger** - Run from GitHub Actions tab

### Workflow Configuration

Location: `.github/workflows/deploy.yml`

The workflow:

1. Checks out the code
2. Sets up Node.js 20
3. Runs `deploy.js`
4. Reports success/failure

### Environment Variables in GitHub Actions

The following variables are automatically passed:

- `GITHUB_REF_NAME` - Branch name
- `GITHUB_SHA` - Commit hash
- `GITHUB_ACTOR` - User who triggered the action
- `GITHUB_REPOSITORY` - Repository name

## How It Works

### Deployment Flow

```
Push to GitHub → GitHub Actions → deploy.js → n8n Webhook → Easypanel → Deploy
```

1. Code is pushed to GitHub
2. GitHub Actions workflow is triggered
3. `deploy.js` script executes
4. GET request sent to n8n webhook
5. n8n processes webhook and triggers Easypanel
6. Easypanel pulls latest code and rebuilds container

### n8n Webhook

**URL:** `https://n8n.bikiran.com/webhook/dfb8c182-cca5-4dd7-a3c5-6512b29b5596`

**Method:** GET

**Response:** JSON with deployment status

### Script Features

- ✅ Simple GET request using fetch API
- ✅ 30-second timeout protection
- ✅ Automatic response parsing (JSON/text)
- ✅ Clear console output with emojis
- ✅ Error handling with graceful degradation

## Manual Deployment from Local

### Prerequisites

- Node.js 18+ installed
- Network access to n8n.bikiran.com

### Steps

1. Open terminal in project directory
2. Run the deploy script:
   ```bash
   node deploy.js
   ```
3. Wait for confirmation message
4. Check Easypanel for deployment progress

### Adding to package.json (Optional)

You can add a deploy script to `package.json`:

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

## Troubleshooting

### Deployment Not Triggering

**Check:**

1. Network connectivity to n8n.bikiran.com
2. Webhook URL is correct
3. n8n workflow is active
4. Easypanel service is configured

**Solution:**

```bash
# Test the webhook directly
curl https://n8n.bikiran.com/webhook/dfb8c182-cca5-4dd7-a3c5-6512b29b5596
```

### GitHub Actions Failing

**Check:**

1. View workflow logs in GitHub Actions tab
2. Verify Node.js version compatibility
3. Check if deploy.js file exists in repository

**Solution:**

- Go to Actions tab in GitHub
- Click on failed workflow
- Review error logs
- Fix issues and push again

### Timeout Errors

**Symptoms:**

- Script hangs for 30 seconds
- "Request timeout" error

**Solutions:**

1. Check n8n service status
2. Verify webhook URL is accessible
3. Check network/firewall settings

### Response Errors

**Symptoms:**

- Non-200 status codes
- Error responses from webhook

**Solutions:**

1. Check n8n workflow configuration
2. Verify Easypanel credentials
3. Review n8n execution logs

## Security Considerations

### Webhook Security

⚠️ **Important:** The webhook URL in `deploy.js` is currently public. Anyone with this URL can trigger deployments.

**Recommendations:**

1. **Move to Environment Variable**

   ```javascript
   const WEBHOOK_URL = process.env.DEPLOY_WEBHOOK_URL || "fallback-url";
   ```

2. **Add GitHub Secret**
   - Go to Repository Settings → Secrets and variables → Actions
   - Add `DEPLOY_WEBHOOK_URL` secret
   - Update workflow to use: `${{ secrets.DEPLOY_WEBHOOK_URL }}`

3. **Secure n8n Webhook**
   - Add authentication header
   - Whitelist IP addresses
   - Use short-lived tokens

4. **Rate Limiting**
   - Configure n8n to limit requests
   - Add cooldown period between deployments

## Advanced Configuration

### Custom Timeout

Edit `deploy.js` to change timeout (default: 30 seconds):

```javascript
const timeoutId = setTimeout(() => controller.abort(), 60000); // 60 seconds
```

### Add Query Parameters

Append parameters to webhook URL:

```javascript
const WEBHOOK_URL =
  "https://n8n.bikiran.com/webhook/dfb8c182-cca5-4dd7-a3c5-6512b29b5596?env=production";
```

### Send Data with GET Request

Add URL parameters for additional context:

```javascript
const params = new URLSearchParams({
  branch: "main",
  commit: "abc123",
  environment: "production",
});
const response = await fetch(`${WEBHOOK_URL}?${params}`);
```

## Monitoring

### Check Deployment Status

1. **GitHub Actions**
   - Repository → Actions tab
   - View workflow runs and logs

2. **Easypanel**
   - Log into Easypanel dashboard
   - Check deployment logs and status

3. **n8n**
   - Log into n8n instance
   - View webhook execution history

### Deployment Logs

**GitHub Actions:** Logs available for 90 days

**Easypanel:** Check container logs:

```bash
docker logs <container-name>
```

## Best Practices

✅ **Always test locally first** before pushing to main  
✅ **Review changes** before triggering deployment  
✅ **Monitor logs** after deployment  
✅ **Use branches** for development (deploy only main)  
✅ **Keep webhook URL secure** via environment variables  
✅ **Set up notifications** for deployment failures  
✅ **Document changes** in commit messages  
✅ **Test webhook** before relying on it

## Rollback

If a deployment fails:

1. **Revert Code**

   ```bash
   git revert <commit-hash>
   git push origin main
   ```

2. **Manual Easypanel Rollback**
   - Go to Easypanel dashboard
   - Select previous deployment
   - Click "Redeploy"

3. **Emergency Fix**
   - Fix code locally
   - Test thoroughly
   - Deploy via GitHub push

## Support

### Issues

If you encounter problems:

1. Check this README
2. Review GitHub Actions logs
3. Check Easypanel deployment logs
4. Verify n8n workflow status
5. Test webhook manually with curl

### Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Easypanel Docs](https://easypanel.io/docs)
- [n8n Documentation](https://docs.n8n.io/)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

## Changelog

### v1.0.0

- Initial deployment script
- GitHub Actions integration
- n8n webhook trigger
- GET request method
- Error handling and timeouts
