#!/bin/bash

cd src
TODAY=`date +"%Y%m%d"`
EXT_NAME="../seenthisify-${TODAY}.zip"
zip -r $EXT_NAME *
cd ..
