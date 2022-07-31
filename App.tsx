import React, { ReactNode } from 'react'
import { observer } from 'mobx-react'
import { configure } from 'mobx'

configure({ enforceActions: 'observed' })

@observer
class AppProvider extends React.Component<Props> {
  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>
  }
}

export default AppProvider

interface Props {
  children: ReactNode
}
