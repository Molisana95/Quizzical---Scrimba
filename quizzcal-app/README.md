# This is a Scrimba project, only posted as a personal exercise.

## GitHub Pages deployment

This project is set up to be published on GitHub Pages.

### What is already configured
- Vite is using the correct base path for the repository: `/Quizzical---Scrimba/`
- The app builds from the `quizzcal-app` folder
- GitHub Actions workflows are included to build and publish the site

### How to publish it
1. Push the project to GitHub.
2. Open your repository on GitHub and go to Settings → Pages.
3. Under "Build and deployment", choose "GitHub Actions".
4. Make sure the branch used by the workflow is the one you want to deploy from (currently the workflow is set to trigger on `main` and `quizzcal-app-branch_with_original_folder_order`).
5. After the workflow runs successfully, GitHub Pages will publish the site at:
   `https://molisana95.github.io/Quizzical---Scrimba/`

### Local development
Run the app locally with:

```bash
npm install
npm run dev
```
