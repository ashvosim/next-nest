import { useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';

export const Editor = () => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: 'editor',
      placeholder: 'Введите текст',
    });

    return () => {
      editor.isReady
        .then(() => {
          editor.destroy();
        })
        .catch((e) => console.error('Error editor clean up', e));
    };
  }, []);
  return <div id="editor" />;
};

export default Editor;
