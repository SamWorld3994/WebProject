@echo off
cd /d %~dp0
start cmd /k npx tailwindcss -i ./src/input.css -o ./dist/style.css --watch
