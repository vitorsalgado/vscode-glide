'use strict';

const vscode = require('vscode');
const commands = require('./commands');
const messages = require('./messages_handler');

let activate = (context) => {
    addCommand(context, 'glide.create', commands.create);
    addCommand(context, 'glide.get', commands.get);
    addCommand(context, 'glide.remove', commands.remove);
    addCommand(context, 'glide.update', commands.update);
    addCommand(context, 'glide.install', commands.install);
    addCommand(context, 'glide.test', commands.test);
    addCommand(context, 'glide.name', commands.name);
    addCommand(context, 'glide.tree', commands.tree);
    addCommand(context, 'glide.list', commands.list);
    addCommand(context, 'glide.help', commands.help);
    addCommand(context, 'glide.version', commands.version);
};

let deactivate = () => { };

let addCommand = (context, command, handler) => context.subscriptions.push(
    vscode.commands.registerCommand(command, handler)
);

exports.activate = activate;
exports.deactivate = deactivate;
