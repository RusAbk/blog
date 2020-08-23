@echo off
start /wait npm run build
goto checker
:check
cls
echo Buiding in process...
:checker
tasklist /FI "IMAGENAME eq node" /NH | findstr /i node>nul
if %errorLevel% == 0 goto :check

cd blog\.vuepress\dist
git init
git config user.email "rusabk@yandex.ru"
git config user.name "Ruslan Abkadirov"
git add -A
git commit -m 'deploy'
git push -f https://github.com/Ruslanabk/ruslanabk.github.io.git master
pause
