import * as emotionReact from '@emotion/react'
import * as emotionCore from '@emotion/core'
import { PureComponent } from 'react'
import ReactDOM from 'react-dom'

const stylesInCallbackReact = (props: any) =>
  emotionReact.css({
    color: 'red',
    background: 'yellow',
    width: `${props.scale * 100}px`,
  })

const stylesReact = emotionReact.css({
  color: 'red',
  width: '20px',
})

const stylesReact2 = emotionReact.css`
  color: red;
  width: 20px;
`

const stylesInCallbackCore = (props: any) =>
  emotionCore.css({
    color: 'red',
    background: 'yellow',
    width: `${props.scale * 100}px`,
  })

const stylesCore = emotionCore.css({
  color: 'red',
  width: '20px',
})

const stylesCore2 = emotionCore.css`
  color: red;
  width: 20px;
`
export class SimpleComponent extends PureComponent {
  render() {
    return (
      <>
        <div className={stylesReact}>
          <span>hello</span>
        </div>
        <div className={stylesCore}>
          <span>hello</span>
        </div>
      </>
    )
  }
}

ReactDOM.render(<SimpleComponent />, document.querySelector('#app'))
