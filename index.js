#!/usr/bin/env node

'use strict';
var img = require('terminal-image');
var got = require('got');


got('https://i.ytimg.com/vi/SEjv5ddGU7Y/maxresdefault.jpg', {
        responseType: 'buffer'
    })
    .then(function (image) {
        return img.buffer(image.body)
    })
    .then(function (image) {
        console.log(image + "\nhoop hemşerim nereye")
    })