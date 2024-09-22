# Hi everyone! Here i'm post some tips for DevOPS area.


## Summary

<p align="start">
  <li><a href="#first_chapter">What is DevOPS?</a></li>  
  <li><a href="#second_chapter">Conventional commit specifications</a></li>  
  <li><a href="#last_chapter">Documentation</a></li>  
</p>


### Whats is DevOPS? 🧐
<span id="first_chapter">

> [!NOTE]
> First of all, i goes to explain what's is DevOPS, your importance and because we need him. If you dont interestting for these, you can go to the second chapter...
> Understand that DevOps is not about a specific technology or a particular way of developing, but rather about a set of cultures and practices that lead to successful project development. These practices are primarily related to Dev (Development) and Ops (Operations/Infrastructure). Therefore, a DevOps professional must focus not only on code quality, technologies, and frameworks used, but also on deployment, storage, memory consumption, hosting, and other factors. In summary, DevOps is about delivering what the client wants in the best possible way, within the established deadline!

Here are some important things to consider when thinking about DevOps:

- Is the client requesting these features, or am I inventing unnecessary requirements?
- Does the system/application meet the desired needs?
- Who will use the system/application?
- Can anyone use the system/application easily?
- What type of architecture does the client use or want, and is my system compatible with that architecture?
- What criteria will I use to choose the technologies and frameworks for the project?
- Does the entire team know how to use these technologies and frameworks?
- On what type of operating system will the system run? Linux?
- Is the code well-organized?
- Can I know what was done just by looking at the commit message?
- Is the code tested before the release? Does it pass the tests?
- Is it easy to clearly identify where errors are in the code?
- Should I push the code directly to the main branch? Do I have a branching structure? What branching model should I adopt?
- Are my API keys or any private code encrypted or secured?
- Is the color scheme of the system/application appealing?
- How can I automate the build and initialization processes of my code?
- What should I prioritize for delivery?
- What is the purpose of the project? What are my client's pain points, and how can I address them with my system/application?
- If any changes are made after deployment, how will the redeployment be handled? Will the system go down?
- Does my database have backups? Is it possible to recover data that is accidentally or intentionally deleted?

There are many other criteria and questions you can self-evaluate during development, and you should also ask yourself whether DevOps is truly responsible for everything mentioned above. The answer is: yes and no. The entire team, whether they like it or not, is responsible for the code, structure, tests, documentation, and so on. DevOps professionals specifically focus on ensuring the continuous integration and delivery of the project, as there are tasks that only a dedicated team can address and develop, such as testing, color choices, wireframe development, database modeling, etc. Therefore, we all have a bit of the DevOps culture within us. For those who specialize in the field, it’s about mastering the practices, characteristics, and analyses even further.

This was my analysis based on my experiences in the programming world, the interactions, and knowledge I’ve gained about DevOps. Don’t take everything said here as absolute truth, but feel free to use and adapt it as you see fit.
<span id="second_chapter">

### Conventional commit specifications 📝

> [!NOTE]
> The commit message is one of the most basic and important forms of documentation we can have, as it ensures that anyone reading your code can clearly understand what was developed or elaborated in that commit. Often, we encounter the default GitHub messages, like "UPDATE README.md" or "UPDATE index.py," and there's nothing inherently wrong with that. But imagine the following scenario: you're a developer working on a new feature, and your colleague is working on the same codebase but on a different feature. You commit, and everything seems to work perfectly. Then your colleague pushes three commits, and suddenly your feature stops working. You ask him what he changed in the code, and he claims he only worked on his part, not yours. Now, let's escalate the problem—imagine there were 500 commits. How would you identify what caused the error in the code? Which commit should you check? At what point do you need to revert? This is why having commit messages with tags that explain what is being done, their scope, specifications, and clear, concise descriptions is so important!

Therefore, I will teach you how to create a commit message standard to be followed and how to block any commits that do not comply with this rule.

> step1: create a repository or access your repo.
- Open the terminal in the main directory and execute:
```
npm install --save-dev husky
```
This command will install a hook that executes configurations on certain events. Now run this:

```
npx husky init
```
The init command simplifies the setup of Husky in a project. It creates a pre-commit script in .husky/ and updates the prepare script in package.json. Modifications can be made later to fit your workflow. Check in .husky/ for a file named commit-msg. If you don't have it, create it and write:

```
# .husky/commit-msg
npx --no-install commitlint --edit "$1"
```
Also, check your pre-commit file; it doesn’t need anything written in it.

Now go back to main directory and execute:

```
npm install --save-dev @commitlint/{cli,config-conventional}
```

This command install one Link for your commits, this link verify a sequence of rules, by default it will parse the commit rules for the conventional pattern, but you can edit these rules next. [click here to see the conventional commits rules](https://www.conventionalcommits.org/en/v1.0.0/)

```
echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
```
Now a file named commitlint.config.js has been created and you can start committing and if the commit structure is wrong, it will signal an error.
If you want to create your own irrigation system or structure, access the aforementioned file and modify it:

```
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['func', 'corr', 'docs', 'refa', 'test', 'perf']],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
  },
};

```

in this case, a valid message would be:
```
func: funcionalidade de tela de cadastro criado
```

<span id="last_chapter">

## Base documentation🗃️
<p align="start">
    <a href="https://typicode.github.io/husky/get-started.html">Husk </a>  |
    <a href="https://commitlint.js.org/guides/getting-started.html">CommitLint </a>  
</p>






