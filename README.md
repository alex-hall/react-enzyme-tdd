## How to use the repository

The idea is for the reader of this repository to walk each and every commit, reading the commit
messages to understand the thought process of how to set up and test drive an application.

In order to do this, we must first start from the beginning of the repository, so let's pull the first SHA:

```
    git rev-list --max-parents=0 HEAD
```

Next, let's start the process of an interactive rebase:

```
    git rebase -i <PUT_SHA_HERE>
```

Next, let's use vim to replace every instance of pick with edit so we can stop at every commit:

```
    :%s/pick/edit/g
```

Finally, lets write and quit the file, which will then begin the rebase:

```
    :wq
```

From here, you can read each and every commit with the git show command:

```
    git show <PUT_SHA_HERE>
```

And you can open the repo in your favorite editor. After you've read the commit, continue to the next:

```
    git rebase --continue
```

Keep doing this until you're at the end, or quit at any point in time:

```
    git rebase --abort
```


### Run tests for the project

```
    yarn test
```
