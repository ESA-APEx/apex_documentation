# Welcome to the APEx documentation portal

This GitHub repository serves as the central hub for managing the APEx documentation portal.
The content generation is facilitated by [Quarto](https://quarto.org/), an open-source scientific and technical publishing system.

## Installing Python dependencies

Some documentation pages may include Python code to enable interactive visualizations or dynamic content generation.
To support the creation of these pages, it's essential to install all the necessary dependencies. This can be done by
executing the following command:

```bash
pip install -r requirements.txt
```

## Previewing Documents

To preview the content and any changes you make, it's crucial to install the Quarto CLI beforehand.
Once installed, you can preview the content by running the following command in your terminal:

```bash
quarto preview .
```

This command will initiate a local preview of the documentation portal, allowing you to review your changes before committing them.

## Code quality: pre-commit hooks

This repository provides a [`pre-commit`](https://pre-commit.com/) config
to manage code quality and consistency at commit time.
`pre-commit` is a generic CLI tool and framework for managing git pre-commit hooks,
not only for quick quality checks (e.g. linting and syntax checks)
but also for code formatting fixes and more.

Setup instructions (one time only):

- Install the generic `pre-commit` tool.
  It is recommended to install it globally on your system
  (e.g. using your OS package manager, conda, homebrew, [pipx](https://pipx.pypa.io), …)
  so you can use it easily across multiple projects.
  You can also install it in the virtual environment of the project,
  but be warned that you might run into troubles with external git tools
  running outside of this environment.
- Install the project-specific git hooks
  (as defined by the `.pre-commit-config.yaml` config)
  into the project by running this from the project root:

      pre-commit install

Usage instructions (every time you commit):

- When you `git commit`, the pre-commit hooks will run and block the commit if one or more problems are detected.
- Fix reported issues and try to commit again.
- Some hooks fix issues automatically and edit your files in-place.
  This might feel intrusive at first, but once you get the hang of it,
  you'll embrace it as a tool that relieves you from managing small, tedious details.
  Tip: leverage the *staging* feature of git to stage your own changes
  and keep them separate from the automatic pre-commit fixes for easy review.

## Deliverables

Since the content of this repository is also included in a deliverable, we can use the Quarto framework to generate the
deliverable content. To preview the deliverable, execute the following command:

```bash
quarto preview _deliverables/<name>.md
```

To generate the corresponding Word document, use the following command:

```bash
quarto render _deliverables/<name>.md --to docx
```
