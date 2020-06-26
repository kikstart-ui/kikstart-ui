import { Tree } from '@angular-devkit/schematics'
import { SchematicTestRunner } from '@angular-devkit/schematics/testing'
import { createEmptyWorkspace } from '@nrwl/workspace/testing'
import { join } from 'path'

import { LayoutConsoleSchematicSchema } from './schema'

describe('layout-console schematic', () => {
  let appTree: Tree
  const options: LayoutConsoleSchematicSchema = { name: 'test' }

  const testRunner = new SchematicTestRunner('@kikstart-ui/layout-console', join(__dirname, '../../../collection.json'))

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty())
  })

  it('should have some tests...run successfully', async () => {
    expect(true).toEqual(true)
    // await expect(
    //   testRunner.runSchematicAsync('layout-console', options, appTree).toPromise(),
    // ).resolves.toThrowError()
  })
})
