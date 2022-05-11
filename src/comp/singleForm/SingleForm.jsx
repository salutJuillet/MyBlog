// wysiwyg 불러오기
import React, { useEffect, useState } from 'react';
import { Editor} from 'react-draft-wysiwyg';
import { EditorState} from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import './singleform.css'

export default function SingleForm() {
    /* wysiwyg */
    const [ editorState, setEditorState ] = useState( () => 
        EditorState.createEmpty()
    );
    useEffect( () => {
        console.log(editorState);        
    }, [editorState]);

  return (
    <div className="sform">
        <img src="images/banner.jpg" alt="posting banner" className="bannerImg" />
        <h1 className="postingTitle">Posting</h1>
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder="제목을 입력하세요." className="writeInput" autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <div style={{border:'1px solid #333', padding: '2px', minHeight:'400px'}}>
                    <Editor
                        editorState = { editorState }
                        onEditorStateChange = { setEditorState }
                    />
            </div>
            </div>
            <div className="btnbox">
                <button className="writeSubmit"> Post </button>
            </div>
        </form>
    </div>
  )
}
