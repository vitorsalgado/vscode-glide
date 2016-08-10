'use strict';

const vscode = require('vscode');
const path = require('path');
const fs = require('fs');
const prompt = require('./messages_handler');

require('shelljs/global');

const root = vscode.workspace.rootPath;
const yaml = path.join(root, 'glide.yaml');
const output = vscode.window.createOutputChannel('Glide');
const statusbar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);

const nonInteractive = process.env && typeof process.env.OS === 'string' && process.env.OS.toLowerCase().indexOf('win') > -1
    ? '--non-interactive'
    : '';

let create = () => run(`glide init ${nonInteractive}`);

let get = () =>
    checkYaml().then(() =>
        prompt.strictInput('provide the package URL or URLs separated by "space"', 'package urls').then((url) =>
            run(`glide get ${url} ${nonInteractive}`)));

let remove = () =>
    checkYaml().then(() =>
        prompt.strictInput('provide the package to be removed', 'package name').then((pkg) =>
            run(`glide rm ${pkg}`)));

let update = () => safeRun(`glide up`);

let install = () => safeRun('glide install');

let test = () => safeRun('glide nv');

let name = () => safeRun('glide name');

let tree = () => safeRun('glide tree');

let list = () => safeRun('glide list');

let help = () => safeRun('glide help');

let version = () => safeRun('glide --version');

let isAvailable = () => root && which('glide');

let safeRun = (command) => checkYaml().then(() => run(command));

let run = (command) => new Promise((resolve, reject) => {
    if (!isAvailable()) {
        return prompt.warn('Glide is not installed.');
    }

    cd(root);
    showRunningState(command);
    exec(command, (code, err, out) => {
        print(command, err, out);
        hideState();

        return err ? reject() : resolve();
    });
});

let checkYaml = () => new Promise((resolve, reject) => {
    fs.exists(yaml, (exists) => {
        if (exists) {
            return resolve();
        }

        prompt.strictPick(['Yes', 'No'], 'Glide workspace is not initialized. Do you want to initialize it?')
            .then((choice) => {
                if (choice == 'Yes') {
                    return create();
                }

                return reject();
            });
    });
});

let showRunningState = (command) => {
    statusbar.text = `$(package) ${command} ...`;
    statusbar.show();
};

let hideState = () => statusbar.hide();

let print = (command, stderr, stdout) => {
    output.appendLine(command);
    stderr ? output.appendLine(stderr) : output.appendLine(stdout);
    output.show();
};

exports.create = create;
exports.get = get;
exports.remove = remove;
exports.update = update;
exports.install = install;
exports.test = test;
exports.name = name;
exports.tree = tree;
exports.list = list;
exports.help = help;
exports.version = version;
