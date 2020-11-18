#!/usr/bin/env bash

echo "Making sure all deps are met"
# TODO: re-enable yarn

# Disabled as relay is currently not used.
# echo "Compiling relay stuff"
# yarn relay

echo "Deleting prior build"
rm -rf ../../static-assets/app/*

echo "Restoring .gitkeep"
touch ../../static-assets/app/.gitkeep

echo "Running angular build"
ng build

#echo "Copying app build to static assets"
#cp -rf ./dist/* ../../static-assets/app/

git add ../../static-assets/app/

#echo "Delete angular build output directory"
#rm -rf ./dist

echo "Build finished"
