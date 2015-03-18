#!/bin/bash
SCRIPT=$(readlink -f "$0")
# Absolute path this script is in, thus /home/user/bin
SCRIPTPATH=$(dirname "$SCRIPT")
SCRIPTPATH_PY="$SCRIPTPATH/Launch.py"
echo $SCRIPTHPATH_PY
python $SCRIPTPATH_PY
