#!/usr/bin/env bash
#
# Deploy the built site to an Alibaba Cloud OSS bucket configured for
# static website hosting.
#
# Requires ossutil v2:  https://help.aliyun.com/zh/oss/developer-reference/install-ossutil
# Credentials come from `ossutil config` or from the standard environment
# variables (OSS_ACCESS_KEY_ID / OSS_ACCESS_KEY_SECRET); this script never
# takes them as arguments, so they stay out of your shell history.
#
# Usage:
#   OSS_BUCKET=my-bucket OSS_REGION=cn-hongkong ./scripts/deploy-oss.sh
#
set -euo pipefail

BUCKET="${OSS_BUCKET:?set OSS_BUCKET to the target bucket name}"
# Region IDs carry no "oss-" prefix. Passing oss-cn-hongkong here makes
# ossutil build oss-oss-cn-hongkong.aliyuncs.com, which fails to resolve.
REGION="${OSS_REGION:-cn-hongkong}"
DIST="$(cd "$(dirname "$0")/.." && pwd)/dist"

command -v ossutil >/dev/null || { echo "ossutil not found on PATH" >&2; exit 1; }

echo "==> Building"
npm run build

[ -f "$DIST/index.html" ] || { echo "no dist/index.html — build failed?" >&2; exit 1; }
[ -f "$DIST/404.html" ]   || { echo "no dist/404.html" >&2; exit 1; }

echo "==> Syncing $DIST -> oss://$BUCKET (region $REGION)"
# --delete removes objects at the destination that no longer exist locally,
# which keeps stale hashed bundles from accumulating.
ossutil sync "$DIST/" "oss://$BUCKET/" --delete -f --region "$REGION"

# Asset filenames are content-hashed by Vite, so they can be cached hard.
# The HTML entry points must not be, or visitors keep getting the old bundle.
echo "==> Setting cache headers"
ossutil set-props "oss://$BUCKET/assets/" -r -f --region "$REGION" \
  --cache-control "public, max-age=31536000, immutable" \
  --metadata-directive update
for f in index.html 404.html; do
  ossutil set-props "oss://$BUCKET/$f" -f --region "$REGION" \
    --cache-control "no-cache" \
    --metadata-directive update
done

cat <<NOTE

==> Done.

Bucket static website settings must be:
  Default homepage : index.html
  Default 404 page : 404.html
  Subdirectory homepage: off (this is a single-page site)

Reminder: HTML served from the default *.aliyuncs.com bucket domain is
forced to download rather than render, so a custom domain must be bound to
the bucket. Outside mainland China (cn-hongkong included) that domain needs
no ICP filing.
NOTE
