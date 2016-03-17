chrome.commands.onCommand.addListener(function(command) {
  // console.log(command);

  switch (command){
    case 'move-to-left':
    case 'move-to-right':
        chrome.tabs.query({active: true}, function(result){
            // console.log(result);

            var tabs = [];
            for (i in result) {
                tabs.push(result[i].id);
            }

            chrome.tabs.move(tabs, {index: command == 'move-to-left' ? 0 : -1});
        });
        break;
  }
});
