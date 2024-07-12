
# REFERENCE: https://github.com/microsoft/vscode-dev-containers/tree/main/containers/typescript-node
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:18

# install angualr 16 cli
# RUN npm install -g @angular/cli@16

# epose angular serve port
EXPOSE 4200