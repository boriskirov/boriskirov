#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

// Data for the card
const data = {
    name: chalk.bold.white("Boris Kirov"),
    work: `${chalk.white.bold("Product designer")}`,
    github: chalk.white.bold("https://github.com/boriskirov"),
    linkedin: chalk.white.bold("https://linkedin.com/in/boris-kirov-b6b110a4"),
    dribbble: chalk.white.bold("https://dribbble.com/boriskirov"),
    web: chalk.magentaBright("https://boriskirov.cc"),
    npm: chalk.white("npm") + " " + chalk.white("boriskirov"),

    labelWork: chalk.dim("Work:"),
    labelGitHub: chalk.dim("GitHub:"),
    labelLinkedIn: chalk.dim("LinkedIn:"),
    labelDribbble: chalk.dim("Dribbble"),
    labelWeb: chalk.dim("Web:"),
    labelCard: chalk.dim("Card:")
};

// Build the card
const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelDribbble}  ${data.dribbble}`,
        `${data.labelWeb}  ${data.web}`,
        `${data.labelCard}  ${data.npm}`,
        ``,
        `${chalk.italic("Currently I am getting things done at")} ${chalk.hex("#FFD02F").bold("Miro")}.`
    ].join("\n"),
    {
        float: 'left',
        padding: 2,
        borderStyle: "bold",
        borderColor: "gray"
    }
);

// Print the card
console.log(me);
