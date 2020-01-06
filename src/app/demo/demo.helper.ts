import { CommentFormLoadingComponent } from './demos/ui-comment-form/comment-form-loading/comment-form-loading.component';

export class DemoHelper {
  static fileType = name => {
    const parts = name.split('.');
    const ext = parts[parts.length - 1];

    switch (ext) {
      case 'html':
        return 'html';
      case 'ts':
        return 'typescript';
      default:
        console.log(`Unknown ext ${ext}... Default: html`);
        return 'html';
    }
  };

  static file = (path, language = null) => {
    const parts = path.split('/');
    const name = parts[parts.length - 1];

    return {
      name,
      language: language ? language : DemoHelper.fileType(name),
      code: require(`!!raw-loader!./${path}`).default,
    };
  };

  static config = ({
    path,
    component,
    files,
    title,
    description,
  }: {
    path: string;
    component: any;
    files: string[];
    title: string;
    description: string;
  }) => {
    return {
      path,
      title,
      description,
      component,
      files: files.map(file => DemoHelper.file(`${path}/${file}`)),
    };
  };
}
