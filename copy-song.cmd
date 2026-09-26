@echo off
setlocal
set ROOT=C:\Users\HP\.gemini\antigravity\scratch\sanu-birthday-website
set SRC=%ROOT%\vidssave.com Full Song_ Tujhe Kitna Chahne Lage _ Kabir Singh _ Mithoon Feat. Arijit Singh _ Shahid K, Kiara A low.mp4
set DST=%ROOT%\public\assets\audio\tujhe-kitna-chahne-lage-hum.mp4
if not exist "%SRC%" (
  echo SOURCE NOT FOUND: "%SRC%"
  exit /b 1
)
mkdir "%ROOT%\public\assets\audio" 2>nul
if exist "%ROOT%\public\assets\audio\timro-pratiksha.mp3" del /f /q "%ROOT%\public\assets\audio\timro-pratiksha.mp3"
if exist "%ROOT%\public\assets\audio\timro-pratiksha.mp4" del /f /q "%ROOT%\public\assets\audio\timro-pratiksha.mp4"
copy /Y "%SRC%" "%DST%"
echo --- audio folder ---
dir /b "%ROOT%\public\assets\audio"
endlocal
