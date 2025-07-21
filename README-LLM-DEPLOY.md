# LLM Visualization Deployment

This repository has been configured for automatic deployment of the LLM Visualization to GitHub Pages.

## What's Deployed

- **3D Interactive LLM Visualization**: A WebGL-based interactive 3D model showing how GPT-style language models work
- **Educational Walkthrough**: Step-by-step explanation of the LLM inference process
- **Working Models**: Includes a small GPT nano model (trained for sorting) with pre-computed weights

## Models Included

- `gpt-nano-sort-model.json` (466KB) - Small GPT model weights for sorting demo
- `gpt-nano-sort-t0-partials.json` (247KB) - Pre-computed partial execution data
- `native.wasm` (30KB) - WebAssembly binary for high-performance computation

## Deployment Features

- **Automatic deployment** via GitHub Actions on push to main branch
- **Static site generation** using Next.js with optimized builds
- **Model verification** ensures all required files are present before deployment
- **Submodule support** for emsdk and minGPT dependencies
- **Clean build** with only LLM-related content (no personal information)

## Local Development

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Type checking
yarn typecheck

# Linting
yarn lint
```

## GitHub Pages Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch. The deployment:

1. Checks out code with submodules
2. Installs dependencies with yarn
3. Verifies model files are present
4. Builds the application
5. Deploys to GitHub Pages

## Technical Stack

- **Next.js 13** with App Router
- **TypeScript** for type safety
- **WebGL/WebGPU** for 3D rendering
- **WebAssembly** for computational performance
- **Tailwind CSS** for styling

## Model Information

The visualization includes GPT model configurations for different sizes:
- **GPT Nano**: 3-token vocabulary, 3 layers, 48 dimensions (working demo)
- **GPT2 Small**: 50K vocabulary, 12 layers, 768 dimensions (shape only)
- **GPT2 Large**: 50K vocabulary, 48 layers, 1600 dimensions (shape only)

The working demo uses the nano model to demonstrate sorting of letters A, B, C.