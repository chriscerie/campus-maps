## Contributing to Campus Map

### Contribution Prerequisites

To contribute, you will need:

* Git
* [Node](https://nodejs.org/en/)
* [Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)

### Steps to contribute

1. After cloning, run `yarn` to fetch any dependencies
2. Check any branches or pull requests for similar files/features to avoid conflicts
3. Pull changes with `git pull`
4. If working on a new feature/bug, create a new branch with `git checkout -b branch-name`
5. Work on changes
6. Run tests with `yarn test`
7. Lint and format code with `yarn format`
8. Push changes and create a pull request
    - If changes are not ready to be reviewed yet, create a draft pull request instead
        - Once changes are ready, mark PR as `Ready for reviewed`
9. Ask another member to review pull request and merge to main

### Git Styling

1. Commit messages should use imperative mood
    - Prefer `Fix login` over `Fixed login`
2. Branch names should be all lowercase with dashes to separate words
    - Prefer `fix-login` over `FixLogin`