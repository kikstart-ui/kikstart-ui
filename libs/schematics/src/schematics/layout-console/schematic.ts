import { normalize, Path } from '@angular-devkit/core'
import { apply, applyTemplates, chain, mergeWith, move, Rule, Tree, url } from '@angular-devkit/schematics'
import { getWorkspacePath, names, offsetFromRoot } from '@nrwl/workspace'
import { findModuleFromOptions, MODULE_EXT, ROUTING_MODULE_EXT } from '@schematics/angular/utility/find-module'
import { LayoutConsoleSchematicSchema } from './schema'

function addFiles(options: LayoutConsoleSchematicSchema): Rule {
  return mergeWith(
    apply(url(`./files`), [
      applyTemplates({
        ...options,
        ...names(options.name),
        offsetFromRoot: offsetFromRoot(options.path),
      }),
      move(options.path),
    ]),
  )
}

function getRoutingModulePath(host: Tree, modulePath: string): Path | undefined {
  const routingModulePath = modulePath.endsWith(ROUTING_MODULE_EXT)
    ? modulePath
    : modulePath.replace(MODULE_EXT, ROUTING_MODULE_EXT)

  return host.exists(routingModulePath) ? normalize(routingModulePath) : undefined
}

export default function (options: LayoutConsoleSchematicSchema): Rule {
  return (host: Tree) => {
    // Get either angular.json or workspace.json
    const workspaceFile = getWorkspacePath(host)

    // const workspace = getWorksp
    // Read the file
    const file = JSON.parse(host.read(workspaceFile).toString())

    // Project name can be passed in through options. Otherwise we'll look for the default.
    const projectName = options.project || file.defaultProject

    // Get a hold of the project definition
    const project = file.projects[projectName]

    // Determine path to project depending on the project type.
    const projectFiles = project.projectType === 'application' ? 'app' : 'lib'

    // Set the path property
    options.path = `${project.sourceRoot}/${projectFiles}`

    // Find the project's module
    options.module = findModuleFromOptions(host, options)

    // TODO: Update the route to include the newly generated layout.
    // const routingModulePath = getRoutingModulePath(host, options.module as string)

    return chain([addFiles(options)])
  }
}
