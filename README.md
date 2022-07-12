# sb-sample-extension

## How to get started

Welcome to the world of creating Apps for the Smart Builder! Please fork this repository as your own and rename it to represent the App that you are developing.

Here are the steps to get started by setting up your repository settings.

1. Run `npm run init-repo-settings`. This will run a script that will prompot you for your GitHub username, repository name, and Personal Access Token. please see these [docs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

To generate a Personal Access Token:

- Go to your [Developer Settings' Personal Access Tokens section](https://github.com/settings/tokens)
- You should see "Personal access tokens". Generate a new one.
- The expiration doesn't matter because you will only run this once. It is recommended that you set it for a short period of time.
- Click `repo` so that the access token has full access to repo settings.

Once you run the script and fill in the prompts, you should have the updated branch protection settings.

2. Next, you will need to add `sb-apps-admin` as a collaborator. This is a single Unbounce Developer account that will conduct the PR reviews for app submission approval.

At this point, you should be good to go. Follow the instructions below to start developing!

**IMPORTANT!**
When creating a Pull Request from the forked repository, the default base repository is set to the repository from which you forked, and currently there has [not been a way to ensure the base repository and branch is set to the one that was forked](https://stackoverflow.com/questions/61118665/can-i-set-default-repository-for-pull-requests-from-fork#comment125495272_70968747). While we are investigating a better workflow, the current workaround is to ensure that the base repo and branch is correct upon initialization of the Pull Request. See screenshot [here](https://user-images.githubusercontent.com/6353819/178614001-7abf11ce-19f1-40c8-8abb-ce89415b4a04.png)

## Developing apps locally using the Smart Builder

1. Run `npm i` from the root directory.
2. Run `npm start`. This will build the app and watch for changes.
3. In a different terminal, run `npm run serve`
4. Go to app.unbounce.com and create a Smart Builder page on the client where local development has been enabled.
5. Open the apps sidebar panel and scroll down until you see "Add your own extension". Click "Add Manifest"
6. Copy and paste the `manifest.json` file from this repo into the box.
7. Now scroll up and find your app in the sidebar. Press the + button in the corner.
8. Voila - you are now using the local version your app running on your machine.
