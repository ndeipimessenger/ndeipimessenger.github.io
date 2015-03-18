/*!
 * web-ndeipi v0.4.0 - messaging web application for MTProto
 * http://ndeipi.com/
 * Copyright (C) 2014 Ndeipi Messenger <igor.beatle@gmail.com>
 * http://ndeipi.com//blob/master/LICENSE
 */

chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create('../index.html', {
  	id: 'web-ndeipi-chat',
    innerBounds: {
      width: 1000,
      height: 700
    },
    minWidth: 320,
    minHeight: 400,
    frame: 'chrome'
  });
});
