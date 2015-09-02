#!/bin/sh

DEPLOY_DIR=public
S3BUCKET=s3://collect.locarise.com


# Check s3cmd version

VERSION=`s3cmd --version | cut -d' ' -f3-`
if ./node_modules/.bin/semver "$VERSION" --range '>=1.5.x || >=1.5.0-rc1' >> /dev/null ; then
  echo ". s3cmd version OK"
else
  echo "! Your s3cmd version is too low, not installed, or you did not install the semver package."
  exit
fi

# Go !
npm run clean && NODE_ENV=production webpack -p --config webpack.production.js

echo " >>> synchronizing files to s3..."
s3cmd sync --acl-public --add-header "Cache-Control: public, must-revalidate, proxy-revalidate, max-age 86400" \
  $DEPLOY_DIR/* $S3BUCKET
