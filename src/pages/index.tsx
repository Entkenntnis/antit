import Head from 'next/head'
import React from 'react'

import Blockly from 'blockly/core'
import 'blockly/blocks'

import De from 'blockly/msg/de'

import { BlocklyWorkspace } from '../BlocklyWorkspace'

Blockly.Blocks['on_born'] = {
  init: function () {
    this.jsonInit({
      message0: 'Wenn Ameise geboren',
      style: {
        hat: 'cap',
      },
      colour: 70,
      tooltip: 'Wird einmalig ausgeführt wenn eine Ameise beim Bau erscheint.',
      nextStatement: null,
    })
  },
}

Blockly.Blocks['go_forward'] = {
  init: function () {
    this.jsonInit({
      message0: 'Gehe %1 Schritte',
      args0: [
        {
          type: 'field_number',
          name: 'NAME',
          value: 0,
        },
      ],
      colour: 170,
      tooltip: '',
      nextStatement: null,
      previousStatement: null,
    })
  },
}

Blockly.Blocks['turn_left'] = {
  init: function () {
    this.jsonInit({
      message0: 'Drehe %1 Grad nach links',
      args0: [
        {
          type: 'field_number',
          name: 'NAME',
          value: 0,
        },
      ],
      colour: 170,
      tooltip: '',
      nextStatement: null,
      previousStatement: null,
    })
  },
}

Blockly.Blocks['turn_right'] = {
  init: function () {
    this.jsonInit({
      message0: 'Drehe %1 Grad nach rechts',
      args0: [
        {
          type: 'field_number',
          name: 'NAME',
          value: 0,
        },
      ],
      colour: 170,
      tooltip: '',
      nextStatement: null,
      previousStatement: null,
    })
  },
}

Blockly.setLocale(De)

export default function Main() {
  const [loaded, setLoaded] = React.useState(false)
  React.useEffect(() => {
    setLoaded(true)
    window.Blockly = Blockly
  }, [])

  const workspace = React.useRef<Blockly.Workspace>()
  return (
    <>
      {loaded ? (
        <div>
          <Head>
            <title>AntIT!</title>
          </Head>

          <main>
            {/*<ReactBlockly
              toolboxBlocks={[
                { type: 'on_born' },
                { type: 'go_forward' },

                { type: 'turn_left' },
                { type: 'turn_right' },
                { type: 'controls_if' },
              ]}
              workspaceConfiguration={{
                
              }}
              wrapperDivClassName="fill-height"
            />*/}
            <BlocklyWorkspace
              workspace={workspace}
              onInjected={() => {
                console.log(workspace)
                // @ts-ignore
                window.workspace = workspace.current
              }}
              options={{
                grid: {
                  spacing: 20,
                  length: 3,
                  colour: '#ccc',
                  snap: true,
                },
                zoom: {
                  controls: true,
                  minScale: 0.75,
                },
                toolbox: {
                  kind: 'flyoutToolbox',
                  contents: [
                    {
                      kind: 'block',
                      type: 'on_born',
                    },
                    {
                      kind: 'block',
                      type: 'go_forward',
                    },
                  ],
                },
              }}
            />
          </main>
        </div>
      ) : null}
    </>
  )
}
