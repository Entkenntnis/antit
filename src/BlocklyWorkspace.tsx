import React from 'react'

import Blockly from 'blockly/core'

export function BlocklyWorkspace(props) {
  const editorDiv = React.createRef<HTMLDivElement>()
  React.useEffect(() => {
    props.workspace.current = Blockly.inject(editorDiv.current, props.options)
    props.onInjected()
  }, [])
  return <div ref={editorDiv} style={{ height: '100vh' }}></div>
}
