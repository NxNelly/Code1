__Code__ 
## Git

Source control system

	- Handles small and bug projects
	- Branching and merging
	racking changes in the source code, enabling multiple developers to work together on non-linear development
	
	
## Node Js

	- allows developers to build server-side applications 
	- High performance
	- JavaScript


## Typescript Compiler

Compiles projects to javascriptt

	- makes it easier to create large and complex projects
	- add type safety (prevents errors)

## Visual Studio Code

	- Environment
	- Text Editor
	- Runs java script

## ESLint

Checks code for common problems (syntax errors, formatting issues, code style violations, and potential bugs)

## Git Graph

Pictorial representation of git
 helpful to developer teams to share their Git branching strategies


## Check for correct installation and version:
	- Open console
	- Type git --version. The result should be something like git version 2.34.1.
	- Type node --version. The result should be something like v20.14.0.
	- Type tsc --version. The result should be something like Version 4.5.4.
![image](https://github.com/NxNelly/Code1/assets/173050947/43b45af5-b0b7-40d0-941b-5af35833c109)



## Repositories: 
Code1 (Notes)
Caffeine ++ (team)

## Markdown:

Create markdown page:

	- Codename.md (automatically creates markdown)
 ### Syntax

__bold text__

_cursive_

___bold and cursive___

tiefgestellt <sub>lalala

hochgestellt <sup>lalala


## Other Git Things

tracked files:

- Files tracked by Git are aware of the changes or commits 
- you can revert to previous versions of the file
- on the list of tracked files

untracked files:

- does not keep history of commits

how to:

git update-index command - [git update-index --skip-worktree < file>]

undo - [git update-index --no-skip-worktree < file>]

Removing all untracked files:

Steps to delete untracked Git files
- Run git clean -n to see a dry run.
- Run git clean -f to force untracked file deletion.
- Use git clean -f -d to remove untracked directories.
- Use git clean -f -x to remove untracked . gitignore files.
- Add the -i switch to do an interactive git clean.

## merge, rebase and squash

__merge:__ putting a forked history back together again

independent lines of development - integrate them into a single branch

preserves history

__rebase:__ changes the base of the developer's branch from one commit to another

rewrites history - streamlining complex history

dont use with teammates
different parent notes

__spuash:__ clean up and simplify your commit history

before sharing your work with team

adding commit chandes onto Parent commit