# Dev Container for Gatsby v5

This dev container provides a consistent development environment for this Gatsby v5 project with all required dependencies pre-installed.

## What's Included

- **Node.js 18** (required for Gatsby v5)
- **Yarn** package manager
- **System dependencies** for image processing:
  - libvips / libvips-dev (for gatsby-plugin-sharp)
  - pkg-config
  - python3
  - build-essential (gcc, g++, make)
- **VS Code/Cursor extensions**:
  - ESLint
  - Prettier
  - Styled Components syntax highlighting

## How to Use

### 1. Open in Container

In VS Code or Cursor:
1. Open the Command Palette (Cmd/Ctrl + Shift + P)
2. Select **"Dev Containers: Reopen in Container"**
3. Wait for the container to build (first time takes ~2-3 minutes)
4. Dependencies will auto-install via `yarn install` after container creation

### 2. Start Development Server

Once inside the container, run:

```bash
yarn develop --host 0.0.0.0
```

**Important:** The `--host 0.0.0.0` flag ensures the server binds to all interfaces, allowing port forwarding to work correctly.

### 3. Access the Site

- **Dev Server:** http://localhost:8000
- **GraphiQL:** http://localhost:9000

Both ports are automatically forwarded from the container to your host machine.

## Verification Steps

To verify everything is working:

1. **Check Node version:**
   ```bash
   node --version  # Should be v18.x.x
   ```

2. **Check Yarn:**
   ```bash
   yarn --version
   ```

3. **Verify libvips installation:**
   ```bash
   pkg-config --modversion vips  # Should output version number
   ```

4. **Test Gatsby build:**
   ```bash
   yarn build
   ```

## Troubleshooting

### Container fails to build
- Check Docker Desktop is running
- Try rebuilding: Command Palette → "Dev Containers: Rebuild Container"

### Port 8000 or 9000 already in use
- Stop any local Gatsby processes running on your host
- Or change the ports in `.devcontainer/devcontainer.json`

### Sharp installation fails
- The Dockerfile installs all required libvips dependencies
- If issues persist, rebuild the container to ensure fresh apt packages

## Environment Variables

- `GATSBY_TELEMETRY_DISABLED=1` - Disables Gatsby usage telemetry

## Customization

Edit `.devcontainer/devcontainer.json` to:
- Add more VS Code extensions
- Change port forwarding
- Modify environment variables
- Adjust editor settings
