# meet-auto-quit
A Greasemonkey/Tampermonkey script that automatically leaves a meeting if the quorum decreases to 50% (when other people start leaving).

## How to use
1. Install a JavaScript injector extension (such as [GreaseMonkey](https://addons.mozilla.org/pt-BR/firefox/addon/greasemonkey/) or [TamperMonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)) in your browser.
2. Open the extension in your browser and search for the “Import from URL” option (in Tampermonkey, it’s under “Utilities”).
3. Paste [this url](https://raw.githubusercontent.com/packland/meet-auto-quit/main/main.js) and click install.
4. You’re all set!

## Optional Settings
If you want to customize the quitting behavior, go to “Installed Userscripts” and modify the following variables:

min_reuniao = 2 << The minimal quorum before the “auto-quit” starts monitoring and quitting.
min_quorum = 0.5 << If the meeting quorum goes below this percentage (0.5 means 50% of its maximum), you will automatically quit.
