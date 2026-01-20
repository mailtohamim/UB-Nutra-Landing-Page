# Docker Deployment Guide

## Production Docker Setup

This project includes a production-ready Docker configuration with security best practices.

### Security Features

- **Multi-stage build** - Minimizes final image size
- **Non-root user** - Application runs as unprivileged user (nextjs:1001)
- **Alpine Linux** - Minimal attack surface
- **No unnecessary dependencies** - Only production dependencies in final image
- **Signal handling** - dumb-init for proper process management
- **Health checks** - Built-in health monitoring
- **Security options** - no-new-privileges enabled

### Building the Image

```bash
# Build the Docker image
docker build -t ub-nutra-app:latest .

# Build with BuildKit for better caching
DOCKER_BUILDKIT=1 docker build -t ub-nutra-app:latest .
```

### Running the Container

#### Using Docker

```bash
# Run the container
docker run -p 3000:3000 --name ub-nutra-app ub-nutra-app:latest

# Run with environment variables
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  --name ub-nutra-app \
  ub-nutra-app:latest

# Run in detached mode
docker run -d -p 3000:3000 --name ub-nutra-app ub-nutra-app:latest
```

#### Using Docker Compose

```bash
# Start the application
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the application
docker-compose down

# Rebuild and restart
docker-compose up -d --build
```

### Environment Variables

Create a `.env.production` file for production environment variables:

```env
NODE_ENV=production
PORT=3000
# Add your other environment variables here
```

### Health Check

The container includes a health check that monitors the application status:

```bash
# Check container health
docker inspect --format='{{.State.Health.Status}}' ub-nutra-app
```

### Container Management

```bash
# View running containers
docker ps

# View container logs
docker logs ub-nutra-app
docker logs -f ub-nutra-app  # Follow logs

# Stop the container
docker stop ub-nutra-app

# Remove the container
docker rm ub-nutra-app

# Remove the image
docker rmi ub-nutra-app:latest
```

### Security Scanning

Scan the image for vulnerabilities:

```bash
# Using Docker scan (Snyk)
docker scan ub-nutra-app:latest

# Using Trivy
trivy image ub-nutra-app:latest
```

### Production Deployment

For production deployment with orchestration:

#### Docker Swarm

```bash
docker stack deploy -c docker-compose.yml ub-nutra
```

#### Kubernetes

Generate Kubernetes manifests:

```bash
# Using Kompose
kompose convert -f docker-compose.yml
```

### Best Practices

1. **Always use specific versions** in production
2. **Scan images regularly** for vulnerabilities
3. **Use secrets management** for sensitive data
4. **Set resource limits** in production
5. **Enable logging drivers** for centralized logging
6. **Use image signing** for supply chain security

### Troubleshooting

If the container fails to start:

```bash
# Check logs
docker logs ub-nutra-app

# Inspect container
docker inspect ub-nutra-app

# Execute commands inside container
docker exec -it ub-nutra-app sh

# Check health status
docker inspect --format='{{json .State.Health}}' ub-nutra-app | jq
```

### Performance Optimization

- Image size: ~150-200MB (Alpine-based)
- Build time: Optimized with layer caching
- Security: Non-root user, minimal dependencies
- Startup time: Health check after 40s start period
