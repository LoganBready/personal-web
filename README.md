Prerequisites:
You need to have NVM installed. If you are on a Mac and you have Homebrew installed you can get this installed with brew install nvm.

 installed run nvm install --lts and nvm use --lts.

Project Init:
Once you have the repository cloned there are a few commands you will need to run to get things up and running...

If NVM was installed via Homebrew you should simply be able to run ./init.sh in a terminal while within the project directory.

If you installed it via some other means you will need to run each command individually. There are only six commands so it shouldn't take long

Assets:
If there are static assets that need to be included in a deploy they should be placed within the public/ folder. Typically the only file types 
that should be added are images and fonts. CSS is handled via Next.JS. For info on how we handle
