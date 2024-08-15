echo off
cls
cd build
git init
start git-gui.exe
pause
git remote add SCRP https://github.com/pythonwby/SeatChangerReactPublic.git
git push SCRP master --force
pause