$src = 'C:\Users\HP\.gemini\antigravity\scratch\sanu-birthday-website\vidssave.com Full Song_ Tujhe Kitna Chahne Lage _ Kabir Singh _ Mithoon Feat. Arijit Singh _ Shahid K, Kiara A low.mp4'
$dst = 'C:\Users\HP\.gemini\antigravity\scratch\sanu-birthday-website\public\assets\audio\tujhe-kitna-chahne-lage-hum.mp4'

if (-not (Test-Path -LiteralPath $src)) {
  throw "Source file not found: $src"
}

New-Item -ItemType Directory -Force -Path (Split-Path -Parent $dst) | Out-Null
Copy-Item -LiteralPath $src -Destination $dst -Force

Get-Item -LiteralPath $dst | Select-Object FullName, Length
