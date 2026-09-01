@echo off
title UST Technovation Society Dev Server
echo ==========================================================
echo   Starting UST Technovation Society Web Application
echo   Port: http://localhost:3000
echo ==========================================================
echo.

if not exist "node_modules\" (
    echo [INFO] Dependencies not found. Installing node_modules...
    call npm install
)

echo [INFO] Starting Vite dev server on http://localhost:3000...
call npm run dev
pause
