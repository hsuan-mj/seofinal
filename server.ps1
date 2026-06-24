# --- LIGHTWEIGHT POWERSHELL WEB SERVER ---
# Config
$port = 8080
$prefix = "http://localhost:$port/"
$webRoot = Get-Item $PSScriptRoot

# Create HTTP listener
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)

# MIME mapping
$mimeTypes = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "application/javascript; charset=utf-8"
  ".png"  = "image/png"
  ".jpg"  = "image/jpeg"
  ".ico"  = "image/x-icon"
}

Write-Host "=========================================" -ForegroundColor Yellow
Write-Host "  AURA Shoes Web Server Starting...      " -ForegroundColor Yellow
Write-Host "  Prefix: $prefix" -ForegroundColor White
Write-Host "  Root:   $webRoot" -ForegroundColor White
Write-Host "  Press Ctrl+C in this terminal to stop." -ForegroundColor Gray
Write-Host "=========================================" -ForegroundColor Yellow

try {
  $listener.Start()
  
  # Launch browser
  Start-Process "http://localhost:$port/index.html"
  
  # Request loop
  while ($listener.IsListening) {
    $context = $listener.GetContext()
    $req = $context.Request
    $res = $context.Response
    
    # Resolve path
    $rawPath = $req.Url.LocalPath
    if ($rawPath -eq "/") { $rawPath = "/index.html" }
    
    $filePath = Join-Path $webRoot $rawPath
    
    Write-Host "$(Get-Date -Format 'HH:mm:ss') - $($req.HttpMethod) $($req.Url.PathAndQuery)" -ForegroundColor Cyan
    
    if (Test-Path $filePath -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
      $mime = $mimeTypes[$ext]
      if ($null -eq $mime) { $mime = "application/octet-stream" }
      
      $res.ContentType = $mime
      
      # Read bytes
      $bytes = [System.IO.File]::ReadAllBytes($filePath)
      $res.ContentLength64 = $bytes.Length
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
      
      Write-Host "  200 OK ($mime, $($bytes.Length) bytes)" -ForegroundColor Green
    } else {
      Write-Host "  404 Not Found" -ForegroundColor Red
      $res.StatusCode = 404
      $res.ContentType = "text/html; charset=utf-8"
      $errHtml = "<html><body><h1>404 Not Found</h1><p>File $rawPath was not found on this server.</p></body></html>"
      $bytes = [System.Text.Encoding]::UTF8.GetBytes($errHtml)
      $res.ContentLength64 = $bytes.Length
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
    }
    
    $res.OutputStream.Close()
  }
}
catch {
  Write-Host "Server error occurred: $_" -ForegroundColor Red
}
finally {
  if ($null -ne $listener) {
    $listener.Stop()
    $listener.Close()
    Write-Host "Server stopped." -ForegroundColor Yellow
  }
}
