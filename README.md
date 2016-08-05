# VS Code Glide
### Extension for Visual Studio Code 
[![Build Status](https://travis-ci.org/vitorsalgado/vscode-glide.svg?branch=master)](https://travis-ci.org/vitorsalgado/vscode-glide)
[![Dependency Status](https://david-dm.org/vitorsalgado/vscode-glide.svg)](https://david-dm.org/vitorsalgado/vscode-glide)
![Version](https://vsmarketplacebadge.apphb.com/version/vitorsalgado.vscode-glide.svg "Marketplace")
![Installs](https://vsmarketplacebadge.apphb.com/installs/vitorsalgado.vscode-glide.svg "Installs")

Adds common Glide commands to VS Code Command Palette

## Requirements
You need to manually install Glide. 
Glide is a tool for managing the vendor directory within a Go package. 
For more information, see [Glide Github repository](https://github.com/Masterminds/glide)

## Install
* Press `Ctrl + Shift + P`
* Pick  `Extensions: Install Extension`
* Search for **vscode-glide**

## Note!
This extension has no support for commands that require user imput after execution start, like `glide get`. 
These commands are executed using the parameter `--non-interactive`. 

## Available Glide commands on Command Palette:
* `Create | Init -> glide create (init)`
* `Get -> glide get`
* `Remove | rm -> glide remove (rm)`
* `Update -> glide update (up)`
* `Install -> glide install`
* `Test | Novendor -> glide novendor (nv)`
* `Name -> glide name`
* `Tree -> glide tree`
* `List -> glide list`
* `Help -> glide help`
* `Version -> glide --version`

## Snippets
Adds a Snippet for Glide configuration file. On yaml files, it simple renders the following text:
```
package: .
import: []
```

## Usage
![how use](https://github.com/vitorsalgado/vscode-glide/raw/master/how-to.gif)

## Release Notes
https://github.com/vitorsalgado/vscode-glide/blob/master/release-notes.md


## License
MIT © [vitorsalgado](https://github.com/vitorsalgado)
