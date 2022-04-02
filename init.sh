#! /bin/bash
export NVM_DIR="$HOME/.nvm"
    [ -s "$(brew --prefix)/opt/nvm/nvm.sh" ] && . "$(brew --prefix)/opt/nvm/nvm.sh"

npm install
nvm use
nvm install
nvm exec
nvm run
nvm which