#!/usr/bin/env bash

echo "Making sure all deps are met"
yarn

echo "Deleting prior build"
rm -rf ../../static-assets/app/*

echo "Restoring .gitkeep"
touch ../../static-assets/app/.gitkeep

echo "Running angular build"
ng build --base-href ../../static-assets/app/

#echo "Copying app build to static assets"
#cp -rf ./dist/* ../../static-assets/app/

git add ../../static-assets/app/

#echo "Delete angular build output directory"
#rm -rf ./dist

echo "Build finished"
