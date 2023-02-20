#!/bin/bash

if [ $1 == "run-one" ]; then
    node one.js
fi

if [ $1 == "run-two" ]; then
    node two.js
fi

if [ $1 == "run-both" ]; then
    node one.js
    node two.js
fi
