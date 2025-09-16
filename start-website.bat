@echo off
echo Starting PRC Digital Transformation Website...
echo.
echo Opening in browser in 3 seconds...
timeout /t 3 /nobreak >nul
start http://localhost:3000/
echo.
echo Starting preview server on port 3000...
npm run preview:3000
pause