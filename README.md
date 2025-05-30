# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/b790dc12-2d3b-49a8-98bd-5de2954368a7

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/b790dc12-2d3b-49a8-98bd-5de2954368a7) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Deploy with Lovable

Simply open [Lovable](https://lovable.dev/projects/b790dc12-2d3b-49a8-98bd-5de2954368a7) and click on Share -> Publish.

### Deploy to GitHub Pages

This project has been configured to be deployed to GitHub Pages. The following changes have been made:

1. Added a base path in `vite.config.ts` for GitHub Pages deployment
2. Changed from `BrowserRouter` to `HashRouter` for better compatibility with GitHub Pages
3. Added GitHub Actions workflow file in `.github/workflows/deploy.yml` for automatic deployment

To deploy to GitHub Pages:

1. Push your changes to the main branch of your GitHub repository
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at `https://[your-username].github.io/livs-ai-insights-hub/`

If you need to build the project locally:

```sh
npm run build
```

This will create a `dist` folder with the built files.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
