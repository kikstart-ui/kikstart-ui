import { Tree } from '@angular-devkit/schematics'
import { SchematicTestRunner } from '@angular-devkit/schematics/testing'
import { createEmptyWorkspace } from '@nrwl/workspace/testing'
import { join } from 'path'

import { SchematicsSchematicSchema } from './schema'

describe('schematics schematic', () => {
  let appTree: Tree
  const options: SchematicsSchematicSchema = { name: 'test' }

  const testRunner = new SchematicTestRunner('@kikstart-ui/schematics', join(__dirname, '../../../collection.json'))

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty())
  })

  it('should run successfully', async () => {
    await expect(testRunner.runSchematicAsync('schematics', options, appTree).toPromise()).resolves.not.toThrowError()
  })
})
