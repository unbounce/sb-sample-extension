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
5. Open the apps sidebar panel and scroll down until you see "Test Your App".
6. Set the port your app is running on and click Add.
7. Your app will now be displayed in the sidebar. Press the + button in the corner.
8. Voila - you are now using the local version your app running on your machine.
9. To remove your app click "clear".

## How Pull Request (PR) Reviews are done

1. `sb-apps-admin` GitHub user will review the PR. This will be one of Unbounce's Smart Builder developers, all of whom are familiar with the Builder, SDK, and Apps. This user should already have read-only access to your repository.
2. `sb-apps-admin` will either approve, comment, or request changes on the PR, based on the below details. We are not here to change your App or code, but make sure it's safe to release in production and set up the App for success for future iterations
3. Upon PR approval, you will be responsible for merging to `main` branch. We have a system in place to get the latest changes to your `main` branch, transpile the code, and release the JavaScript file and any assets to the marketplace

### Security concerns

- Hardcoding secrets, tokens, API keys, etc should be avoided. If the App requires the user to enter their API Key, avoid storing it in the schema or in scripts. Look into [Oauth Flow](https://unbounce-sdk.notion.site/Apps-Authentication-172473820c8c46929d41d0108a3f857b) if necessary
- Look out for any XSS or badly stringified code in the `Script` component from the `smart-builder-sdk`
- Avoid storing or displaying Unbounce App user's (especially sensitive) data on to the published page

### General coding practices

- Use appropriate and meaningful naming conventions. This helps reduce unnecessary/obvious comments in code
- Keep things simple. A single function should be responsible for handling a single task
- Avoid deep nesting, especially on the data/schema side. This can get extremely difficult to debug later on
- DRY (Don't Repeat Yourself) principle
- Avoid magic values. (E.G. `if (someVar === 500) vs if (someVar === MAX_HEIGHT_VALUE)`)
- The more clear and straightforward your code is, the faster it will get approved and published in the marketplace!

### Some things we will look out for

- Look for README that provides a summary of the purpose of the App and any good to knows about the code,
- Run the app within Smart Builder. We should be able to install the App to the Builder and add it as either a section or a slot. We will point out any runtime errors or logs that should not be in production.
- Ensure directory and file structures make sense. Schemas, sections, components, controls, utilities, test files, etc.
- Note anything that raises a security concern or steers away from the above coding practices. Again, the goal here is not to change your code, but make it easy to read and allow you to debug more efficiently in the future. An example is a refactoring suggestion to make the schema simpler.
- We may make a design suggestion if necessary. For example, a control should not take full height of the browser page (unless it's a modal, and even then it's questionable).
- Ensure the code has no issues, and can be transpiled into a single JavaScript file. We will check if static assets are needed.
