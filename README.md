# String Class Implementation (with a few example methods)

### To run the tests
Chrome does not allow loading of other files, in this case the JSON file to be read while viewing an HTML file loaded directly to the browser from a file explorer.You are required to start up a static server.

Enter the following command in your Terminal, to spurn up a static file server using python:

```bash
$ python -m SimpleHTTPServer 1515
```

Then open the following link or click: [http://localhost:1515/jasmine/SpecRunner.html](http://localhost:1515/jasmine/SpecRunner.html)

or:

install jasmine node.js package to run the tests via the terminal.

```bash
$ npm install -g jasmine-node
```

You may have to use `sudo` if permissio rights errors pop up while in the installation process.

then `cd` into the project's root folder if you are not already in there. And run:

```bash
$ jasmine-node
```

If all tests should pass, you shall see this:

```bash
........

Finished in 0.009 seconds
8 test, 15 assertion, 0 failures, 0 skipped
```

---

```
The MIT License (MIT)

Copyright (c) 2015 Eugene Mutai

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
``