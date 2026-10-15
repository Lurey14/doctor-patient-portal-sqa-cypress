$ErrorActionPreference = 'Stop'

$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
Set-Location $projectRoot

$nodeVersion = (node --version).TrimStart('v')
$nodeMajor = [int]($nodeVersion.Split('.')[0])
if ($nodeMajor -notin @(22, 24) -and $nodeMajor -lt 26) {
    throw "Cypress requiere Node.js 22.x, 24.x o 26+. Version detectada: $nodeVersion"
}

$projectCache = Join-Path $projectRoot '.cache'
$env:CYPRESS_CACHE_FOLDER = Join-Path $projectCache 'Cypress'
$env:npm_config_cache = Join-Path $projectCache 'npm'
New-Item -ItemType Directory -Force -Path $env:CYPRESS_CACHE_FOLDER, $env:npm_config_cache | Out-Null

npm install --cache $env:npm_config_cache
if ($LASTEXITCODE -ne 0) {
    throw 'npm install fallo. Revisa la conexion e intenta nuevamente.'
}

node '.\scripts\cypress-cli.cjs' install
if ($LASTEXITCODE -ne 0) {
    throw 'No se pudo descargar o verificar el binario local de Cypress.'
}

Write-Host 'Cypress quedo instalado dentro del proyecto. Abre una terminal nueva y ejecuta: npm run cy:open'
