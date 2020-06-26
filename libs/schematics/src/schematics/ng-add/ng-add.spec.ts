import { Tree } from '@angular-devkit/schematics'
import { SchematicTestRunner } from '@angular-devkit/schematics/testing'
import * as path from 'path'

// const collectionPath = path.join(__dirname, '../collection.json')
//
// const runner = new SchematicTestRunner('schematics', collectionPath)
//
// export async function createTestApp(tree: Tree): Promise<Tree> {
//   tree = await runner
//     .runExternalSchematicAsync('@schematics/angular', 'workspace', {
//       name: 'workspace',
//       newProjectRoot: '',
//       version: '9.1.0',
//     })
//     .toPromise()
//   tree = await runner
//     .runExternalSchematicAsync('@schematics/angular', 'application', { name: 'my-app' }, tree)
//     .toPromise()
//   return tree
// }
//
// describe('no-app', () => {
//   it('should fail with empty tree', async () => {
//     const result = await runner
//       .runSchematicAsync('ng-add', { project: 'my-app' }, Tree.empty())
//       .toPromise()
//       .catch((e) => e)
//     expect(result.message).toEqual('Cannot find angular.json')
//     expect(result instanceof Error).toEqual(true)
//   })
// })
//
describe('ng-add', () => {
  // let tree: Tree
  //
  // beforeEach(async () => {
  //   tree = Tree.empty()
  //   tree = await createTestApp(tree)
  // })

  it('should have some tests', async () => {
    // const result = await runner.runSchematicAsync('ng-add', {}, tree).toPromise()
    //
    // console.log(JSON.parse(result.readContent('/angular.json')).projects)
    //   console.log(result.files);
    //   // console.log(tree.getDir('/').subfiles);
    //   // console.log(tree.getDir('/').subdirs);
    //   // expect(result.files).toEqual(['/hello']);
    expect(true).toEqual(true)
  })
})

// describe('Store-Devtools ng-add Schematic', () => {
//   const schematicRunner = new SchematicTestRunner(
//     '@ngrx/store-devtools',
//     path.join(__dirname, '../collection.json')
//   );
//
//   // beforeEach(async () => {
//   //   appTree = await createWorkspace(schematicRunner, appTree);
//   // });
//   //
//   // it('should update package.json', () => {
//   //   const options = { ...defaultOptions };
//   //
//   //   const tree = schematicRunner.runSchematic('ng-add', options, appTree);
//   //   const packageJson = JSON.parse(tree.readContent('/package.json'));
//   //
//   //   expect(packageJson.dependencies['@ngrx/store-devtools']).toBeDefined();
//   // });
//   //
//   // it('should skip package.json update', () => {
//   //   const options = { ...defaultOptions, skipPackageJson: true };
//   //
//   //   const tree = schematicRunner.runSchematic('ng-add', options, appTree);
//   //   const packageJson = JSON.parse(tree.readContent('/package.json'));
//   //
//   //   expect(packageJson.dependencies['@ngrx/store-devtools']).toBeUndefined();
//   // });
//   //
//   // it('should be provided by default', () => {
//   //   const options = { ...defaultOptions };
//   //
//   //   const tree = schematicRunner.runSchematic('ng-add', options, appTree);
//   //   const content = tree.readContent(`${projectPath}/src/app/app.module.ts`);
//   //   expect(content).toMatch(
//   //     /import { StoreDevtoolsModule } from '@ngrx\/store-devtools';/
//   //   );
//   //   expect(content).toMatch(
//   //     /StoreDevtoolsModule.instrument\({ maxAge: 25, logOnly: environment.production }\)/
//   //   );
//   // });
//   //
//   // it('should import into a specified module', () => {
//   //   const options = { ...defaultOptions };
//   //
//   //   const tree = schematicRunner.runSchematic('ng-add', options, appTree);
//   //   const content = tree.readContent(`${projectPath}/src/app/app.module.ts`);
//   //   expect(content).toMatch(
//   //     /import { StoreDevtoolsModule } from '@ngrx\/store-devtools';/
//   //   );
//   // });
//   //
//   // it('should import the environments correctly', () => {
//   //   const options = { ...defaultOptions, module: 'app.module.ts' };
//   //
//   //   const tree = schematicRunner.runSchematic('ng-add', options, appTree);
//   //   const content = tree.readContent(`${projectPath}/src/app/app.module.ts`);
//   //   expect(content).toMatch(
//   //     /import { environment } from '..\/environments\/environment';/
//   //   );
//   // });
//   //
//   // it('should fail if specified module does not exist', () => {
//   //   const options = { ...defaultOptions, module: '/src/app/app.moduleXXX.ts' };
//   //   let thrownError: Error | null = null;
//   //   try {
//   //     schematicRunner.runSchematic('ng-add', options, appTree);
//   //   } catch (err) {
//   //     thrownError = err;
//   //   }
//   //   expect(thrownError).toBeDefined();
//   // });
//   //
//   // it('should fail if negative maxAges', () => {
//   //   const options = { ...defaultOptions, maxAge: -4 };
//   //
//   //   let thrownError: Error | null = null;
//   //   try {
//   //     schematicRunner.runSchematic('ng-add', options, appTree);
//   //   } catch (err) {
//   //     thrownError = err;
//   //   }
//   //   expect(thrownError).toBeDefined();
//   // });
//   //
//   // it('should fail if maxAge of 1', () => {
//   //   const options = { ...defaultOptions, maxAge: -4 };
//   //
//   //   let thrownError: Error | null = null;
//   //   try {
//   //     schematicRunner.runSchematic('ng-add', options, appTree);
//   //   } catch (err) {
//   //     thrownError = err;
//   //   }
//   //   expect(thrownError).toBeDefined();
//   // });
//   //
//   // it('should support a custom maxAge', () => {
//   //   const options = {
//   //     ...defaultOptions,
//   //     name: 'State',
//   //     maxAge: 5,
//   //   };
//   //
//   //   const tree = schematicRunner.runSchematic('ng-add', options, appTree);
//   //   const content = tree.readContent(`${projectPath}/src/app/app.module.ts`);
//   //   expect(content).toMatch(/maxAge: 5/);
//   // });
// });
