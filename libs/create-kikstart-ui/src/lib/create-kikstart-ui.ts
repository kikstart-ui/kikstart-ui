#!/usr/bin/env node

import { execSync } from 'child_process'
import { writeFileSync } from 'fs'
import * as inquirer from 'inquirer'
import * as path from 'path'
import { dirSync } from 'tmp'
import * as yargsParser from 'yargs-parser'
import { output } from './output'
import { determinePackageManager, showNxWarning } from './shared'

const tsVersion = '3.9.3'
const angularCliVersion = '10.0.0-rc.0'

const parsedArgs = yargsParser(process.argv, {
  string: [],
  boolean: ['help', 'interactive'],
})

if (parsedArgs.help) {
  showHelp()
  process.exit(0)
}

determineWorkspaceName(parsedArgs).then((name) => {
  return determineCli().then((cli) => {
    const tmpDir = createSandbox(determinePackageManager(), cli)
    createApp(tmpDir, cli, name)
    showNxWarning(name)
  })
})

function showHelp() {
  console.log(`
  Usage: create-kikstart-ui <name> [options] [new workspace options]

  Create a new Kikstart UI app

  Options:

    name                      workspace name (e.g., org name)
`)
}

function determineWorkspaceName(args: any): Promise<string> {
  const workspaceName: string = args._[2]

  if (workspaceName) {
    return Promise.resolve(workspaceName)
  }

  return inquirer
    .prompt([
      {
        name: 'WorkspaceName',
        message: `Workspace name (e.g., org name)    `,
        type: 'string',
      },
    ])
    .then((a) => {
      if (!a.WorkspaceName) {
        output.error({
          title: 'Invalid workspace name',
          bodyLines: [`Workspace name cannot be empty`],
        })
        process.exit(1)
      }
      return a.WorkspaceName
    })
}

function determineCli() {
  const angular = {
    package: '@angular/cli',
    version: angularCliVersion,
    command: 'ng',
  }
  return Promise.resolve(angular)
}

function createSandbox(packageManager: string, cli: { package: string; version: string }) {
  console.log(` Creating sandbox for installation...`)
  const tmpDir = dirSync().name
  writeFileSync(
    path.join(tmpDir, 'package.json'),
    JSON.stringify({
      dependencies: {
        [cli.package]: cli.version,
        typescript: tsVersion,
      },
      license: 'MIT',
    }),
  )

  execSync(`${packageManager} install --silent`, {
    cwd: tmpDir,
    stdio: [0, 1, 2],
  })

  return tmpDir
}

function createApp(tmpDir: string, cli: { command: string }, name: string) {
  const command = `new ${name}  --strict --style=scss --routing`

  console.log(command)
  execSync(`"${path.join(tmpDir, 'node_modules', '.bin', cli.command)}" ${command}`, {
    stdio: [0, 1, 2],
  })
  const projectDir = path.join(process.cwd(), name)

  execSync(`${cli.command} add @kikstart-ui/schematics`, {
    cwd: projectDir,
    stdio: [0, 1, 2],
  })
}
