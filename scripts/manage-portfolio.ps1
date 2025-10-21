[CmdletBinding()]
param(
  [Parameter(Position = 0)]
  [ValidateSet('install', 'dev', 'build', 'preview', 'clean', 'all')]
  [string]$Action = 'install'
)

function Write-Info($message) {
  Write-Host "[INFO] $message" -ForegroundColor Cyan
}

function Invoke-NpmCommand([string]$arguments) {
  $npm = Get-Command npm -ErrorAction SilentlyContinue
  if (-not $npm) {
    throw "npm is not installed or not available in PATH."
  }

  $process = Start-Process -FilePath $npm.Source -ArgumentList $arguments -Wait -PassThru
  if ($process.ExitCode -ne 0) {
    throw "Command 'npm $arguments' failed with exit code $($process.ExitCode)."
  }
}

function Remove-PathSafe([string]$target) {
  if (Test-Path $target) {
    Write-Info "Removing $target"
    Remove-Item -Path $target -Recurse -Force -ErrorAction Stop
  }
}

try {
  $projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
  $projectRoot = Split-Path -Parent $projectRoot
  Set-Location -Path $projectRoot

  switch ($Action) {
    'install' {
      Write-Info "Installing project dependencies..."
      Invoke-NpmCommand 'install'
    }
    'dev' {
      Write-Info "Starting Vite dev server..."
      Invoke-NpmCommand 'run dev'
    }
    'build' {
      Write-Info "Building production bundle..."
      Invoke-NpmCommand 'run build'
    }
    'preview' {
      Write-Info "Previewing production build..."
      Invoke-NpmCommand 'run preview'
    }
    'clean' {
      Write-Info "Cleaning generated artifacts..."
      Remove-PathSafe (Join-Path $projectRoot 'dist')
      Remove-PathSafe (Join-Path $projectRoot 'node_modules')
      Remove-PathSafe (Join-Path $projectRoot 'package-lock.json')
      Write-Info "Clean complete."
    }
    'all' {
      Write-Info "Running full setup (install -> build)..."
      Invoke-NpmCommand 'install'
      Invoke-NpmCommand 'run build'
      Write-Info "Setup complete."
    }
  }
}
catch {
  Write-Error $_.Exception.Message
  exit 1
}
